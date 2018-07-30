import React, {Component} from 'react'
import { Text, View, TextInput } from 'react-native'
import ButtonElement from '../../elements/button.js'
import Styles from '../../styles.js'
import SetupForm from '../../reusables/setupForm.js'

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      account: 'login'
    }
  }

  static navigationOptions = {
   header: null
 }

  render() {
    const { navigate } = this.props.navigation
    return (
      <SetupForm
      header="Login"
      buttonText="Login"
      account={this.state.account}
      />
    )
  }
}

export default Login
