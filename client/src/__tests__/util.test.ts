import { editCard, deleteCard, sortCard } from '../store/util';
import { ICard, OrderBy, Order } from '../types';

describe('util order cards', () => {
  const cards: ICard[] = [
    {
      id: '1',
      title: 'name A',
      description: 'Seriously, straight up, just blast off into outer space today',
      img: 'https://images.unsh.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=eopy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      created_at: 3,
    },
    {
      id: '2',
      title: 'Explore The Galaxy',
      description: 'Seriously, straight up, just blast off into outer space today',
      img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      created_at: 2,
    },
    {
      id: '3',
      title: 'name C',
      description: 'Seriously, straight up, just blast off into outer space today',
      img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      created_at: 4,
    },
    {
      id: '4',
      title: 'name B',
      description: 'Seriously, straight up, just blast off into outer space today',
      img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      created_at: 1,
    },
  ];
  it('order cards ORDER_BY title ASC', () => {
    expect(sortCard(OrderBy.title, Order.asc, cards)).toEqual([
      {
        id: '2',
        title: 'Explore The Galaxy',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 2,
      },
      {
        id: '1',
        title: 'name A',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsh.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=eopy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 3,
      },
      {
        id: '4',
        title: 'name B',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 1,
      },
      {
        id: '3',
        title: 'name C',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 4,
      },
    ]);
  });

  it('order cards ORDER_BY title DESC', () => {
    expect(sortCard(OrderBy.title, Order.desc, cards)).toEqual([
      {
        id: '3',
        title: 'name C',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 4,
      },
      {
        id: '4',
        title: 'name B',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 1,
      },
      {
        id: '1',
        title: 'name A',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsh.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=eopy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 3,
      },
      {
        id: '2',
        title: 'Explore The Galaxy',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 2,
      },
    ]);
  });

  it('order cards ORDER_BY created_at ASC', () => {
    expect(sortCard(OrderBy.created_at, Order.asc, cards)).toEqual([
      {
        id: '4',
        title: 'name B',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 1,
      },
      {
        id: '2',
        title: 'Explore The Galaxy',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 2,
      },
      {
        id: '1',
        title: 'name A',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsh.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=eopy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 3,
      },
      {
        id: '3',
        title: 'name C',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 4,
      },
    ]);
  })

  it('order cards ORDER_BY created DESC', () => {
    expect(sortCard(OrderBy.created_at, Order.desc, cards)).toEqual([
      {
        id: '3',
        title: 'name C',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 4,
      },
      {
        id: '1',
        title: 'name A',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsh.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=eopy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 3,
      },
      {
        id: '2',
        title: 'Explore The Galaxy',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 2,
      },
      {
        id: '4',
        title: 'name B',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 1,
      },
    ]);
  });
})

describe('util edit cards', () => {
  const cards: ICard[] = [
    {
      id: '1',
      title: 'name A',
      description: 'Seriously, straight up, just blast off into outer space today',
      img: 'https://images.unsh.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=eopy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      created_at: 1,
    },
  ];

  it('edit card', () => {
    const edited: ICard = {
      id: '1',
      title: 'new name',
      description: 'new description',
      img: 'https://images.unsh.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=eopy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      created_at: 1,
    }
    expect(editCard(edited, cards)).toEqual([edited])
  });
});

describe('util delete cards', () => {
  const cards: ICard[] = [
    {
      id: '1',
      title: 'name A',
      description: 'Seriously, straight up, just blast off into outer space today',
      img: 'https://images.unsh.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=eopy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      created_at: 3,
    },
    {
      id: '2',
      title: 'Explore The Galaxy',
      description: 'Seriously, straight up, just blast off into outer space today',
      img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      created_at: 2,
    },
  ];
  it('delete card', () => {
    const id = '2';
    expect(deleteCard(id, cards)).toEqual([
      {
        id: '1',
        title: 'name A',
        description: 'Seriously, straight up, just blast off into outer space today',
        img: 'https://images.unsh.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=eopy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        created_at: 3,
      },
    ])
  });
})