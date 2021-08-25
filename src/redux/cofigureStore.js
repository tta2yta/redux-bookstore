/* eslint no-underscore-dangle: 0 */
import { createStore, combineReducers } from 'redux';
// import logger from 'redux-logger';
import bookReducer from './book/booksReducer';

const reducer = combineReducers({
  books: bookReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
