import {connect} from 'react-redux'
import App from '../components/router/App'
import {addImage} from '../actions/index'
// import actions to map them to the proper reducer

// map state to props so that your app has access to your store via props
const mapStateToProps = (state) => ({
	images: state.images,
})

// required to dispatch actions in app
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
