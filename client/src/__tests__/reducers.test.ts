import rootReducer from '../store/reducers';
import modalReducer from '../store/reducers/modal';
import characterReducer from '../store/reducers/character';
import { ICharacter } from '../types';
import { OPEN_MODAL_LOGIN, CLOSE_MODAL_LOGIN } from '../store/actions/actionTypes'
describe('Initial State', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, { type: 'INIT' }))
      .toEqual({
        auth: {
          authorized: false,
          error: null,
          loading: false,
          message: "",
          user: null,
        },
        card: {
          cards: [],
        },
        character: {
          characterSelected: null,
          characters: [],
          info: {
            count: 0,
            next: 'string',
            pages: 0,
            prev: null,
          },
        },
        episode: {
          episodeSelected: null,
          episodes: {
            info: {
              pages: 0,
            },
            results: [],
          },
        },
        favorite: {
          characters: [],
        },
        modal: {
          isOpenLogin: false,
          isOpenRegister: false,
        }
      });
  });
});

describe('modal reducer', () => {
  const modalState = {
    isOpenLogin: false,
    isOpenRegister: false,
  }

  it('should handle OPEN_MODAL_LOGIN', () => {
    expect(
      modalReducer(modalState, {
        type: OPEN_MODAL_LOGIN,
      })
    ).toEqual({
      isOpenLogin: true,
      isOpenRegister: false,
    })
  });

  it('should handle CLOSE_MODAL_LOGIN', () => {
    expect(
      modalReducer(modalState, {
        type: CLOSE_MODAL_LOGIN,
      })
    ).toEqual(modalState)
  });
});