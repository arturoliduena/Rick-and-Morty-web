import { ICard, OrderBy, Order } from '../types';

export const sortCard = (orderBy: OrderBy, order: Order, cards: ICard[]): ICard[] => {
  const items = [...cards];
  items.sort((a, b) => {
    const A = a[orderBy].toString().toLowerCase();
    const B = b[orderBy].toString().toLowerCase();
    if (A > B) {
      return order === Order.asc ? 1 : -1;
    }
    if (A < B) {
      return order === Order.asc ? -1 : 1;
    }
    return 0;
  });
  return items;
};