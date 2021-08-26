import './App.css';
import { Route, Switch } from 'react-router-dom';
import Book from './components/books/BookList';
import Categories from './redux/categories/categories';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Book />
        </Route>

        <Route path="/categories">
          <Categories />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
