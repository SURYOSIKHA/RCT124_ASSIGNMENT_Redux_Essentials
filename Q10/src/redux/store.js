// src/redux/reducers/index.js
import { combineReducers, legacy_createStore } from 'redux';
import bookReducer from './reducers/bookReducer';
import filterReducer from './reducers/filterReducer';

const rootReducer = combineReducers({
    books: bookReducer,
    filters: filterReducer,
});

const store = legacy_createStore(rootReducer)
export default store
