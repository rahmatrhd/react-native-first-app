import axios from 'axios'

const API_KEY = '29406c57a0e043939ad25d9bc46405a8'

export const GET_MOVIES = (movies) => ({
  type: 'GET_MOVIES',
  payload: {
    movies
  }
})

export const getMovies = () => dispatch => {
  axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${API_KEY}`)
  .then(({data}) => {
    dispatch(GET_MOVIES(data.results.map((item, index) => ({
      id: index,
      ...item
    }))))
  })
}
