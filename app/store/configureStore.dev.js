import {createStore, applyMiddleware, compose} from 'redux'
import {devToolsEnhancer, composeWithDevTools} from 'redux-devtools-extension'
//import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = (preloadedState) => {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware()), // can add enhancers here
	)
	// test store
	// console.log(store.getState())

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			store.replaceReducer(rootReducer)
		})
	}

	// can be used to pre load state from server
	// store.dispatch({type: 'FETCH_USERS'})
	
	// can also use redux-persist to persist redux store
		// will store the data locally so use sparingly 
	return store
}

export default configureStore