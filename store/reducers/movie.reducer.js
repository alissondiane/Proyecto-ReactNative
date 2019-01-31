import {DESELECT_MOVIE, LOAD_MOVIES, LOAD_MOVIES_SUCCESS, SELECT_MOVIE} from "../actions/movie.actions";
import {getRandom} from "../../utils/utils";
import {courses} from "../../db.json"

//import {getData} from "../../utils/data";
const initialState = {
    movies: [],
    loading: false,
    selected: null
};



export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MOVIES:
            return {...state, loading: true};
        case LOAD_MOVIES_SUCCESS:
            return {...state, movies: getRandom(courses,7), loading: false};
        case SELECT_MOVIE:
            return {...state, selected: action.payload.movie};
        case DESELECT_MOVIE:
            return {...state, selected: null};
        default:
            return state;
    }
};