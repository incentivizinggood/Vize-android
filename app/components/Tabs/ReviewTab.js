import React, {Component} from 'react'
import {View, Text, Image, Alert } from 'react-native'
import Button from '../../customComponents/Button'
import StatusBar from '../../customComponents/StatusBar'
// import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {Actions} from 'react-native-router-flux'
import styles from './styles'

export default class ReviewTab extends Component {
    state = {}

    onReviewPress = () => {
      this.setState({stopTimer: true})
      // Alert.alert(Actions.currentScene)
      Actions.AddReviewPage1()
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
                <Text style={styles.addAReviewText}>Earn 100 pesos for your first review :)</Text>
                <Button
                  style={styles.signUpButton}
                  textStyle={styles.signSkipText}
                  text='Add a review!'
                  onPress={() => this.onReviewPress()} />
            </View>
        )
    }
}
