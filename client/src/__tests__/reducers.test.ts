import { rootReducer } from '../store';
import { cardReducer, modalReducer } from '../store/reducers';
import { INIT, ADD_CARD, DELETE_CARD, EDIT_CARD, OPEN_MODAL, CLOSE_MODAL, SORT_CARD } from '../store/actions/actionTypes';
import { ICard, OrderBy, Order } from '../types';

describe('Initial State', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, { type: INIT }))
      .toEqual({
        card: {
          cards: []
        },
        modal: {
          isOpen: false,
          itemToEdit: null
        }
      });
  });
});

describe('cards reducer', () => {
  const card: ICard = {
    id: '1',
    title: 'Explore The Galaxy',
    description: 'Seriously, straight up, just blast off into outer space today',
    img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
    created_at: 1,
  };
  const cards: ICard[] = [
    {
      id: '1',
      title: 'Explore The Galaxy',
      description: 'Seriously, straight up, just blast off into outer space today',
      img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      created_at: 1,
    },
    {
      id: '2',
      title: 'name A',
      description: 'Seriously, straight up, just blast off into outer space today',
      img: 'https://images.unsh.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=eopy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      created_at: 2,
    }
  ];
  it('should handle ADD_CARD', () => {
    expect(
      cardReducer({ cards: [] }, {
        type: ADD_CARD,
        payload: card
      })
    ).toEqual({
      cards: [card]
    })
  });

  it('should handle DELETE_CARD', () => {
    expect(
      cardReducer({ cards }, {
        type: DELETE_CARD,
        payload: '2'
      })
    ).toEqual({
      cards: [card]
    })
  });

  it('should handle ADD_CARD', () => {
    const cardEdited: ICard = {
      id: '1',
      title: 'card Edited',
      description: 'Seriously, straight up, just blast off into outer space today',
      img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      created_at: 1,
    };

    expect(
      cardReducer({ cards: [card] }, {
        type: EDIT_CARD,
        payload: cardEdited
      })
    ).toEqual({
      cards: [cardEdited]
    })
  });

  it('should handle SORT_CARD', () => {
    expect(
      cardReducer({ cards }, {
        type: SORT_CARD,
        payload: {
          orderBy: OrderBy.created_at,
          order: Order.desc
        }
      })
    ).toEqual({
      cards: cards.reverse()
    })
  });
});

describe('modal reducer', () => {
  const modalState = {
    itemToEdit: null,
    isOpen: false
  }

  it('should handle OPEN_MODAL', () => {
    expect(
      modalReducer(modalState, {
        type: OPEN_MODAL,
        payload: null
      })
    ).toEqual({
      itemToEdit: null,
      isOpen: true
    })
  });

  it('should handle CLOSE_MODAL', () => {
    expect(
      modalReducer(modalState, {
        type: CLOSE_MODAL,
      })
    ).toEqual(modalState)
  });
});