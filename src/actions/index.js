// export function selectBookFun(book){
// 	return {
// 		type:'BOOK_SELECTED',
// 		payload: book
// 	};
// }
//before action reaches reducers middle wear will come in tto th episture
import axios from 'axios';

const API_KEY = "9871cd5acd87a6e9da891088b8e6a6b8";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';
export const BOOK_SELECTED = 'BOOK_SELECTED';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_POSTS = 'CREATE_POSTS';


//action creator function
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);	
	return {
		type: FETCH_WEATHER,
		payload:request
	};
}

export function selectBookFun(book){
	return {
		type:BOOK_SELECTED,
		payload: book
	};
}
// const Posts = new Firebase('https://fbredux.firebaseio.com/');
// axios.get('http://reduxblog.herokuapp.com/api/posts/238416?key=neetusn123');


export function fetchPosts(){

	const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
	const API_KEY = '?key=neetusn123'

	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	// return (dispatch) => {
	// 	Posts.on('value', snapshot => {
	// 		dispatch({type: FETCH_POSTS,payload:snapshot.val()});
	// 	});
	// };
	// return (dispatch) => {
	// 	request.then({data} => {
	// 		dispatch({type:FETCH_POSTS,playload:data});
	// 	});
	// };
	return {
		type: FETCH_POSTS,
		payload: request
	 };
}

export function createPosts(values, callbackFun){

	const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
	const API_KEY = '?key=neetusn123'

	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => callbackFun());

	// return (dispatch) => {
	// 	Posts.on('value', snapshot => {
	// 		dispatch({type: FETCH_POSTS,payload:snapshot.val()});
	// 	});
	// };
	return {
		type: CREATE_POSTS,
		payload: request
	};
}

export function fetchPost(id){
	const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
	const API_KEY = '?key=neetusn123'
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
	return {
		type: FETCH_POST,
		payload: request
	};
}

export function deletePost(id, callbackFun){
	const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
	const API_KEY = '?key=neetusn123'
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => {
		callbackFun();
	});
	return {
		type: DELETE_POST,
		payload: id
	};
}




