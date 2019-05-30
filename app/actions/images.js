import {ADD_IMAGE} from '../constants/actionTypes'

export function addImage(coordinate, source) {
	return {
		type: ADD_IMAGE,
		coordinate,
		source,
	}
}
