import {ADD_POINTS} from '../constants/actionTypes'
import {SUB_POINTS} from '../constants/actionTypes'
import {IMPORT_POINTS} from '../constants/actionTypes'

export function points(state = 0, action) {
	switch (action.type) {
	case ADD_POINTS:
		return state
	case SUB_POINTS:
		return state
	case IMPORT_POINTS:
		return action.amount
	default:
		return state
	}
}
