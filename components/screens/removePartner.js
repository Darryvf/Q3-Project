import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'
import ButtonElement from '../elements/button.js'
import Styles from '../styles.js'
import Popup from '../reusables/popup.js'

class RemovePartner extends Component {

  static navigationOptions = {
   header: null
 }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Popup
        header="Remove Partner"
        content="Are you sure you want to delete your partner? They will lose access to all of your progress and feedback."
        buttonText="Remove Partner"
        />
    )
  }
}

export default RemovePartner
