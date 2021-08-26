import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/book/actions/bookActions';

const bookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('fiction');
  const submitBookToStore = () => {
    const newBook = {
      id: Math.floor(Math.random() * 100),
      title,
      category,
    };
    console.log(newBook);
    console.log(addBook());
    dispatch(addBook());
  };
  const handleOnChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleOnSelect = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className="add-book">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book Title" value={title} onChange={handleOnChange} />
        <select name="categories" id="categories" onChange={handleOnSelect}>
          <option value="fiction" selected>Fiction</option>
          <option value="scifiction">Science Fiction</option>

          <option value="romance">Romance</option>

          <option value="tech">Technology</option>

        </select>
        <input type="button" value="ADD BOOK" onClick={submitBookToStore} />
      </form>
    </div>
  );
};
export default bookForm;
