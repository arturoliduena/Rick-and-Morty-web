import {
  AuthActionTypes,
  LOGIN,
  LOGOUT,
  REGISTER,
  SET_AUTH,
  ME_AUTH,
} from '../actions/actionTypes';
import { IAuth } from '../../types';

interface AuthState {
  user: IAuth['user'],
  authorized: IAuth['authorized'],
  message: IAuth['message'],
  error: IAuth['error'],
  loading: boolean,
}
const initialStateAuth: AuthState = {
  user: null,
  authorized: false,
  message: '',
  error: null,
  loading: false,
};

function character(state: AuthState = initialStateAuth, action: AuthActionTypes): AuthState {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      }
    case LOGOUT:
      return {
        ...state,
        loading: true,
      }
    case REGISTER:
      return {
        ...state,
        loading: true,
      }
    case ME_AUTH:
      return {
        ...state,
        loading: true,
      }
    case SET_AUTH:
      return {
        ...state,
        ...action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default character;