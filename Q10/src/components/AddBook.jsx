// src/components/AddBook.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions/bookActions';

const AddBook = () => {
    const [book, setBook] = useState({ title: '', author: '', genre: '', read: false });
    const dispatch = useDispatch();

    const handleAddBook = () => {
        dispatch(addBook({ ...book, id: Date.now() }));
        setBook({ title: '', author: '', genre: '', read: false });
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Title" 
                value={book.title} 
                onChange={(e) => setBook({ ...book, title: e.target.value })} 
            />
            <input 
                type="text" 
                placeholder="Author" 
                value={book.author} 
                onChange={(e) => setBook({ ...book, author: e.target.value })} 
            />
            <input 
                type="text" 
                placeholder="Genre" 
                value={book.genre} 
                onChange={(e) => setBook({ ...book, genre: e.target.value })} 
            />
            <button onClick={handleAddBook}>Add Book</button>
        </div>
    );
};

export default AddBook;
