import {combineReducers} from 'redux'
import {images} from './images'
import {timer} from './timer'
import {points} from './points'

const rootReducer = combineReducers({
	images,
	timer,
	points
})

export default rootReducer
