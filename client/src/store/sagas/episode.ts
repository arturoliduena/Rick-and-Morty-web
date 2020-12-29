import { takeEvery, fork, put, call } from 'redux-saga/effects';
import * as actions from '../actions/episode';
import {
  GET_EPISODE,
  GET_EPISODES,
} from '../actions/actionTypes';

import { getEpisodes, getEpisode } from '../api';

// create a generator function
function* fetchEpisodes(action: any) {
  // try to make the api call
  try {
    // yield the api responsse into data
    const payload = yield call(getEpisodes, action.page);
    yield put(actions.addEpisodes(payload.data))
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchEpisodes() {
  yield takeEvery(GET_EPISODES, fetchEpisodes);
}

// create a generator function
function* fetchEpisode(action: any) {
  // try to make the api call
  try {
    // yield the api responsse into data
    const payload = yield call(getEpisode, action.id);
    yield put(actions.addEpisodeSelected(payload.data))
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchEpisode() {
  yield takeEvery(GET_EPISODE, fetchEpisode);
}

const episodeSagas = [
  fork(watchFetchEpisodes),
  fork(watchFetchEpisode),
];

export default episodeSagas;