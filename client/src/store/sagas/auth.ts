import { takeEvery, fork, put, call } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import {
  AuthActionTypes,
  LOGIN,
  LOGOUT,
  REGISTER,
  ME_AUTH,
} from '../actions/actionTypes';

import { login, logout, register, meAuth } from '../api';

function* handlerError(error: any) {
  if(error.status == 401){
    yield put(actions.setAuth(error.data))
  }
};

function* fetchLogin(action: any) {
  try {
    const payload = yield call(login, action.user);
    yield put(actions.setAuth(payload.data))
  } catch (e) {
    yield call(handlerError, e.response);
  }
}

function* watchFetchLogin() {
  yield takeEvery(LOGIN, fetchLogin);
}

function* fetchLogout(action: any) {
  try {
    const payload = yield call(logout);
    yield put(actions.setAuth(payload.data))
  } catch (e) {
    yield call(handlerError, e.response);
  }
}

function* watchFetchLogout() {
  yield takeEvery(LOGOUT, fetchLogout);
}

function* fetchRegister(action: any) {
  try {
    const payload = yield call(register, action.user);
    yield put(actions.setAuth(payload.data))
  } catch (e) {
    yield call(handlerError, e.response);
  }
}

function* watchFetchRegister() {
  yield takeEvery(REGISTER, fetchRegister);
}

function* fetchMeAuth(action: any) {
  try {
    const payload = yield call(meAuth);
    yield put(actions.setAuth(payload.data))
  } catch (e) {
    yield call(handlerError, e.response);
  }
}

function* watchFetchMeAuth() {
  yield takeEvery(ME_AUTH, fetchMeAuth);
}
const characterSagas = [
  fork(watchFetchLogin),
  fork(watchFetchLogout),
  fork(watchFetchRegister),
  fork(watchFetchMeAuth),
];

export default characterSagas;