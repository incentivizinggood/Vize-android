import {UPDATE_TIMER} from '../constants/actionTypes'

export function updateTimer(value) {
	return {
		type: UPDATE_TIMER,
		value,
	}
}
