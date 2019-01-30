import {ACTION_EXAMPLE} from "../actions/movie.actions";

const initialState = {

};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_EXAMPLE:
            return { ...state };
        default:
            return state
    }
};