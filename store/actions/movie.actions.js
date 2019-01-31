export const LOAD_MOVIES = '[Movie] Load';
export const LOAD_MOVIES_SUCCESS = '[Movie] Load Success';
export const SELECT_MOVIE = '[Movie] Select';
export const DESELECT_MOVIE = '[Movie] Deselect';

export const loadMovie= () => ({
    type: LOAD_MOVIES
});

export const loadMovieSuccess = () => ({
    type: LOAD_MOVIES_SUCCESS
});

export const selectMovie = (movie) => ({
    type: SELECT_MOVIE,
    payload: {movie}
});

export const deselectMovie = () => ({
    type: DESELECT_MOVIE
});

