import { useState } from 'react';

const bookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('fiction');
  const submitBookToStore = () => {
    const newBook = {
      id: Math.floor(Math.random() * 100),
      title,
      category,
    };
    console.log(newBook);
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
