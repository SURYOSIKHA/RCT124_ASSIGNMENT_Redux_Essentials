// src/redux/actions/bookActions.js
export const addBook = (book) => ({
    type: 'ADD_BOOK',
    payload: book
});

export const deleteBook = (id) => ({
    type: 'DELETE_BOOK',
    payload: id
});

export const editBook = (book) => ({
    type: 'EDIT_BOOK',
    payload: book
});

export const markAsRead = (id) => ({
    type: 'MARK_AS_READ',
    payload: id
});

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter
});

