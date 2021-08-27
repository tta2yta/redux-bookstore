import axios from 'axios';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const GET_APIID = 'GET_APIID';

export const addBook = (payLoad) => ({
  type: ADD_BOOK,
  payLoad,
});

export const removeBook = (payLoad) => ({
  type: REMOVE_BOOK,
  payLoad,
});

export const fetchBooks = () => async (dispatch) => {
  const result = await fetch('', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  const response = await result.json();
  if (response) {
    dispatch({
      type: GET_BOOKS,
      payLoad: response,
    });
  } else {
    console.log('Unable to fetch data');
  }
};

export const getBooksApiId = () => async (dispatch) => {
  const appId = await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
    {},
  );
  console.log(appId.data);
  if (appId) {
    dispatch({
      type: GET_APIID,
      payLoad: appId,
    });
  } else {
    console.log('can not get api id');
  }
};
