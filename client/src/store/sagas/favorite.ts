import { takeEvery, fork, put, call } from 'redux-saga/effects';
import * as actions from '../actions/favorite';
import {
  GET_FAVORITES,
  ADD_CHARACTER_FAV,
  REMOVE_CHARACTER_FAV,
} from '../actions/actionTypes';

import { getFavorites, addCharacterFav, removeCharacterFav } from '../api';

function* fetchFavorites() {
  try {
    const payload = yield call(getFavorites);
    console.log( payload )
    yield put(actions.SetFavorites(payload.data))
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchFavorites() {
  yield takeEvery(GET_FAVORITES, fetchFavorites);
}

function* fetchAddCharacterFav(action: any) {
  try {
    const payload = yield call(addCharacterFav, action.character_id);
    yield put(actions.SetFavorites(payload.data))
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchAddCharacterFav() {
  yield takeEvery(ADD_CHARACTER_FAV, fetchAddCharacterFav);
}

function* fetchRemoveCharacterFav(action: any) {
  try {
    const payload = yield call(removeCharacterFav, action.character_id);
    yield put(actions.SetFavorites(payload.data))
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchRemoveCharacterFav() {
  yield takeEvery(REMOVE_CHARACTER_FAV, fetchRemoveCharacterFav);
}


const favoritesSagas = [
  fork(watchFetchFavorites),
  fork(watchFetchAddCharacterFav),
  fork(watchFetchRemoveCharacterFav),
];

export default favoritesSagas;