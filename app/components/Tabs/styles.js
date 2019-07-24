import createStyles from '../../styles/base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {colors, fonts} from '../../styles/base'

const styles = createStyles({
	backgroundPhoto: {
		height: hp("45%"),
		marginTop: hp("0%"),
		width: wp("100%"),
	},
	evenSpaceContainer: {
		flex: 1,
		flexDirection: 'row',
		width: wp('100%'),
		justifyContent: 'space-evenly',
		margin: 0,
		height: hp('5%')
	},
	evenSpaceButtons: {
		alignItems: 'center',
		backgroundColor: colors.primary,
		borderWidth: 1,
		borderColor: "#fff",
		width: wp("30%"),
		height: hp("5%"),
		marginTop: hp("10%"),
		justifyContent: "center",
		shadowOffset: {width: 0, height: 1},
		borderRadius: 2,
		shadowColor: "#000",
		shadowOpacity: 0.35,
		shadowRadius: 5,
		elevation: 2,
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
    	flexDirection: "row",
	},
	signSkipText: {
		color: "white",
		fontSize: 14,
	},
	loginSignupButton: {
		alignItems: 'center',
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#fff",
		justifyContent: "center",
		marginBottom: 0,
	},
	loginSignupButtonText: {
		fontSize: 16,
		textAlign: 'center',
		color: "#000",
		fontWeight: "bold",
		marginLeft: wp("1%"),
		marginBottom: 0
	},
	searchInput: {
		marginTop: hp("1%"),
		width: wp("100%"),
		height: hp("5%"),
		padding: 0,
		fontSize: fonts.md,
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
		fontSize: fonts.md,
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
		backgroundColor: colors.primary,
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
		fontSize: fonts.md,
		color: 'black',
	}
})

export default styles
