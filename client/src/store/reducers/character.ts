import {
  CharacterActionTypes,
  ADD_CHARACTERS,
  GET_CHARACTER,
  ADD_CHARACTER_SELECTED,
} from '../actions/actionTypes';
import { ICharacter, IInfo } from '../../types';

interface CharactersState {
  info: IInfo,
  characters: ICharacter[],
  characterSelected: ICharacter | null,
}

const initialStateCharacter: CharactersState = {
  info: {
    count: 0,
    next: 'string',
    pages: 0,
    prev: null
  },
  characters: [],
  characterSelected: null,
};

function character(state: CharactersState = initialStateCharacter, action: CharacterActionTypes): CharactersState {
  switch (action.type) {
    case ADD_CHARACTERS:
      return {
        ...state,
        characters: action.characters,
        info: action.info,
      }
    case ADD_CHARACTER_SELECTED:
      return {
        ...state,
        characterSelected: action.payload,
      }
    case GET_CHARACTER:
      return {
        ...state,
        characterSelected: null,
      }
    default:
      return state
  }
}

export default character;