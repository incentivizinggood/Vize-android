import {ADD_IMAGE} from '../constants/actionTypes'

export function addImage(coordinate, source) {
	return {
		type: ADD_IMAGE,
		coordinate,
		source,
	}
}

// define your actions here
// super useful to organize your code