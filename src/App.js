import './App.css';
import Book from './redux/book/Book';
import Categories from './redux/categories/categories';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Book />
      <Categories />
    </div>
  );
}

export default App;
