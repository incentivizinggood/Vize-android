import React from 'react'
import Home from './Home'
import Login from './Home/Login'
import SignUp from './Home/SignUp'
import HomeTab from './Tabs/HomeTab'
import JobsTab from './Tabs/JobsTab'
import ReviewTab from './Tabs/ReviewTab'
import ProfileTab from './Tabs/ProfileTab'
import CompaniesTab from './Tabs/CompaniesTab'
import TabIcon from './TabIcon'
import createStyles from '../styles/base'
import {Router, Scene, Stack} from 'react-native-router-flux'
import PropTypes from 'prop-types'

const styles = createStyles()

const App = (props) => (
	<Router {...props}>
		<Stack key="root">
			<Scene
				key="Home"
				component={Home}
				hideNavBar={true}
				title="Vize"
				navigationBarStyle={styles.statusBar}
				titleStyle={styles.navTitle}
				initial
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
				default="HomeTab"
				// initial
			>
				<Scene 
					key="HomeTab" 
					title="Home" 
					iconName="Home" 
					icon={TabIcon} 
					hideNavBar={true} 
					component={HomeTab}
					initial />
				<Scene 
					key="JobsTab" 
					title="Jobs" 
					iconName="Jobs" 
					icon={TabIcon} 
					hideNavBar={true} 
				  	component={JobsTab} />
				<Scene 
					key="ReviewTab" 
					title="Review" 
					iconName="Review" 
					icon={TabIcon} 
					hideNavBar={true} 
					component={ReviewTab} />
				<Scene 
					key="CompaniesTab" 
					title="Companies" 
					iconName="Companies" 
					icon={TabIcon} 
				  	hideNavBar={true} 
				  	component={CompaniesTab} />
				<Scene 
					key="ProfileTab" 
					title="Profile" 
					iconName="Profile" 
					icon={TabIcon} 
					hideNavBar={true} 
					component={ProfileTab} />
			</Scene>
		</Stack>
	</Router>
)

App.propTypes = {}

console.disableYellowBox = true

export default App
