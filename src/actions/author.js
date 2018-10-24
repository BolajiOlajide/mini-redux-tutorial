import AuthorApi from "../api";
import {
    GET_ALL_AUTHORS,
    SAVE_AUTHOR,
} from '../types';

export function getAllAuthors(authors) {
  return {type: GET_ALL_AUTHORS, payload: authors};
}

export function saveAuthorSuccess(author) {
  return {type: SAVE_AUTHOR, payload: author};
}

export function loadAuthors() {
  return dispatch => {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(getAllAuthors(authors));
    }).catch(error => {
      throw(error);
    });
  };
}


export function saveAuthor(author) {
  return dispatch => {
    return AuthorApi.saveAuthor(author).then(savedAuthor => {
      dispatch(saveAuthorSuccess(savedAuthor));
    }).catch(error => {
      throw(error);
    });
  };
}
