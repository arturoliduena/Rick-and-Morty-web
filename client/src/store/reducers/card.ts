import {
  CardActionTypes,
  SORT_CARD,
} from '../actions/actionTypes';
import { ICard } from '../../types';
import { sortCard } from '../util';

const cards: ICard[] = []

interface CardState {
  cards: ICard[],
}
const initialCardState: CardState = {
  cards
}

export function card(state: CardState = initialCardState, action: CardActionTypes): CardState {
  switch (action.type) {
    case SORT_CARD:
      return {
        ...state,
        cards: sortCard(action.payload.orderBy, action.payload.order, state.cards)
      };
    default:
      return state
  }
};

export default card;