import { UsuarioTypes } from './types';

const INITIAL_STATE = {
  data: [], // Usuarios
  initialvalues: {
    idUsuario: 0,
    loginUsuario: '',
    nomeUsuario: '',
    emailUsuario: '',
    pswUsuario: ''
  },
  error: false, // Retorna erro em alguma requisição 
  loading: false, // Controla o carregamento dos usuários na tela de exibição
  pendingAction: false, // Controla alguma ação realizada pelo usuário 
  activeModal: false, // Controla a modal de formulário na inserção e edição do registro
  feedback: false,
  loadingModal: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsuarioTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case UsuarioTypes.LOAD_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload.data };
    case UsuarioTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    case UsuarioTypes.GET_USER_BY_ID:
      return { ...state };
    case UsuarioTypes.GET_USER_BY_ID_SUCCESS:
      console.log(action.payload.data);
      return { ...state, initialValues: action.payload.data, activeModal: true };

    case UsuarioTypes.ADD_REQUEST:
      return { ...state, loadingModal: true, pendingAction: true };
    case UsuarioTypes.ADD_SUCCESS:
      return { ...state, loadingModal: false, error: false, pendingAction: false, activeModal: false };
    case UsuarioTypes.ADD_FAILURE:
      return { ...state, loadingModal: false, error: true, pendingAction: false, data: [] };

    case UsuarioTypes.EDIT_REQUEST:
      return { ...state, loadingModal: true, pendingAction: true };
    case UsuarioTypes.EDIT_SUCCESS:
      return { ...state, loadingModal: false, error: false, pendingAction: false, activeModal: false };
    case UsuarioTypes.EDIT_FAILURE:
      return { ...state, loadingModal: false, error: true, pendingAction: false, data: [] };

    case UsuarioTypes.OPEN_MODAL_CREATE:
      return { ...state, initialValues: INITIAL_STATE.initialvalues, activeModal: true }

    case UsuarioTypes.OPEN_MODAL:
      return { ...state, activeModal: true }

    case UsuarioTypes.CLOSE_MODAL:
      return { ...state, activeModal: false }

    case UsuarioTypes.SHOW_FEEDBACK:
      return { ...state, feedback: true }

    case UsuarioTypes.CLOSE_FEEDBACK:
      return { ...state, feedback: false }

    default:
      return state;
  }
};

export default reducer;
