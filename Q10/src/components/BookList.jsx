// src/components/BookList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBook } from '../redux/actions/selectBook';
import { deleteBook, markAsRead } from '../redux/actions/bookActions';

const BookList = () => {
    const { books } = useSelector(state => state.books);
    const { filter } = useSelector(state => state.filters);
    const dispatch = useDispatch();

    const filteredBooks = books.filter(book => {
        if (filter.author && book.author !== filter.author) return false;
        if (filter.genre && book.genre !== filter.genre) return false;
        if (filter.status === 'read' && !book.read) return false;
        if (filter.status === 'unread' && book.read) return false;
        return true;
    });

    const handleBookClick = (id) => {
        dispatch(selectBook(id)); // Dispatch action to select the book
    };

    return (
        <div>
            {filteredBooks.map(book => (
                <div key={book.id}>
                    <h3 onClick={() => handleBookClick(book.id)}>{book.title}</h3>
                    <p>{book.author} - {book.genre} - {book.read ? 'Read' : 'Unread'}</p>
                    <button onClick={() => dispatch(markAsRead(book.id))}>Mark as Read</button>
                    <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default BookList;
