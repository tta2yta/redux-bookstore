import { useState } from 'react';

const book = () => {
  const [books] = useState([
    {
      id: Math.floor(Math.random() * 100),
      title: 'As a Man Thinketh',
      category: 'Self-Help',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'I, Robot ',
      category: 'Sci-Fic',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Oliver Twist',
      category: 'Social Novel',
    },
  ]);

  return (
    <div className="bookList">
      {books.map((item) => (
        <div key={item.key}>
          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.category}</div>
        </div>

      ))}

    </div>
  );
};

export default book;
