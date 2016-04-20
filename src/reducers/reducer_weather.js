import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_WEATHER:
		//never manipualte state
		//can also concat
		return [ action.payload.data, ...state ]; // [ city, city, city]
	}
	return state;
}