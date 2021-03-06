import React from 'react';
import '../stylesheets/App.css';
import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="App">
    <BookList />
    <BooksForm />
  </div>
);

export default App;
