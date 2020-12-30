import { sortCard } from '../store/util';
import { OrderBy, Order } from '../types';

describe('util order cards', () => {
  const cards: any[] = [
    {
      id: '1',
      title: 'name A',
      created_at: 3,
    },
    {
      id: '2',
      title: 'Explore The Galaxy',
      created_at: 2,
    },
    {
      id: '3',
      title: 'name C',
      created_at: 4,
    },
    {
      id: '4',
      title: 'name B',
      created_at: 1,
    },
  ];
  it('order cards ORDER_BY title ASC', () => {
    expect(sortCard(OrderBy.title, Order.asc, cards)).toEqual([
      {
        id: '2',
        title: 'Explore The Galaxy',
        created_at: 2,
      },
      {
        id: '1',
        title: 'name A',
        created_at: 3,
      },
      {
        id: '4',
        title: 'name B',
        created_at: 1,
      },
      {
        id: '3',
        title: 'name C',
        created_at: 4,
      },
    ]);
  });

  it('order cards ORDER_BY title DESC', () => {
    expect(sortCard(OrderBy.title, Order.desc, cards)).toEqual([
      {
        id: '3',
        title: 'name C',
        created_at: 4,
      },
      {
        id: '4',
        title: 'name B',
        created_at: 1,
      },
      {
        id: '1',
        title: 'name A',
        created_at: 3,
      },
      {
        id: '2',
        title: 'Explore The Galaxy',
        created_at: 2,
      },
    ]);
  });

  it('order cards ORDER_BY created_at ASC', () => {
    expect(sortCard(OrderBy.created_at, Order.asc, cards)).toEqual([
      {
        id: '4',
        title: 'name B',
        created_at: 1,
      },
      {
        id: '2',
        title: 'Explore The Galaxy',
        created_at: 2,
      },
      {
        id: '1',
        title: 'name A',
        created_at: 3,
      },
      {
        id: '3',
        title: 'name C',
        created_at: 4,
      },
    ]);
  })

  it('order cards ORDER_BY created DESC', () => {
    expect(sortCard(OrderBy.created_at, Order.desc, cards)).toEqual([
      {
        id: '3',
        title: 'name C',
        created_at: 4,
      },
      {
        id: '1',
        title: 'name A',
        created_at: 3,
      },
      {
        id: '2',
        title: 'Explore The Galaxy',
        created_at: 2,
      },
      {
        id: '4',
        title: 'name B',
        created_at: 1,
      },
    ]);
  });
});