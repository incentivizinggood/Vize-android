import {Platform, StatusBar, StyleSheet, Dimensions} from 'react-native'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight


export const ONE_SECOND = 1000

export const dimensions = {
	fullHeight: Dimensions.get('window').height,
	fullWidth: Dimensions.get('window').width
}

export const colors  = {
	primary: '#47A6D6',
	secondary: '#254B5A',
	tertiary: '#5DA6A7'
}

export const padding = {
	sm: 10,
	md: 20,
	lg: 30,
	xl: 40
}

export const fonts = {
	sm: 12,
	md: 18,
	lg: 28,
	primary: 'Cochin'
}

const baseStyles = {
	container: {
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#fff'
	},
	header: {
		backgroundColor: 'transparent',
		fontSize: fonts.lg,
		fontFamily: fonts.primary,
		fontWeight: 'bold'
	},
	section: {
		paddingVertical: padding.lg,
		paddingHorizontal: padding.xl
	},
	statusBar: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: colors.secondary,
	},
	navTitle: {
		flex: 1,
		color: '#FFF',
		textAlign: 'center',
	},
	navBar: {
		backgroundColor: colors.primary,
		marginTop: STATUSBAR_HEIGHT
	},
}

export default function createStyles(overrides = {}) {
	return StyleSheet.create({...baseStyles, ...overrides})
}
