import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const TabIcon = ({iconName, focused}) => {
	let name
	let color = focused ? '#47A6D6' : '#9b9b9b'
	switch (iconName) {
		case "Home":
			name = "home"
			break
		case "Jobs":
			name = "hard-hat"
			break
		case "Review":
			name = "plus-circle"
			break
		case "Companies":
			name = "building"
			break
		case "Profile":
			name = "address-card"
			break
		default:
			name = "question"
	}
	return (
		<Icon name={name} color={color} size={30} />
	)
}

export default TabIcon