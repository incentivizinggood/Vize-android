import React, {Component} from 'react'
import {View, Text, Image } from 'react-native'
import Button from '../../customComponents/Button'
import StatusBar from '../../customComponents/StatusBar'
// import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {Actions} from 'react-native-router-flux'
import styles from './styles'

export default class JobsTab extends Component {
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
            </View>
        )
    }
}
