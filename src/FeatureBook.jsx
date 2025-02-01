import { Star } from "lucide-react";
import PropTypes from 'prop-types';

const FeatureBook = ({ book, onFeatureBook }) => {
    return (
        <button onClick={() => onFeatureBook(book.id)}>
            <Star color={book.featured ? "green" : "black"} />
        </button>
    );
};

FeatureBook.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        publicationDate: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        featured: PropTypes.bool.isRequired,
    }).isRequired,
    onFeatureBook: PropTypes.func.isRequired, // Correctly placed outside `book.shape`
};

export default FeatureBook;
