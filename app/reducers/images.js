import {ADD_IMAGE} from '../constants/actionTypes'

export function images(state = {}, action) {
	switch (action.type) {
	case ADD_IMAGE:
		// if (state[action.coordinate] === undefined)
		// 	state[action.coordinate] = []
		// state[action.coordinate].push(action.source)
		return state
	default:
		return state
	}
}
