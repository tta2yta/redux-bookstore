import axios from 'axios';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const GET_APIID = 'GET_APIID';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cF90aS533hJGfCJadIOC/books';

export const addBook = (payLoad) => ({
  type: ADD_BOOK,
  payLoad,
});

export const removeBook = (payLoad) => ({
  type: REMOVE_BOOK,
  payLoad,
});

export const fetchBooks = () => async (dispatch) => {
  const books = [];
  const result = await fetch(apiUrl, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  const response = await result.json();
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(response)) {
    const id = key;
    const obj = value;
    const book = {
      item_id: id,
      title: obj[0].title,
      category: obj[0].category,
    };
    books.push(book);
  }
  console.log(books);
  // books.push(response);
  console.log(response);
  if (response) {
    dispatch({
      type: GET_BOOKS,
      payLoad: books,
    });
  } else {
    console.log('Unable to fetch data');
  }
};

export const getBooksApiId = () => async (dispatch) => {
  const appId = await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
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
export const addBookApi = (book) => async (dispatch) => {
  console.log(book);
  // const response = await axios.post(apiUrl, JSON.Stringify(book)).then((result) => result.data);
  // console.log(response);
  fetch(apiUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id, title: book.title, category: book.category,
    }),
  }).then(dispatch(fetchBooks()));
};

const deleteBookApi=(id)= async(dispatch)=>{
const response= axios.delete(apiUrl, {item_id:id})
.then(res=> res.data)
.catch(err=>console.log((err)));

}