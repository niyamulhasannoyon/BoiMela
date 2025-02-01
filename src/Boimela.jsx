import Header from "./Header";
import Search from "./Search";
import BookList from './BookList';
import { useState } from "react";

const Boimela = () => {

    const BOOKS = [
        {
            id: 1,
            title: "The Alchemist",
            author: "Paulo Coelho",
            publicationDate: "2008-07-16",
            genre: "Fiction",
            price: 9.99,
            featured: false,
            image: "https://images-na.ssl-images-amazon.com/images/I/51Q5K9i6gLL._SX300_.jpg"
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            publicationDate: "1960-07-11",
            genre: "Fiction",
            price: 12.99,
            featured: false,
            image: "https://images-na.ssl-images-amazon.com/images/I/51j-5-t1Z-L._SX300_.jpg"
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            publicationDate: "1949-06-09",
            genre: "Dystopian",
            price: 14.99,
            featured: false,
            image: "https://images-na.ssl-images-amazon.com/images/I/51%2B3U97k3L._SX300_.jpg"
        },
        {
            id: 4,
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            publicationDate: "1951-07-16",
            genre: "Fiction",
            price: 11.99,
            featured: false,
            image: "https://images-na.ssl-images-amazon.com/images/I/41Z67-63qGL._SX300_.jpg"
        },
        {
            id: 5,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            publicationDate: "1960-07-11",
            genre: "Fiction",
            price: 12.99,
            featured: false,
            image: "https://images-na.ssl-images-amazon.com/images/I/51j-5-t1Z-L._SX300_.jpg"
        },
        {
            id: 6,
            title: "1989",
            author: "Niyamul Hasan",
            publicationDate: "1949-06-09",
            genre: "Dystopian",
            price: 14.99,
            featured: false,
            image: "https://images-na.ssl-images-amazon.com/images/I/51%2B3U97k3L._SX300_.jpg"
        },
        {
            id: 7,
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            publicationDate: "1951-07-16",
            genre: "Fiction",
            price: 11.99,
            featured: false,
            image: "https://images-na.ssl-images-amazon.com/images/I/41Z67-63qGL._SX300_.jpg"
        },
        {
            id: 8,
            title: "Fulkumari",
            author: "Pinaki Bhattacharya",
            publicationDate: "1960-07-11",
            genre: "Fiction",
            price: 12.99,
            featured: false,
            image: "https://images-na.ssl-images-amazon.com/images/I/51j-5-t1Z-L._SX300_.jpg"
        }
    
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState(BOOKS);

    const toggleFeatured = (id) => {
        const feature = books.map((book) => 
            book.id === id ? {...book, featured:!book.featured } : book
        )
        setBooks(feature);
    }

    return (
        <div className=" mx-auto p-4">
            <Header />
            <Search searchTerm={searchTerm} onSearchBook={setSearchTerm} />
            <BookList searchTerm={searchTerm} books={books} onFeatureBook={toggleFeatured} />
        </div>
    );
};

export default Boimela;