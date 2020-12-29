import {
  FavActionTypes,
  GET_FAVORITES,
  ADD_CHARACTER_FAV,
  REMOVE_CHARACTER_FAV,
  SET_FAVORITES
} from './actionTypes';
import { IFavorites } from '../../types';

export const getFavorites = (): FavActionTypes => ({
  type: GET_FAVORITES,
});

export const addFavCharacter = (character_id: number): FavActionTypes => ({
  type: ADD_CHARACTER_FAV,
  character_id
});

export const RemoveFavCharacter = (character_id: number): FavActionTypes => ({
  type: REMOVE_CHARACTER_FAV,
  character_id
});

export const SetFavorites = (favorites: IFavorites): FavActionTypes => ({
  type: SET_FAVORITES,
  favorites
});