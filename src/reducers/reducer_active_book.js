//state argument is not appication stae only the 
// state reducer responsible for
import { BOOK_SELECTED } from '../actions/index';

export default function(state=null, action){
	switch(action.type){
	case BOOK_SELECTED:
		return action.payload;
	}
	return state;
}