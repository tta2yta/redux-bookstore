/* eslint-disable */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddRemove from '../addRemove';
import BookForm  from './BookForm'

import { useSelector } from 'react-redux';
const Book = () => {
  const dispatch = useDispatch();
  const books= useSelector(state => state.books)

  return (
    <>
    <div className="bookList">
      {books.map((item) => (
        <div key={item.key} className="list-item">
          <div className="book-category">{item.category}</div>
          <div className="book-title">{item.title}</div>
          <div className="book-author">{item.author}</div>
          <AddRemove />
        </div>

      ))}

    </div>
    <div>
      <BookForm />
    </div>
    </>
  );
};

export default Book;
