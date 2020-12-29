import {
  ADD_EPISODES,
  GET_EPISODE,
  GET_EPISODES,
  ADD_EPISODE_SELECTED,
} from './actionTypes';

export const getEpisode = (id: number) => ({
  type: GET_EPISODE,
  id
});

export const addEpisodeSelected = (payload: any) => ({
  type: ADD_EPISODE_SELECTED,
  payload
})

export const getEpisodes = (page: number) => ({
  type: GET_EPISODES,
  page
})

export const addEpisodes = (payload: any) => ({
  type: ADD_EPISODES,
  payload
});