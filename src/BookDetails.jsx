import PropTypes from "prop-types";

const BookDetails = ({ author, title }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-green-600">{author}</p>
        </div>
    );
};

BookDetails.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default BookDetails;