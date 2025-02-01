import BookRow from "./BookRow";
import PropTypes from 'prop-types';

const BookList = ({ searchTerm, books, onFeatureBook }) => {
    return (
        <div className="space-y-4">
            {books
                .filter(book => 
                    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    book.author.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map(book => (
                    <BookRow key={book.id} book={book} onFeatureBook={onFeatureBook} />
                ))
            }
        </div>
    );
};

BookList.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            publicationDate: PropTypes.string.isRequired,
            genre: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    onFeatureBook: PropTypes.func.isRequired,
};

export default BookList;
