import PropTypes from 'prop-types';

const Search = ({ searchTerm, onSearchBook }) => {
    return (
        <div>
            <form>
                <input 
                    type="text" 
                    value={searchTerm}
                    placeholder="Search for books..." 
                    onChange={(event) => onSearchBook(event.target.value)}
                    className="mb-4 border rounded-md p-1 w-full"
                />
            </form>
        </div>
    );
};

Search.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearchBook: PropTypes.func.isRequired
};

export default Search;
