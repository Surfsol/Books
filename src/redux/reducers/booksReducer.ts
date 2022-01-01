import * as types from '../actions/booksAction';

const initialState = {
  books: {},
};

const bookReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};
export default bookReducer;
