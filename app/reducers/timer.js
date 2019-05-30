import {UPDATE_TIMER} from "../constants/actionTypes"

export function timer(state = true, action) {
	switch (action.type) {
	case UPDATE_TIMER:
		return state
	default:
		return state
	}
}
