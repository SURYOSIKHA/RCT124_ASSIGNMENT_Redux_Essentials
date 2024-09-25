// src/App.js
import React from 'react';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import FilterBooks from './components/FilterBooks';
import BookDetails from './components/BookDetails';
import EditBook from './components/EditBook';

const App = () => {
    return (
        <div>
            <h1>Book Library</h1>
            <AddBook />
            <FilterBooks />
            <BookDetails/>
            <EditBook/>
            <BookList />
        </div>
    );
};

export default App;
