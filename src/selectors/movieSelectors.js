export const listMovies = ({ movies }) => movies.map(movie => ({
  title: movie.display_title,
  by: movie.byline,
  summary: movie.summary_short,
  imageUrl: movie.multimedia.src
}))
