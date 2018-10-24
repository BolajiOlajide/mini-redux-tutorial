import {
    GET_ALL_AUTHORS,
    SAVE_AUTHOR,
    DELETE_AUTHORS
} from '../types';
import initialState from './initialState';

const authorReducer = (
    state=initialState.authors,
    action
) => {
    switch(action.type) {
        case GET_ALL_AUTHORS:
            return [
                ...state,
                ...action.payload
            ];

        case SAVE_AUTHOR:
            return [
                ...state,
                action.payload
            ];

        case DELETE_AUTHORS:
            return action.payload;

        default:
            return state;
    }
};

export default authorReducer;