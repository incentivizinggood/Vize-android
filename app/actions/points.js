import {ADD_POINTS} from '../constants/actionTypes'
import {SUB_POINTS} from '../constants/actionTypes'
import {IMPORT_POINTS} from '../constants/actionTypes'

export function addPoints(amount) {
	return {
		type: ADD_POINTS,
		amount,
	}
}

export function subPoints(amount) {
	return {
		type: SUB_POINTS,
		amount,
	}
}

export function importPoints(amount) {
	return {
		type: IMPORT_POINTS,
		amount,
	}
}