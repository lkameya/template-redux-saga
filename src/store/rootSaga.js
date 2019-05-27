import { all, takeLatest } from 'redux-saga/effects';
import { add, load, getUserById, edit } from './usuarios/sagas';
import { UsuarioTypes } from './usuarios/types';


export default function* rootSaga() {
  return yield all([
    takeLatest(UsuarioTypes.LOAD_REQUEST, load),
    takeLatest(UsuarioTypes.ADD_REQUEST, add),
    takeLatest(UsuarioTypes.EDIT_REQUEST, edit),
    takeLatest(UsuarioTypes.GET_USER_BY_ID, getUserById),
  ])
};
