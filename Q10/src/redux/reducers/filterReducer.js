// src/redux/reducers/filterReducer.js
const initialState = {
    filter: {
        author: '',
        genre: '',
        status: 'all' // 'read' or 'unread'
    }
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return { filter: { ...state.filter, ...action.payload } };
        default:
            return state;
    }
};

export default filterReducer;
