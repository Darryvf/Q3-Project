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
        <BottomNav />
      </View>
    )
  }
}

export default GetFeedback
