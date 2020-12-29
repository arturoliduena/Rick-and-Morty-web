import {
  AuthActionTypes,
  LOGIN,
  LOGOUT,
  REGISTER,
  SET_AUTH,
  ME_AUTH,
} from './actionTypes';
import { IAuth } from '../../types';

export const login = (user: { email: string, password: string}): AuthActionTypes => ({
  type: LOGIN,
  user
});

export const logout = (): AuthActionTypes => ({
  type: LOGOUT,
});

export const register = (user: {username: string, email: string, password: string}): AuthActionTypes => ({
  type: REGISTER,
  user
});

export const setAuth = (payload: IAuth): AuthActionTypes => ({
  type: SET_AUTH,
  payload
});

export const meAuth = (): AuthActionTypes => ({
  type: ME_AUTH,
});