export const BOOKS_SUCCESS = 'BOOKS_SUCCESS';

const booksAction = (data: any) => (dispatch: any) => {
  if (data.length > 0) {
    dispatch({ type: BOOKS_SUCCESS, payload: data });
  }
};
export default booksAction;
