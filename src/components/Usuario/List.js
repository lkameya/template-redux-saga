import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UsuarioActions from '../../store/usuarios/actions';
import UsuarioForm from './Form';
import MaterialTable from 'material-table';
import Feedback from '../_UI/Styled/Feedback';
import Button from '@material-ui/core/Button';

class UsuarioList extends Component {
  state = {
    editMode: false,
    deleteMode: false,
  }

  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  handleClose = () => {
    this.props.closeModal();
  }

  closeFeedback = () => {
    this.props.closeFeedback();
  }

  addUsuario = () => {
    this.setState({ editMode: false });
    this.props.openModalCreate();
  }

  editUsuario = item => {
    // buscar o usuario no banco e alterar o initualValues do form.
    this.setState({ editMode: true });
    this.props.getUserById(item.idUsuario);
  }

  deleteUsuario = item => {
    // buscar o usuario no banco e alterar o initualValues do form.
    this.setState({ deleteMode: true });
    this.props.deleteUser(item.idUsuario);
  }

  render() {
    const { usuarios, loading, feedback, error, initialValues } = this.props;
    const headers = [
      {
        title: 'Id',
        field: 'idUsuario'
      },
      {
        title: 'Nome',
        field: 'nomeUsuario'
      },
      {
        title: 'Login',
        field: 'loginUsuario'
      },
      {
        title: 'E-mail',
        field: 'emailUsuario'
      },
    ];

    return (
      <div>
        <MaterialTable
          localization={{
            pagination: {
              labelDisplayedRows: '{from}-{to} de {count}'
            },
            toolbar: {
              nRowsSelected: '{0} row(s) selected'
            },
            header: {
              actions: 'Ações'
            },
            body: {
              emptyDataSourceMessage: 'Nenhum registro encontrado',
              filterRow: {
                filterTooltip: 'Filter'
              }
            }
          }}
          isLoading={loading}
          data={usuarios}
          columns={headers}
          title="Usuários"
          searchable={true}
          actions={[
            {
              icon: () => <Button variant="contained" color="primary"> Incluir </Button>,
              tooltip: 'Incluir',
              isFreeAction: true,
              onClick: () => this.addUsuario()
            },
            {
              icon: 'edit',
              tooltip: 'Editar',
              onClick: (event, rowData) => this.editUsuario(rowData)
            },
            rowData => ({
              icon: 'delete',
              tooltip: 'Excluir',
              onClick: (event, rowData) => this.deleteUsuario(rowData),
              disabled: rowData.birthYear < 2000
            })
          ]}
          options={{
            actionsColumnIndex: -1,
            search: false
          }}
        />
        <UsuarioForm
          handleClose={this.handleClose}
          title={this.state.editMode ? 'Editar' : 'Incluir novo'}
          initialValues={initialValues}
        />
        <Feedback open={feedback} closeFeedback={this.closeFeedback} error={error}
          message={this.state.editMode ? 'Usuário atualizado com sucesso' : 'Usuário incluído com sucesso'} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usuarios: state.usuarios.data,
  loading: state.usuarios.loading,
  activeModal: state.usuarios.activeModal,
  feedback: state.usuarios.feedback,
  error: state.usuarios.error,
  initialValues: state.usuarios.initialValues,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsuarioActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UsuarioList);
