import {ADD_IMAGE} from '../constants/actionTypes'

export function images(state = {}, action) {
	switch (action.type) {
	case ADD_IMAGE:
		// keep your reducers immutable - redux won't warn you if they aren't
		// but this is what makes redux great
		
		// install redux thunk to make API calls here efficiently
		return state
	default:
		return state
	}
}
