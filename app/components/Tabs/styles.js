import {Platform, StatusBar} from 'react-native'
import createStyles from '../../styles/base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {StyleSheet} from 'react-native'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight

const styles = createStyles({
  navBar: {
		backgroundColor: '#47A6D6',
		marginTop: STATUSBAR_HEIGHT
	},
	backgroundPhoto: {
		// opacity: 1,
		height: hp("45%"),
		marginTop: hp("0%"),
		width: wp("100%"),
	},
	vLogo: {
		opacity: 1,
		height: hp("9%"),
		marginTop: hp("12%"),
		width: wp("10%"),
	},
	mainText: {
		marginTop: hp("0%"),
		backgroundColor: "transparent",
		fontSize: 18,
		color: "#9b9b9b",
		width: wp("65%"),
		textAlign: "center"
	},
	signUpButton: {
		alignItems: 'center',
		backgroundColor: "#47a6d6",
		borderWidth: 1,
		borderColor: "#fff",
		width: wp("60%"),
		height: hp("5%"),
		marginTop: hp("10%"),
		justifyContent: "center",
		shadowOffset: {width: 0, height: 1},
		borderRadius: 2,
		shadowColor: "#000",
		shadowOpacity: 0.35,
		shadowRadius: 5,
		elevation: 2,
    flexDirection: "row",
	},
	loginButton: {
		alignItems: 'center',
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#47a6d6",
		width: wp("60%"),
		height: hp("5%"),
		marginTop: hp("3%"),
		justifyContent: "center",
		shadowOffset: {width: 0, height: 1},
		borderRadius: 2,
		shadowColor: "#000",
		shadowOpacity: 0.35,
		shadowRadius: 5,
		elevation: 2,
    flexDirection: "row",
	},
	skipButton: {
		alignItems: 'center',
		backgroundColor: "#47a6d6",
		borderWidth: 1,
		borderColor: "#fff",
		width: wp("25%"),
		height: hp("5%"),
		marginTop: hp("10%"),
		left: wp("30%"),
		justifyContent: "center",
		shadowOffset: {width: 0, height: 1},
		borderRadius: 2,
		shadowColor: "#000",
		shadowOpacity: 0.35,
		shadowRadius: 5,
		elevation: 2,
    flexDirection: "row",
	},
	signSkipText: {
		color: "white",
		fontSize: 14,
	},
	loginText: {
		color: "#47a6d6",
		fontSize: 14,
	},
	emailInput: {
		marginTop: hp("5%"),
		width: wp("60%"),
		height: hp("5%"),
		padding: 0,
		borderBottomColor: '#9b9b9b',
    borderBottomWidth: 2
	},
	passwordInput: {
		marginTop: hp("1%"),
		width: wp("60%"),
		height: hp("5%"),
		padding: 0,
		borderBottomColor: '#9b9b9b',
    borderBottomWidth: 2
	},
	signUpPageButton: {
		alignItems: 'center',
		backgroundColor: "#47a6d6",
		borderWidth: 1,
		borderColor: "#fff",
		width: wp("60%"),
		height: hp("5%"),
		marginTop: hp("5%"),
		justifyContent: "center",
		shadowOffset: {width: 0, height: 1},
		borderRadius: 2,
		shadowColor: "#000",
		shadowOpacity: 0.35,
		shadowRadius: 5,
		elevation: 2,
    flexDirection: "row",
	},
	orView: {
		flexDirection:'row', 
		alignSelf: 'flex-start', 
		width: wp('60%'),
		marginLeft: wp('20%'), 
		height: hp('5%'),
		justifyContent: 'center', 
		alignItems: 'center'
	},
	leftLine: {
		borderBottomColor: 'black',
		borderBottomWidth: StyleSheet.hairlineWidth,
		marginTop: hp('0.5%'),
		marginRight: wp('2.5%'),
		top: hp('2.5%'),
		width: wp('25%'),
		alignSelf: 'flex-start'
	},
	rightLine: {
		borderBottomColor: 'black',
		borderBottomWidth: StyleSheet.hairlineWidth,
		marginTop: hp('0.5%'),
		marginLeft: wp('2.5%'),
		top: hp('2.5%'),
		width: wp('25%'),
		alignSelf: 'flex-start'
	},
	facebookImage: {
		marginTop: hp("5%"),
		height: hp("5%"),
		width: wp("60%")
	},
	googleImage: {
		marginTop: hp("0%"),
		height: hp("10%"),
		width: wp("70%")
	},
	hasAccountText: {
		fontSize: 12
	},
	loginSignupButton: {
		alignItems: 'center',
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#fff",
		justifyContent: "center",
	},
	loginSignupButtonText: {
		fontSize: 12,
		color: "#000",
		fontWeight: "bold",
		marginLeft: wp("1%")
	},
	searchInput: {
		marginTop: hp("1%"),
		width: wp("100%"),
		height: hp("5%"),
		padding: 0,
		fontSize: 18,
		borderColor: '#9b9b9b',
		borderWidth: 2,
		backgroundColor: '#fff',
		paddingLeft: wp("5%"),
		// borderTopWidth: 2,
		borderRadius: 5
	},
	searchlessText: {
		marginTop: hp("30%"),
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingLeft: wp('5%'),
		paddingRight: wp('5%')
	},
	addAReviewText: {
		marginTop: hp('30%'),
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingLeft: wp('5%'),
		paddingRight: wp('5%'),
		color: '#000'
	},
	suggestionContainer: {
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		padding: hp('0.5%')
	},
	suggestionText: {
		fontSize: 14
	},
	companyNameInput: {
		padding: 0,
		paddingLeft: wp('1%'),
		marginTop: hp('2%'),
		fontSize: 16,
		height: hp('5%'),
		width: wp('70%'),
		borderColor: 'gray',
		borderWidth: 1
	},
	companyNameTextWrapper: {
		marginTop: hp('2%'),
		height: hp('5%')
	},
	companyNameText: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	addReviewTextContainer: {
		marginTop: hp('2.5%'),
		width: wp('100%')
	},
	addReviewTitleText: {
		alignItems: 'center',
		textAlign: 'left',
		marginLeft: wp('3%'),
		fontSize: 18,
		color: 'black',
	},
	addReviewTitleInput: {
		padding: 0,
		paddingLeft: wp('1%'),
		marginTop: hp('1.5%'),
		fontSize: 14,
		height: hp('4%'),
		width: wp('90%'),
		borderBottomColor: 'gray',
		borderBottomWidth: 1
	},
	nextButton: {
		alignItems: 'center',
		backgroundColor: "#47a6d6",
		borderWidth: 1,
		borderColor: "#fff",
		width: wp("60%"),
		height: hp("5%"),
		marginTop: hp("5%"),
		justifyContent: "center",
		shadowOffset: {width: 0, height: 1},
		borderRadius: 2,
		shadowColor: "#000",
		shadowOpacity: 0.35,
		shadowRadius: 5,
		elevation: 2,
    flexDirection: "row",
	},
	addReviewRatingContainer: {
		width: wp('100%'),
		flexDirection:'row',
		justifyContent: 'space-between',
		margin: 0,
		height: hp('7%'),
		marginTop: hp('1%'),
		padding: 0
	},
	rating: {
		margin: 0
	},
	doneButton: {
		alignItems: 'center',
		backgroundColor: "#47a6d6",
		borderWidth: 1,
		borderColor: "#fff",
		width: wp("60%"),
		height: hp("5%"),
		marginTop: hp("25%"),
		justifyContent: "center",
		shadowOffset: {width: 0, height: 1},
		borderRadius: 2,
		shadowColor: "#000",
		shadowOpacity: 0.35,
		shadowRadius: 5,
		elevation: 2,
		flexDirection: "row"
	},
	overallSatisfactionText: {
		alignItems: 'center',
		textAlign: 'left',
		fontSize: 18,
		color: 'black',
	}
})

export default styles
