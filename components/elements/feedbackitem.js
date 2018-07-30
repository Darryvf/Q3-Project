import React, {Component} from 'react'
import { Text, View } from 'react-native'
import Styles from '../styles.js'

class FeedbackItem extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <View>
        <Text style={Styles.h1}>Quality Time - 4</Text>
        <View style={Styles.spacerSmall}></View>
        <Text>This is where you give specific thoughts on how your partner did this week, and what they could do to get a higher score. Honest, constructive feedback.</Text>
      </View>
    )
  }
}

export default FeedbackItem
