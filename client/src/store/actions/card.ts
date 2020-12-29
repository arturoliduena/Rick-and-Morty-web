import {
  CardActionTypes, 
  SORT_CARD,
} from './actionTypes';
import { OrderBy, Order } from '../../types';

export const sortCard = (orderBy: OrderBy, order: Order): CardActionTypes => ({
  type: SORT_CARD,
  payload: {
    orderBy,
    order,
  }
});