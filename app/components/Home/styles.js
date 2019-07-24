import createStyles from '../../styles/base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {StyleSheet} from 'react-native'
import {colors, fonts} from '../../styles/base'

const styles = createStyles({
	mainLogo: {
		opacity: 1,
		height: hp("15%"),
		marginTop: hp("15%"),
		width: wp("60%")
	},
	mainText: {
		marginTop: hp("12%"),
		backgroundColor: "transparent",
		fontSize: 18,
		color: "#9b9b9b",
		width: wp("65%"),
		textAlign: "center"
	},
	signUpButton: {
		alignItems: 'center',
		backgroundColor: colors.primary,
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
    	flexDirection: "row"
	},
	loginButton: {
		alignItems: 'center',
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: colors.primary,
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
    	flexDirection: "row"
	},
	skipButton: {
		alignItems: 'center',
		backgroundColor: colors.primary,
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
    	flexDirection: "row"
	},
	signSkipText: {
		color: "white",
		fontSize: 14
	},
	loginText: {
		color: colors.primary,
		fontSize: 14
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
		backgroundColor: colors.primary,
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
    	flexDirection: "row"
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
		fontSize: fonts.sm
	},
	loginSignupButton: {
		alignItems: 'center',
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#fff",
		justifyContent: "center"
	},
	loginSignupButtonText: {
		fontSize: fonts.sm,
		color: "#000",
		fontWeight: "bold",
		marginLeft: wp("1%")
	}
})

export default styles
