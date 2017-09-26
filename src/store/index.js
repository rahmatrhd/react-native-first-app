import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import moviesReducers from '../reducers/movieReducers'

export default createStore(moviesReducers, applyMiddleware(thunk))
