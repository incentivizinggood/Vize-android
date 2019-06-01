import React, {Component} from 'react'
import {View, Text, Image } from 'react-native'
import Button from '../../customComponents/Button'
import StatusBar from '../../customComponents/StatusBar'
// import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {Actions} from 'react-native-router-flux'
import styles from './styles'

export default class HomeTab extends Component {
    state = {}

    onLoginPress = () => {
      this.setState({stopTimer: true})
      // Actions.Login()
    }

    onSignUpPress = () => {
      this.setState({stopTimer: true})
      // Actions.Login()
    }

    onSkipPress = () => {
      this.setState({stopTimer: true})
      // Actions.Login()
    }

    highlightPress = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                  barStyle="light-content"
                  style={styles.statusBar}
                  animated={false}
                  hidden={false}
                  backgroundColor="#279AD4"
                />
                <Image
                  style={styles.backgroundPhoto}
                  source={require("../../assets/WeCanDoIt.jpg")}
                //   resizeMode="contain"
                />
                <Button
                    style={styles.loginSignupButton}
                    textStyle={styles.loginSignupButtonText}
                    text="Earn $100 pesos by sharing your work experience"
                    onPress={()=> {this.highlightPress()}}
                />
            </View>
        )
    }
}
