import React, {Component} from 'react'
import {View, TextInput, Image } from 'react-native'
import Button from '../../customComponents/Button'
import StatusBar from '../../customComponents/StatusBar'
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
                <TextInput
                    // autoFocus
                    placeholder="Search for a company..."
                    style={styles.searchInput}
                    value={this.state.job}
                    returnKeyType="done"
                    enablesReturnKeyAutomatically
                    onChangeText={(text) => this.setState({job: text})}
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
                <View style={styles.evenSpaceContainer}>
                  <Button
                    style={styles.evenSpaceButtons}
                    textStyle={styles.signSkipText}
                    text='About Us'
                    onPress={() => this.onReviewPress()} />
                  <Button
                    style={styles.evenSpaceButtons}
                    textStyle={styles.signSkipText}
                    text='Resources'
                    onPress={() => this.onReviewPress()} />
                </View>
            </View>
        )
    }
}
