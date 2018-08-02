import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'
import ButtonElement from '../elements/button.js'
import Styles from '../styles.js'
import BottomNav from '../elements/nav.js'
import FeedbackItem from '../elements/feedbackitem.js'

class GetFeedback extends Component {

  static navigationOptions = {
   header: null
 }

 async componentWillMount() {
   const listResponse = await fetch('http://localhost:3000/api/users/2/sent_scores/is_loved')
   const listJSON = await listResponse.json()

console.log(listJSON)

 }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
        </View>
        <View style={Styles.body}>
          <Text>Feedback from July 30th, 2018</Text>
          <View style={Styles.spacerMedium}></View>
          <Text>Deposits</Text>
          <View style={Styles.spacerSmall}></View>
          <FeedbackItem />
          <View style={Styles.spacerLarge}></View>
          <Text>Withdrawals</Text>
        </View>
        <BottomNav
          press={navigate}
          />
      </View>
    )
  }
}

export default GetFeedback
