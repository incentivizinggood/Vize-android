import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import Button from '../../customComponents/Button'
import StatusBar from '../../customComponents/StatusBar'
import { AirbnbRating } from 'react-native-ratings'

export default class AddReviewPage2 extends Component {
    state = { }

    onNextPress = () => {
        Actions.AddReviewPage3({
            companyName: this.props.companyName, 
            reviewTitle: this.props.reviewTitle
        })
    }

    healthAndSafetyRatingCompleted = (rating) => { }

    managerRelationshipRatingCompleted = (ratings) => { }

    workEnvironmentRatingCompleted = (ratings) => { }

    benefitsRatingCompleted = (ratings) => { }

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

                    <View style={styles.addReviewRatingContainer}>
                        <Text style={styles.addReviewTitleText}>Health and Safety</Text>

                        <AirbnbRating
                            type='star'
                            showRating={false}
                            defaultRating={0}
                            ratingCount={5}
                            size={25}
                            style={styles.rating}
                            onFinishRating={this.healthAndSafetyRatingCompleted}
                        />
                    </View>

                    <View style={styles.addReviewRatingContainer}>
                        <Text style={styles.addReviewTitleText}>Manager Relationship</Text>

                        <AirbnbRating
                            type='star'
                            showRating={false}
                            defaultRating={0}
                            ratingCount={5}
                            size={25}
                            style={styles.rating}
                            onFinishRating={this.managerRelationshipRatingCompleted}
                        />
                    </View>

                    <View style={styles.addReviewRatingContainer}>
                        <Text style={styles.addReviewTitleText}>Work Environment</Text>

                        <AirbnbRating
                            type='star'
                            showRating={false}
                            defaultRating={0}
                            ratingCount={5}
                            size={25}
                            style={styles.rating}
                            onFinishRating={this.workEnvironmentRatingCompleted}
                        />
                    </View>

                    <View style={styles.addReviewRatingContainer}>
                        <Text style={styles.addReviewTitleText}>Benefits</Text>

                        <AirbnbRating
                            type='star'
                            showRating={false}
                            defaultRating={0}
                            ratingCount={5}
                            size={25}
                            style={styles.rating}
                            onFinishRating={this.benefitsRatingCompleted}
                        />
                    </View>

                    <Button
                        style={styles.nextButton}
                        textStyle={styles.signSkipText}
                        text='Next'
                        onPress={() => this.onNextPress()} />
                </View>
            </View>
        )
    }
}
