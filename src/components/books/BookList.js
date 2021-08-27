import { useSelector } from 'react-redux';
import AddRemove from '../addRemove';
import BookForm from './BookForm';

const Book = () => {
  const books = useSelector((state) => state.books.books);
  console.log(books);

  return (
    <>
      <div className="bookList">
        {books.map((item) => (
          <div key={item.id} className="list-item">
            <div className="book-category">{item.category}</div>
            <div className="book-title">{item.title}</div>
            <div className="book-author">{item.author}</div>
            <AddRemove itemId={item.id} />
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
