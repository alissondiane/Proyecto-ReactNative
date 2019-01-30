import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {moviesReducer} from "./reducers/movie.reducer";

const rootReducer = combineReducers({
   movies: moviesReducer
});

export const generateStore = () => createStore(rootReducer, applyMiddleware(thunk));