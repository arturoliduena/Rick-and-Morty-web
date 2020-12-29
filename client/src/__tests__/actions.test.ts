import { deleteCard, editCard, sortCard, openModal, closeModal } from '../store/actions/modal';
import { CardActionTypes, DELETE_CARD, EDIT_CARD, ModalActionTypes, OPEN_MODAL, CLOSE_MODAL, SORT_CARD } from '../store/actions/actionTypes';
import { ICard, OrderBy, Order } from '../types';

describe('actions', () => {
  it('should create an action to delete a card', () => {
    const id = '2';
    const expectedAction: CardActionTypes = {
      type: DELETE_CARD,
      payload: id
    }
    expect(deleteCard(id)).toEqual(expectedAction)
  });
  it('should create an action to edit a card', () => {
    const card: ICard = {
      id: '2',
      title: 'Explore The Galaxy',
      description: 'Seriously, straight up, just blast off into outer space today',
      img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      created_at: 2,
    };
    const expectedAction: CardActionTypes = {
      type: EDIT_CARD,
      payload: card
    }
    expect(editCard(card)).toEqual(expectedAction)
  });
  it('should create an action to sort a card', () => {
    const sort: {
      orderBy: OrderBy, 
      order: Order
    } = {
      orderBy: OrderBy.created_at, 
      order: Order.asc
    }
    const expectedAction: CardActionTypes = {
      type: SORT_CARD,
      payload: sort
    }
    expect(sortCard(OrderBy.created_at, Order.asc)).toEqual(expectedAction)
  });
  it('should create an action to openModal', () => {
    const card = null;
    const expectedAction: ModalActionTypes = {
      type: OPEN_MODAL,
      payload: card
    }
    expect(openModal(null)).toEqual(expectedAction)
  });
  it('should create an action to closeModal', () => {
    const expectedAction: ModalActionTypes = {
      type: CLOSE_MODAL,
    }
    expect(closeModal()).toEqual(expectedAction)
  })
})