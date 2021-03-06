import React, {Component} from 'react'
import {View, TextInput, Image, Text} from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import Button from '../../customComponents/Button'
import StatusBar from '../../customComponents/StatusBar'

export default class SignUp extends Component {
    state = {
        email: '',
        password: '',
    }

    authenticateUser = () => {
        // make api calls, handle failures, navigate accordingly, etc.
    }

    onSignUpPress = () => {
        Actions.TabsView()
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
                    style={styles.mainLogo}
                    source={require("../../assets/FinalLogo.png")}
                    resizeMode="contain"
                />
                <TextInput
                    // autoFocus
                    placeholder="Email"
                    style={styles.emailInput}
                    value={this.state.email}
                    returnKeyType="next"
                    enablesReturnKeyAutomatically
                    onChangeText={(text) => this.setState({email: text})}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.passwordInput}
                    value={this.state.password}
                    returnKeyType="go"
                    enablesReturnKeyAutomatically
                    onChangeText={(text) => this.setState({password: text})}
                />
                <Button
                    style={styles.signUpPageButton}
                    textStyle={styles.signSkipText}
                    text='Log In'
                    onPress={() => this.onSignUpPress()} />
                <View style={styles.orView}>
                    <View style={styles.leftLine} />
                    <Text style={styles.underlineOrText}>
                        or
                    </Text>
                    <View style={styles.rightLine} />
                </View>
                <Image
                    style={styles.facebookImage}
                    source={require("../../assets/FbLogin.png")}
                    resizeMode="contain"
                />
                <Image
                    style={styles.googleImage}
                    source={require("../../assets/GoogleLogin.png")}
                    resizeMode="contain"
                />
                <View style={styles.orView}>
                    <Text style={styles.hasAccountText}>Already have an account?</Text>
                    <Button text='Sign up' style={styles.loginSignupButton} textStyle={styles.loginSignupButtonText} onClick={() => {this.onLogin()}} />
                </View>
            </View>
        )
    }
}
