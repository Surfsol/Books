import { combineReducers } from 'redux';
import bookReducer from './reducers/booksReducer';

const rootReducer = combineReducers({
  bookReducer,
});
export default rootReducer;

export type IRootState = ReturnType<typeof rootReducer>;
