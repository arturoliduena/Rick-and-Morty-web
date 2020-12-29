import axios from 'axios';

axios.defaults.withCredentials = true;
const api = 'http://localhost:3001'
export const getCharacters = (page: number) => {
  return axios.get(`${api}/character/`, {
    params: {
      page
    }
  })
};

export const getCharacter = (id: number) => {
  return axios.get(`${api}/character/${id}`)
};

export const getEpisodes = (page: number) => {
  return axios.get(`${api}/episode/`, {
    params: {
      page
    }
  })
};

export const getEpisode = (id: number) => {
  return axios.get(`${api}/episode/${id}`)
};

export const login = (user: {email: string, password: string}) => {
  return axios.post(`${api}/auth/login`, user)
};

export const register = (user: {username: string, email: string, password: string}) => {
  return axios.post(`${api}/auth/register`, user)
};

export const logout = () => {
  return axios.get(`${api}/auth/logout`)
};

export const meAuth = () => {
  return axios.get(`${api}/users/me`)
};

export const addCharacterFav = (id: number) => {
  return axios.post(`${api}/favorite/character`, { id, type: 'add' })
};

export const removeCharacterFav = (id: number) => {
  return axios.post(`${api}/favorite/character`, { id, type: 'remove' })
};

export const getFavorites = () => {
  return axios.get(`${api}/favorite/`)
};
