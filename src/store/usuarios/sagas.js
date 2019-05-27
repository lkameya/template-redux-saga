import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import {
  loadFailure,
  loadSuccess,
  addSuccess,
  addFailure,
  showFeedback,
  getUserByIdSuccess, openModal, editSuccess, editFailure
} from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'usuarios');
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* add(action) {
  try {
    const response = yield call(api.post, 'usuarios', action.payload);

    yield load();
    yield put(addSuccess(response.data));
    yield put(showFeedback());
  } catch (err) {
    yield put(addFailure());
    yield put(showFeedback());
  }
}


export function* getUserById(action) {
  try {
    const response = yield call(api.get, `usuarios/${action.payload}`);
    yield put(getUserByIdSuccess(response.data));

  } catch (err) {
  }
}

export function* edit(action) {
  try {
    console.log(action);
    const response = yield call(api.put, `usuarios/${action.payload.idUsuario}`, action.payload);

    yield load();
    yield put(editSuccess(response.data));
    yield put(showFeedback());



  } catch (err) {
    yield put(editFailure());
    yield put(showFeedback());
  }
}
