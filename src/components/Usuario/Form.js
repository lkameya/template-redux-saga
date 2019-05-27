import { Button } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import * as Yup from "yup";
import { CustomField } from '../_UI/CustomField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as UsuarioActions from '../../store/usuarios/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LinearProgress from '@material-ui/core/LinearProgress';

const validationSchema = Yup.object({
  loginUsuario: Yup.string("Digite o login").required("Digite o login"),
  nomeUsuario: Yup.string("Digite o nome")
    .required("Digite seu nome"),
  pswUsuario: Yup.string("")
    .min(8, "Senha precisa ter no mínimo 8 caracteres")
    .required("Digite sua senha"),
  emailUsuario: Yup.string("Informe seu e-mail")
    .email("Digite um e-mail válido")
    .required("Digite seu e-mail")
});

class UsuarioForm extends React.Component {
  saveUser(usuario, actions) {
    const { isDelete } = this.props;

    if (isDelete) {
      this.props.deleteRequest(usuario);
    }

    if (usuario.idUsuario) {
      this.props.editRequest(usuario);
    } else {
      this.props.addRequest(usuario);
    }
  }

  render() {
    const { loadingModal, pendingAction, activeModal, initialValues, title, isDelete } = this.props;

    return (
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          this.saveUser({
            idUsuario: values.idUsuario,
            loginUsuario: values.loginUsuario,
            nomeUsuario: values.nomeUsuario,
            pswUsuario: values.pswUsuario,
            emailUsuario: values.emailUsuario,
          }, actions);
        }}>
        {({ values, handleChange, handleBlur, isSubmitting }) => (
          <Dialog open={activeModal} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
            {loadingModal && <LinearProgress color="secondary" />}
            <Form>
              <DialogTitle id="form-dialog-title">{title}</DialogTitle>
              <DialogContent style={{ paddingBottom: '50px' }}>

                <Field
                  label="Login"
                  placeholder="Login"
                  name="loginUsuario"
                  component={CustomField}
                  disabled={isDelete}
                />
                <Field
                  label="Nome"
                  placeholder="Nome"
                  name="nomeUsuario"
                  component={CustomField}
                />
                <Field
                  label="Senha"
                  placeholder="Senha"
                  name="pswUsuario"
                  component={CustomField}
                />
                <Field
                  label="E-mail"
                  placeholder="E-mail"
                  name="emailUsuario"
                  component={CustomField}
                />
              </DialogContent>
              <DialogActions>
                <Button type="submit" color="primary" disabled={pendingAction}>
                  Salvar
          </Button>
                <Button onClick={this.props.handleClose} color="primary">
                  Cancelar
          </Button>
              </DialogActions>
            </Form>
          </Dialog>
        )
        }
      </Formik>
    )
  }
}

const mapStateToProps = state => ({
  usuarios: state.usuarios.data,
  loadingModal: state.usuarios.loadingModal,
  pendingAction: state.usuarios.pendingAction,
  activeModal: state.usuarios.activeModal
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsuarioActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UsuarioForm);
