import React, {Component} from 'react'
import {View, TextInput, Image, Text, TouchableHighlight} from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import Button from '../../customComponents/Button'
import StatusBar from '../../customComponents/StatusBar'
let compare = (a, b) => {
    return (parseInt(a.Year) < parseInt(b.Year) ? 1 : -1)
}

const companiesRetreivedFromDatabase = [
    {
        name: 'Samsung',
        // other data here
    },
    {
        name: 'AT&T',
        // other data here
    },
    {
        name: 'Apple',
        // other data here
    },
    {
        name: 'Facebook',
        // other data here
    },
    {
        name: 'Microsoft',
        // other data here
    },
    {
        name: 'Vize',
        // other data here
    },
]

const Suggestions = (props) => {
    const options = props.suggestedCompanies.map(company => (
        <TouchableHighlight
          style={styles.suggestionContainer}
          underlayColor={'grey'}
          onPress={() => props.onCompanySuggestionPress(company)}
        >
          <Text style={styles.suggestionText}>
              {company.name}
          </Text>
        </TouchableHighlight>
    ))
    return options
}

export default class AddReviewPage1 extends Component {
    state = {
        companySearchText: '',
        companySelected: false,
        suggestedCompanies: [],
        companyName: '',
        reviewTitleText: ''
    }

    onCompanySuggestionPress = (company) => {
        // this.resetSuggestedMovies()
        // this.flipLoadingScreen()
        // await sleep(500)
        // let recommendedMovies = computeNineSimilarMovies(movie, movies)
        // this.updateStep()
        this.setState({ companyName: company.name, companySelected: true })
        // this.flipLoadingScreen()
    }

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

    updateReviewTitle = (text) => {
        this.setState({ reviewTitleText: text })
    }

    updateJobTitle = (text) => {
        this.setState({ jobTitleText: text })
    }

    updateNumMonths = (text) => {
        this.setState({ numMonthsText: text })
    }

    updatePros = (text) => {
        this.setState({ prosText: text })
    }

    onNextPress = () => {
        Actions.AddReviewPage2({
            companyName: this.state.companyName, 
            reviewTitle: this.state.reviewTitleText
        })
    }

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
                {
                    // Need to search for company first :)
                    // drop down to select out of the companies that we have as suggestions
                    // when pressed again, then you can start searching again :)
                    companySelected === false ?
                    <View>
                        <TextInput
                            style={styles.companyNameInput}
                            onChangeText={(text) => this.updateSearch(text)}
                            value={this.state.companySearchText}
                            placeholder={'Search for your company...'}
                        />
                        <Suggestions
                            onCompanySuggestionPress={this.onCompanySuggestionPress}
                            suggestedCompanies={suggestedCompanies}
                        />
                    </View>
                        :
                    <View style={styles.container}>
                        <TouchableHighlight
                            style={styles.companyNameTextWrapper}
                            onPress={() => this.setState({companySelected: false})} >
                            <Text style={styles.companyNameText}>{companyName}</Text>
                        </TouchableHighlight>
                        <View style={styles.addReviewTextContainer}>
                            <Text style={styles.addReviewTitleText}>Review Title</Text>
                        </View>
                        <TextInput //update these functions :)
                            style={styles.addReviewTitleInput}
                            onChangeText={(text) => this.updateReviewTitle(text)}
                            value={this.state.reviewTitleText}
                            placeholder={'Please write a title for your review'}
                        />

                        <View style={styles.addReviewTextContainer}>
                            <Text style={styles.addReviewTitleText}>Job Title</Text>
                        </View>
                        <TextInput //update these functions :)
                            style={styles.addReviewTitleInput}
                            onChangeText={(text) => this.updateJobTitle(text)}
                            value={this.state.jobTitleText}
                            placeholder={'Enter the name of the position you held at this company'}
                        />

                        <View style={styles.addReviewTextContainer}>
                            <Text style={styles.addReviewTitleText}>Number of Months Worked</Text>
                        </View>
                        <TextInput //update these functions :)
                            style={styles.addReviewTitleInput}
                            onChangeText={(text) => this.updateNumMonths(text)}
                            value={this.state.numMonthsText}
                            placeholder={'Number of months'}
                        />

                        <View style={styles.addReviewTextContainer}>
                            <Text style={styles.addReviewTitleText}>Pros</Text>
                        </View>
                        <TextInput //update these functions :)
                            style={styles.addReviewTitleInput}
                            onChangeText={(text) => this.updatePros(text)}
                            value={this.state.prosText}
                            placeholder={'What did you love about this company?'}
                        />

                        <Button
                            style={styles.nextButton}
                            textStyle={styles.signSkipText}
                            text='Next'
                            onPress={() => this.onNextPress()} />
                    </View>
                }
            </View>
        )
    }
}
