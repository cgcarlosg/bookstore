import PropTypes from 'prop-types';


const Book = ({ book }) => {
    return (
        <>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
        
        </>
    )
}

Book.propTypes = {
    book: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default Book;