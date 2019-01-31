import {combineReducers, createStore} from 'redux';
import {movieReducer} from "./reducers/movie.reducer";
import { reducer as form } from "redux-form"

const rootReducer = combineReducers({
   movie: movieReducer,
   form
});

export const generateStore = () => createStore(rootReducer);