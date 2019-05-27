import { action } from 'typesafe-actions';
import { UsuarioTypes } from './types';

export const loadRequest = () => action(UsuarioTypes.LOAD_REQUEST);
export const loadSuccess = (data) => action(UsuarioTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(UsuarioTypes.LOAD_FAILURE);

export const addRequest = (data) => action(UsuarioTypes.ADD_REQUEST, data);
export const addSuccess = (data) => action(UsuarioTypes.ADD_SUCCESS, { data });
export const addFailure = () => action(UsuarioTypes.ADD_FAILURE);

export const editRequest = (data) => action(UsuarioTypes.EDIT_REQUEST, data);
export const editSuccess = (data) => action(UsuarioTypes.EDIT_SUCCESS, { data });
export const editFailure = () => action(UsuarioTypes.EDIT_FAILURE);

export const getUserById = (id) => action(UsuarioTypes.GET_USER_BY_ID, id);
export const getUserByIdSuccess = (data) => action(UsuarioTypes.GET_USER_BY_ID_SUCCESS, { data });

export const openModal = () => action(UsuarioTypes.OPEN_MODAL);
export const closeModal = () => action(UsuarioTypes.CLOSE_MODAL);

export const openModalCreate = () => action(UsuarioTypes.OPEN_MODAL_CREATE);

export const showFeedback = () => action(UsuarioTypes.SHOW_FEEDBACK);
export const closeFeedback = () => action(UsuarioTypes.CLOSE_FEEDBACK);