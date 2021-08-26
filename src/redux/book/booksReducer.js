/* eslint-disable */
import {addBook}  from "./actions/bookActions";
import {removeBook}  from "./actions/bookActions";
const initialState = [
    {
            id: Math.floor(Math.random() * 100),
            title: 'As a Man Thinketh',
            category: 'Self-Help',
            author: 'AAA',
          }
];
const bookReducer = (state = initialState, action) => {
    console.log(action.type)
  switch (action.type) {
    case 'ADD_BOOK':
        return [...state, action.payLoad]
    case 'REMOVE_BOOK':
      return state;
    default:
      return state;
  }
};

export default bookReducer;
