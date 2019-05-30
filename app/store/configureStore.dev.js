import {createStore, applyMiddleware, compose} from 'redux'
import {devToolsEnhancer, composeWithDevTools} from 'redux-devtools-extension'
//import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const configureStore = (preloadedState) => {
	const store = createStore(
		rootReducer,
		//preloadedState, // can replace w JSON object/events
		//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		composeWithDevTools(applyMiddleware()), // can add enhancers here
	)
	console.log(store.getState())
	console.log(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			store.replaceReducer(rootReducer)
		})
	}

	// store.dispatch({type: 'FETCH_USERS'})
	// can be used to pre load state from server
	return store
}

export default configureStore