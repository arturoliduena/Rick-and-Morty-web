import { all } from 'redux-saga/effects';
import character from './character';
import episode from './episode';
import auth from './auth';
import favorite from './favorite';

export default function* rootSaga() {
  yield all([
    ...character,
    ...episode,
    ...auth,
    ...favorite,
  ]);
}