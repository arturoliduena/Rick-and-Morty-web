import {
  FavActionTypes,
  SET_FAVORITES,
} from '../actions/actionTypes';
import { IFavorites } from '../../types';

const initialStateFavorite: IFavorites = {
  characters: [],
};

function favorite(state: IFavorites = initialStateFavorite, action: FavActionTypes): IFavorites {
  switch (action.type) {
    case SET_FAVORITES:
      return {
        ...state,
        ...action.favorites,
      }
    default:
      return state
  }
}

export default favorite;