import { useState } from 'react';
import AddRemove from '../../components/addRemove';

const Book = () => {
  const [books] = useState([
    {
      id: Math.floor(Math.random() * 100),
      title: 'As a Man Thinketh',
      category: 'Self-Help',
      author: 'AAA',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'I, Robot ',
      category: 'Sci-Fic',
      author: 'BBB',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Oliver Twist',
      category: 'Social Novel',
      author: 'CCC',
    },
  ]);

  return (
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
  );
};

export default book;
