import {connect} from 'react-redux'
import App from '../components/router/App'
import {addImage, updateTimer, addPoints, subPoints, importPoints} from '../actions/index'

const mapStateToProps = (state) => ({
	images: state.images,
	// timer: state.timer,
	// points: state.points
})

const mapDispatchToProps = (dispatch) => ({
	addImage: (coordinate, source) => {
		dispatch(addImage(coordinate, source))
	},
})

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(App)

export default AppContainer
