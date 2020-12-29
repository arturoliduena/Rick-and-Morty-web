import { combineReducers } from 'redux';
import character from './character';
import episode from './episode';
import modal from './modal';
import card from './card';
import auth from './auth';

const reducers = combineReducers({
  character,
  episode,
  modal,
  card,
  auth,
})

export default reducers;