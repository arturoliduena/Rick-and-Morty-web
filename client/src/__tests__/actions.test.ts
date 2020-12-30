import { closeModalLogin, openModalLogin, closeModalRegister, openModalRegister } from '../store/actions/modal';
import { getCharacters, addCharacters } from '../store/actions/character';
import { CharacterActionTypes, ModalActionTypes } from '../store/actions/actionTypes';
import { ICharacter } from '../types';

describe('actions', () => {
  it('should create an action to open the login modal', () => {
    const expectedAction: ModalActionTypes = {
      type: 'OPEN_MODAL_LOGIN',
    }
    expect(openModalLogin()).toEqual(expectedAction)
  });
  it('should create an action to close the login modal', () => {
    const expectedAction: ModalActionTypes = {
      type: 'CLOSE_MODAL_LOGIN',
    }
    expect(closeModalLogin()).toEqual(expectedAction)
  });
  it('should create an action to get characters', () => {
    const page = 1;
    const expectedAction: CharacterActionTypes = {
      type: 'GET_CHARACTERS',
      page
    }
    expect(getCharacters(page)).toEqual(expectedAction)
  });
})