import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action){
	console.log(state, "====>state");
	switch(action.type){
		case DELETE_POST:
			return _.omit(state, action.payload);
		case FETCH_POST:
			return {...state, [action.payload.data.id]: action.payload.data };
		case FETCH_POSTS:
			return action.payload.data;
		default:
			return state;
	}
}