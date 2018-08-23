import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import Weather from './reducer_weather';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
	weather:Weather,
	books:BooksReducer,
	activeBook:ActiveBook,
	posts:PostsReducer,
	form: formReducer
});

export default rootReducer;