import { ICharacter, IInfo, IAuth, Order, OrderBy } from '../../types';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_AUTH = 'SET_AUTH';
export const REGISTER = 'REGISTER';
export const ME_AUTH = 'ME_AUTH';
export const GET_CHARACTER = 'GET_CHARACTER';
export const ADD_CHARACTER_SELECTED = 'ADD_CHARACTER_SELECTED';
export const GET_CHARACTERS = 'GET_CHARACTERS';
export const ADD_CHARACTERS = 'ADD_CHARACTERS';
export const GET_EPISODE = 'GET_EPISODE';
export const ADD_EPISODE_SELECTED = 'ADD_EPISODE_SELECTED';
export const GET_EPISODES = 'GET_EPISODES';
export const ADD_EPISODES = 'ADD_EPISODES';

export const SORT_CARD = "SORT_CARD";
export const OPEN_MODAL_LOGIN = 'OPEN_MODAL_LOGIN';
export const CLOSE_MODAL_LOGIN = 'CLOSE_MODAL_LOGIN';
export const OPEN_MODAL_REGISTER = 'OPEN_MODAL_REGISTER';
export const CLOSE_MODAL_REGISTER = 'CLOSE_MODAL_REGISTER';

interface SortCardAction {
  type: typeof SORT_CARD
  payload: {
    orderBy: OrderBy,
    order: Order,
  }
}

export type CardActionTypes = SortCardAction;

interface GetCharacterAction {
  type: typeof GET_CHARACTER
  id: number
}

interface AddCharacterSelectedAction {
  type: typeof ADD_CHARACTER_SELECTED
  payload: ICharacter
}

interface GetCharactersAction {
  type: typeof GET_CHARACTERS
  page: number
}

interface AddCharactersAction {
  type: typeof ADD_CHARACTERS
  characters: ICharacter[]
  info: IInfo
}

export type CaracterActionTypes = GetCharacterAction | AddCharacterSelectedAction | GetCharactersAction | AddCharactersAction;

interface OpenModalAction {
  type: typeof OPEN_MODAL_LOGIN | typeof OPEN_MODAL_REGISTER
}

interface CloseModalAction {
  type: typeof CLOSE_MODAL_LOGIN | typeof CLOSE_MODAL_REGISTER
}

export type ModalActionTypes = OpenModalAction | CloseModalAction;

interface LoginAction {
  type: typeof LOGIN
  user: {
    email: string,
    password: string,
  }
}

interface LogoutAction {
  type: typeof LOGOUT
}

interface RegisterAction {
  type: typeof REGISTER
  user: {
    username: string,
    email: string,
    password: string,
  }
}

interface SetAuthAction {
  type: typeof SET_AUTH
  payload: IAuth
}

interface MeAuthAction {
  type: typeof ME_AUTH
}
export type AuthActionTypes = LoginAction | LogoutAction | RegisterAction | SetAuthAction | MeAuthAction;
