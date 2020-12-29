import { takeEvery, fork, put, call } from 'redux-saga/effects';
import * as actions from '../actions/character';
import {
  GET_CHARACTER,
  GET_CHARACTERS,
} from '../actions/actionTypes';

import { getCharacters, getCharacter } from '../api';

// create a generator function
function* fetchCharacters(action: any) {
  // try to make the api call
  try {
    // yield the api responsse into data
    const payload = yield call(getCharacters, action.page);
    const { info, results } = payload.data;
    yield put(actions.addCharacters(results, info))
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchCharacters() {
  yield takeEvery(GET_CHARACTERS, fetchCharacters);
}

// create a generator function
function* fetchCharacter(action: any) {
  // try to make the api call
  try {
    // yield the api responsse into data
    const payload = yield call(getCharacter, action.id);
    yield put(actions.addCharacterSelected(payload.data))
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchCharacter() {
  yield takeEvery(GET_CHARACTER, fetchCharacter);
}


const characterSagas = [
  fork(watchFetchCharacters),
  fork(watchFetchCharacter),
];

export default characterSagas;