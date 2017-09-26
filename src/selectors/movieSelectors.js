export const listMovies = ({ movies }) => movies.map((movie, index) => ({
  id: index,
  title: movie.display_title,
  by: movie.byline,
  summary: movie.summary_short,
  imageUrl: movie.multimedia.src
}))

export const getById = (state, id) => {
  console.log('asd', state, id)
  return state.movies.filter(movie => movie.id === id).map(movie => ({
    title: movie.display_title,
    by: movie.byline,
    summary: movie.summary_short,
    imageUrl: movie.multimedia.src
  }))[0]
}
