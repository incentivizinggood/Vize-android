import React from 'react'
// import Map from './Map'
// import Story from './Story'
// import Camera from './Camera'
import Home from './Home'
import SignUp from './Home/SignUp'
import Login from './Home/Login'
import HomeTab from './Tabs/HomeTab'
import JobsTab from './Tabs/JobsTab'
import ReviewTab from './Tabs/ReviewTab'
import CompaniesTab from './Tabs/CompaniesTab'
import ProfileTab from './Tabs/ProfileTab'
import {Router, Scene, Stack} from 'react-native-router-flux'
import {StatusBar} from 'react-native'
import PropTypes from 'prop-types'
import {StyleSheet} from 'react-native'

const App = (props) => (
	<Router {...props} navigationBarStyle={{backgroundColor: "#fff"}}>
		<Stack key="root">
			<Scene
				key="Home"
				component={Home}
				hideNavBar={true}
				title="Vize"
				navigationBarStyle={styles.navBar}
				titleStyle={styles.navTitle}
				// initial
			/>
			<Scene
				key="SignUp"
				component={SignUp}
				hideNavBar={true}
				title="Sign Up"
				navigationBarStyle={styles.navBar}
				titleStyle={styles.navTitle}
				// initial
			/>
			<Scene
				key="Login"
				component={Login}
				hideNavBar={true}
				title="Login"
				navigationBarStyle={styles.navBar}
				titleStyle={styles.navTitle}
				// initial
			/>
			<Scene
				key="TabsView"
				hideNavBar={false}
				title="Vize"
				tabs={true}
				legacy={true}
				tabBarPosition="bottom"
				navigationBarStyle={styles.navBar}
				titleStyle={styles.navTitle}
				initial
			>
				<Scene key="HomeTab" title="Home" hideNavBar={true} component={HomeTab} />
      			<Scene key="JobsTab" title="Jobs" hideNavBar={true} component={JobsTab} />
				<Scene key="ReviewTab" title="Review" hideNavBar={true} component={ReviewTab} />
      			<Scene key="CompaniesTab" title="Companies" hideNavBar={true} component={CompaniesTab} />
				<Scene key="ProfileTab" title="Profile" hideNavBar={true} component={ProfileTab} />
			</Scene>
			
		</Stack>
	</Router>
)

// App.propTypes = {
// 	// timer: PropTypes.bool.isRequired,
// 	// images: PropTypes.object.isRequired,
// 	// addImage: PropTypes.func.isRequired,
// 	// updateTimer: PropTypes.func.isRequired,
// }

console.disableYellowBox = true

const styles = StyleSheet.create({
	navBar: {
		backgroundColor: '#47A6D6',
		marginTop: StatusBar.currentHeight
	},
	navTitle: {
		flex: 1,
		color: '#FFF',
		textAlign: 'center',
		
	},
})

export default App
