import BookList from './BookList';
import BooksForm from '../components/BooksForm';

const App = () => (
  <div className="App">
    <BookList books={
      [
        { 
          id: '1', 
          title: 'React and Redux', 
          category: 'JavaScript' 
        }
      ]
    } />
      <BooksForm />
  </div>
);

export default App;