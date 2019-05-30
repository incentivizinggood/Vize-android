import React from 'react'
import AppContainer from './containers/AppContainer'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

const app = () => (
	<Provider store={store}>
		<AppContainer />
	</Provider>
)

export default app
