/* eslint-disable */
import {addBook}  from "./actions/bookActions";
import {removeBook}  from "./actions/bookActions";
const initialState = [];
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case addBook.type:
      return state;
    case removeBook.type:
      return state;
    default:
      return state;
  }
};

export default bookReducer;
