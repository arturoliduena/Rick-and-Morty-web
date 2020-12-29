import { combineReducers } from 'redux';
import character from './character';
import episode from './episode';
import modal from './modal';
import card from './card';
import auth from './auth';
import favorite from './favorite';

const reducers = combineReducers({
  character,
  episode,
  modal,
  card,
  auth,
  favorite,
})

export default reducers;