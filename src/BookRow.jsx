import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";
import PropTypes from "prop-types";

const BookRow = ({ book, onFeatureBook }) => {
    console.log(book);
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
            <BookDetails title={book.title} author={book.author} />
            <FeatureBook book={book} onFeatureBook={onFeatureBook} />
        </div>
    );
};

BookRow.propTypes = {
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

export default BookRow;
