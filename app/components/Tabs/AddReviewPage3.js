import React, {Component} from 'react'
import {View, TextInput, Image, Text, TouchableHighlight} from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import Button from '../../customComponents/Button'
import StatusBar from '../../customComponents/StatusBar'
import { AirbnbRating } from 'react-native-ratings'

export default class AddReviewPage3 extends Component {
    state = { }

    updateSearch = (text) => {
        this.setState({
            companySearchText: text,
            companySelected: false
        },() => {
            if (this.state.companySearchText.length > 0) {
                let suggestedCompanies = []
                companiesRetreivedFromDatabase.forEach(company => {
                  if (company.name.toLowerCase().indexOf(this.state.companySearchText.toLowerCase()) >= 0)
                    suggestedCompanies.push(company)
                })
                suggestedCompanies = suggestedCompanies.sort(compare)
                if (suggestedCompanies.length > 5)
                  suggestedCompanies = suggestedCompanies.slice(0,5)
                this.setState({suggestedCompanies})
            }
        })
    }

    onNextPress = () => { Actions.popTo("_ReviewTab") }

    healthAndSafetyRatingCompleted = (rating) => { }

    managerRelationshipRatingCompleted = (ratings) => { }

    workEnvironmentRatingCompleted = (ratings) => { }

    benefitsRatingCompleted = (ratings) => { }

    render() {
        let {companyName, companySelected, suggestedCompanies} = this.state
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    style={styles.statusBar}
                    animated={false}
                    hidden={false}
                    backgroundColor="#279AD4"
                />
                <View style={styles.container}>
                    <TouchableHighlight
                        style={styles.companyNameTextWrapper}
                        onPress={() => this.setState({companySelected: false})} >
                        <Text style={styles.companyNameText}>{this.props.companyName}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.companyNameTextWrapper}
                        onPress={() => this.setState({companySelected: false})} >
                        <Text style={styles.companyNameText}>{this.props.reviewTitle}</Text>
                    </TouchableHighlight>

                    <Text style={styles.overallSatisfactionText}>Overall Satisfaction</Text>

                    <AirbnbRating
                        type='star'
                        showRating={false}
                        defaultRating={0}
                        ratingCount={5}
                        size={30}
                        style={styles.rating}
                        onFinishRating={this.healthAndSafetyRatingCompleted}
                    />

                    <Button
                        style={styles.doneButton}
                        textStyle={styles.signSkipText}
                        text='Done'
                        onPress={() => this.onNextPress()} />
                </View>
            </View>
        )
    }
}
