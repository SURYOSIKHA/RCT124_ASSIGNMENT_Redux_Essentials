// src/redux/reducers/bookReducer.js
const initialState = {
  books: [],
  selectedBook: null, // This will store the book selected for detailed view
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return { ...state, books: [...state.books, action.payload] };
    case "DELETE_BOOK":
      return {
        ...state,
        selectedBook : action.payload == state.selectedBook.id ? null : state.selectedBook.id,
        books: state.books.filter((book) => book.id !== action.payload),

      };
    case "EDIT_BOOK":
      return {
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };
    case "MARK_AS_READ":
      return {
        books: state.books.map((book) =>
          book.id === action.payload ? { ...book, read: true } : book
        ),
      };
    case "EDIT_BOOK": // Update the book when edited
      return {
        books: state.books.map((book) =>
          book.id === action.payload.id ? { ...action.payload } : book
        ),
      };
    case "SELECT_BOOK": // New action for selecting a book
      return {
        ...state,
        selectedBook: state.books.find((book) => book.id === action.payload),
      };
    default:
      return state;
  }
};

export default bookReducer;
