import {
  ADD_EPISODES,
  GET_EPISODE,
  ADD_EPISODE_SELECTED,
} from '../actions/actionTypes';

const initialStateEpisode = {
  episodes: {
    info: {
      pages: 0,
    },
    results: [],
  },
  episodeSelected: null,
};

function episode(state = initialStateEpisode, action: any) {
  switch (action.type) {
    case ADD_EPISODES:
      return {
        ...state,
        episodes: action.payload,
      }
    case GET_EPISODE:
      return {
        ...state,
        episodeSelected: null,
      }
    case ADD_EPISODE_SELECTED:
      return {
        ...state,
        episodeSelected: action.payload,
      }
    default:
      return state
  }
}

export default episode;