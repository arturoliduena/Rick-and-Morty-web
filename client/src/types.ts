export interface ICard {
  id: string
  title: string
  description: string
  img: string
  created_at: number
};

export enum OrderBy {
  title = 'title',
  created_at = 'created_at',
};

export enum Order {
  asc = 'asc',
  desc = 'desc',
};

export interface ICharacter {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: { name: string, url: string }
  name: string
  origin: { name: string, url: string }
  species: string
  status: string
  type: string
  url: string
};

export interface IInfo {
  count: number
  next: string
  pages: number
  prev: string | null
}

export interface IAuth {
  user: {
    id: number,
    username: string,
    email: string,
  } | null,
  authorized: boolean,
  message: string,
  error: any,
}