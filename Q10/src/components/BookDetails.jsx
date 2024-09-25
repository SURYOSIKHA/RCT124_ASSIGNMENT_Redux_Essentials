// src/components/BookDetails.js
import React from 'react';
import { useSelector } from 'react-redux';

const BookDetails = () => {
    const selectedBook = useSelector(state => state.books.selectedBook); // Access the selected book from Redux store

    if (!selectedBook) {
        return <div>Please select a book to see the details.</div>;
    }

    return (
        <div>
            <h2>Book Details</h2>
            <p><strong>Title:</strong> {selectedBook.title}</p>
            <p><strong>Author:</strong> {selectedBook.author}</p>
            <p><strong>Genre:</strong> {selectedBook.genre}</p>
            <p><strong>Status:</strong> {selectedBook.read ? 'Read' : 'Unread'}</p>
        </div>
    );
};

export default BookDetails;
