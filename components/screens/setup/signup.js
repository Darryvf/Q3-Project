import React, {Component} from 'react'
import { Text, View, TextInput } from 'react-native'
import ButtonElement from '../../elements/button.js'
import Styles from '../../styles.js'
import SetupForm from '../../reusables/setupForm.js'

class SignUp extends Component {

  constructor(props){
    super(props)
    this.state = {
      account: 'signup'
    }
  }

  static navigationOptions = {
   header: null
 }

  render() {
    const { navigate } = this.props.navigation

    // const press = () => {
    //   navigate('AddPartner')
    // }

    return (
      <SetupForm
      header="Signup"
      buttonText="Signup"
      account={this.state.account}
      press={navigate}
      screen="AddPartner"
      />
    )
  }
}

export default SignUp
