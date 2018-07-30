import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'
import ButtonElement from '../../elements/button.js'
import Styles from '../../styles.js'
import Popup from '../../reusables/popup.js'

class DeleteAccount extends Component {

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
        header="Delete Account"
        content="Are you sure you want to delete your account? All of your data will be removed, and your partner will also lose all feedback."
        buttonText="Yes, Delete Account"
        user={this.state.user}
        />
    )
  }
}

export default DeleteAccount
