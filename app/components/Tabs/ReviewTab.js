import React, {Component} from 'react'
import {View, Text, Image } from 'react-native'
import Button from '../../customComponents/Button'
import StatusBar from '../../customComponents/StatusBar'
// import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {Actions} from 'react-native-router-flux'
import styles from './styles'

export default class ReviewTab extends Component {
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
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                  barStyle="light-content"
                  style={styles.statusBar}
                  animated={false}
                  hidden={false}
                />
                <Image
                  style={styles.mainLogo}
                  source={require("../../assets/FinalLogoV.png")}
                  resizeMode="contain"
                />
                <Text style={styles.mainText}>
                  Las mejores oportunidades para ti
                </Text>
                <Button
                  style={styles.signUpButton}
                  textStyle={styles.signSkipText}
                  text='Sign Up'
                  onPress={() => this.onSignUpPress()} />
                <Button
                  style={styles.loginButton}
                  textStyle={styles.loginText}
                  text='Log In'
                  onPress={() => this.onLoginPress()} />
                <Button
                  style={styles.skipButton}
                  textStyle={styles.signSkipText}
                  text='Skip'
                  onPress={() => this.onSkipPress()} />
            </View>
        )
    }
}
