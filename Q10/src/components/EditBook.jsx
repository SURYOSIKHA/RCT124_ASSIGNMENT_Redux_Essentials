// src/components/EditBook.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editBook } from '../redux/actions/bookActions';

const EditBook = () => {
    const selectedBook = useSelector(state => state.books.selectedBook);
    const dispatch = useDispatch();
    const [editedBook, setEditedBook] = useState({ title: '', author: '', genre: '', read: false });

    useEffect(() => {
        if (selectedBook) {
            setEditedBook(selectedBook);  // Populate form with selected book details
        }
    }, [selectedBook]);

    const handleEditBook = () => {
        dispatch(editBook(editedBook));  // Dispatch edit action
    };

    if (!selectedBook) {
        return <div>Please select a book to edit.</div>;
    }

    return (
        <div>
            <h2>Edit Book</h2>
            <input
                type="text"
                value={editedBook.title}
                onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
                placeholder="Title"
            />
            <input
                type="text"
                value={editedBook.author}
                onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
                placeholder="Author"
            />
            <input
                type="text"
                value={editedBook.genre}
                onChange={(e) => setEditedBook({ ...editedBook, genre: e.target.value })}
                placeholder="Genre"
            />
            <label>
                <input
                    type="checkbox"
                    checked={editedBook.read}
                    onChange={(e) => setEditedBook({ ...editedBook, read: e.target.checked })}
                />
                Mark as Read
            </label>
            <button onClick={handleEditBook}>Save Changes</button>
        </div>
    );
};

export default EditBook;
