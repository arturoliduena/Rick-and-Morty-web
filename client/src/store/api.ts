import axios from 'axios';

export const getCharacters = (page: number) => {
  return axios.get('http://localhost:3001/character/', {
    params: {
      page
    }
  })
};

export const getCharacter = (id: number) => {
  return axios.get(`http://localhost:3001/character/${id}`)
};

export const getEpisodes = (page: number) => {
  return axios.get('http://localhost:3001/episode/', {
    params: {
      page
    }
  })
};

export const getEpisode = (id: number) => {
  return axios.get(`http://localhost:3001/episode/${id}`)
};

export const login = (user: {email: string, password: string}) => {
  return axios.post('http://localhost:3001/auth/login', user)
};

export const register = (user: {username: string, email: string, password: string}) => {
  return axios.post('http://localhost:3001/auth/register', user)
};

export const logout = () => {
  return axios.get('http://localhost:3001/auth/logout')
};

export const meAuth = () => {
  return axios.get('http://localhost:3001/users/me')
};
