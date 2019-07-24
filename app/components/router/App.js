import React from 'react'
import Home from '../Home'
import Login from '../Home/Login'
import SignUp from '../Home/SignUp'
import HomeTab from '../Tabs/HomeTab'
import JobsTab from '../Tabs/JobsTab'
import ReviewTab from '../Tabs/ReviewTab'
import ProfileTab from '../Tabs/ProfileTab'
import CompaniesTab from '../Tabs/CompaniesTab'
import AddReviewPage1 from '../Tabs/AddReviewPage1'
import AddReviewPage2 from '../Tabs/AddReviewPage2'
import AddReviewPage3 from '../Tabs/AddReviewPage3'
import TabIcon from './TabIcon'
import createStyles from '../../styles/base'
import {Router, Scene, Stack, Actions, Tabs} from 'react-native-router-flux'
import PropTypes from 'prop-types'

const styles = createStyles()

// holds scenes for the app
// only tap between tabs allowed - normal and expected behavior
const App = (props) => (
	<Router {...props}>
		<Stack key="root">
			<Scene
				key="Home"
				component={Home}
				hideNavBar={true}
				title="Vize"
				navigationBarStyle={styles.statusBar}
				titleStyle={styles.navTitleCenter}
				initial
			/>
			<Scene
				key="SignUp"
				component={SignUp}
				hideNavBar={true}
				title="Sign Up"
				navigationBarStyle={styles.navBar}
				titleStyle={styles.navTitleCenter}
				// initial
			/>
			<Scene
				key="Login"
				component={Login}
				hideNavBar={true}
				title="Login"
				navigationBarStyle={styles.navBar}
				titleStyle={styles.navTitleCenter}
				// initial
			/>
			<Scene
				key="TabsView"
				hideNavBar={false}
				title="Vize"
				tabs={true}
				tabBarPosition="bottom"
				navigationBarStyle={styles.navBar}
				left={()=>null}
				titleStyle={styles.navTitleCenter}
				lazy={true}
				// initial
			>
				<Tabs
					key="HomeTab"
					title="Home"
					iconName="Home"
					icon={TabIcon}
					hideNavBar={true}
					component={HomeTab}
					// initial
					/>
				<Tabs
					key="JobsTab"
					title="Jobs"
					iconName="Jobs"
					icon={TabIcon}
					hideNavBar={true}
					component={JobsTab}
					// initial
					/>
				<Tabs
					key="ReviewTab"
					title="Review"
					iconName="Review"
					icon={TabIcon}
					hideNavBar={true}
					component={ReviewTab}
					// initial
					/>

				<Tabs
					key="CompaniesTab"
					title="Companies"
					iconName="Companies"
					icon={TabIcon}
				  	hideNavBar={true}
					component={CompaniesTab}
					// initial
					/>
				<Tabs
					key="ProfileTab"
					title="Profile"
					iconName="Profile"
					icon={TabIcon}
					hideNavBar={true}
					component={ProfileTab}
					// initial
					/>
			</Scene>
			<Scene
				key="AddReviewPage1"
				component={AddReviewPage1}
				hideNavBar={false}
				title="Vize"
				legacy={true}
				navigationBarStyle={styles.navBar}
				// left={()=>null}
				titleStyle={styles.navTitle}
				navBarButtonColor="white"
				// initial
			/>
			<Scene
				key="AddReviewPage2"
				component={AddReviewPage2}
				hideNavBar={false}
				title="Vize"
				navigationBarStyle={styles.navBar}
				titleStyle={styles.navTitle}
				navBarButtonColor="white"
				// initial
			/>
			<Scene
				key="AddReviewPage3"
				component={AddReviewPage3}
				hideNavBar={false}
				title="Vize"
				navigationBarStyle={styles.navBar}
				titleStyle={styles.navTitle}
				navBarButtonColor="white"
				// initial
			/>
		</Stack>
		{/* <Stack key="AddReview">

		</Stack> */}
	</Router>
)

App.propTypes = {}

console.disableYellowBox = true

export default App
