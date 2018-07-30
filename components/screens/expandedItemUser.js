import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'
import ButtonElement from '../elements/button.js'
import Styles from '../styles.js'
import Popup from '../reusables/popup.js'

class ExpandedItemUser extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: true
    }
  }

  static navigationOptions = {
   header: null
 }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Popup
        header="Quality Time"
        content="This is your place to enter the reasons why this particular behaviour is important for you to feel loved/unloved. It will provide your partner with the reasoning behind your feelings, and build empathy and understanding on this issue"
        buttonText="Edit Reason"
        user={this.state.user}
        />
    )
  }
}

export default ExpandedItemUser
