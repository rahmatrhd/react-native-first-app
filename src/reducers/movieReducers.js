const defaultState = {
  movies: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        movies: action.payload.movies
      }
      
    default:
      return state
  }
}
