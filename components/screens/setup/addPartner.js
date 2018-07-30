import React, {Component} from 'react'
import { Text, View, TextInput } from 'react-native'
import ButtonElement from '../../elements/button.js'
import Styles from '../../styles.js'
import SetupForm from '../../reusables/setupForm.js'

class AddPartner extends Component {

  constructor(props){
    super(props)
    this.state = {
      account: 'addPartner'
    }
  }

  static navigationOptions = {
   header: null
 }

  render() {
    const { navigate } = this.props.navigation
    return (
      <SetupForm
      header="Add Your Partner"
      buttonText="Add Partner"
      account={this.state.account}
      />
    )
  }
}

export default AddPartner
