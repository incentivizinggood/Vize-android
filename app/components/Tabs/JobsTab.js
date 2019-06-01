import React, {Component} from 'react'
import {TextInput, FlatList, View, Text, Image } from 'react-native'
import Button from '../../customComponents/Button'
import StatusBar from '../../customComponents/StatusBar'
// import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {Actions} from 'react-native-router-flux'
// import {List, ListItem, SearchBar} from 'react-native-elements';
import styles from './styles'

export default class JobsTab extends Component {
    state = {
      loading: false,
      jobs: [],
      error: null
    }

    arrayholder = []

    getJobs = () => {
      const url = ""
      this.setState({ loading: true })

      // make API call :)
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
                <TextInput
                    // autoFocus
                    placeholder="Search for a job"
                    style={styles.searchInput}
                    value={this.state.job}
                    returnKeyType="done"
                    enablesReturnKeyAutomatically
                    onChangeText={(text) => this.setState({job: text})}
                />
                {
                  this.state.jobs.length === 0 ?
                    <Text>Search for a job to see the best opportunities for you :) </Text>
                     :
                    <FlatList 
                      data={this.state.jobs}
                    />
                }
            </View>
        )
    }
}
