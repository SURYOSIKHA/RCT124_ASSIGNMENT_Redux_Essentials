// src/components/FilterBooks.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions/bookActions';

const FilterBooks = () => {
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [status, setStatus] = useState('all');
    const dispatch = useDispatch();

    const applyFilters = () => {
        dispatch(setFilter({ author, genre, status }));
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Filter by author" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Filter by genre" 
                value={genre} 
                onChange={(e) => setGenre(e.target.value)} 
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="all">All</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
            </select>
            <button onClick={applyFilters}>Apply Filters</button>
        </div>
    );
};

export default FilterBooks;
