import {
  CaracterActionTypes,
  ADD_CHARACTERS,
  GET_CHARACTER,
  GET_CHARACTERS,
  ADD_CHARACTER_SELECTED,
} from './actionTypes';
import { ICharacter, IInfo } from '../../types';

export const getCharacter = (id: number): CaracterActionTypes => ({
  type: GET_CHARACTER,
  id
});

export const addCharacterSelected = (payload: ICharacter): CaracterActionTypes => ({
  type: ADD_CHARACTER_SELECTED,
  payload
});

export const getCharacters = (page: number): CaracterActionTypes => ({
  type: GET_CHARACTERS,
  page
});

export const addCharacters = (characters: ICharacter[], info: IInfo): CaracterActionTypes => ({
  type: ADD_CHARACTERS,
  characters,
  info,
});