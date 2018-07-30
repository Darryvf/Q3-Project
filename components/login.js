import React, {Component} from 'react'
import { Text, View, TextInput } from 'react-native'
import ButtonElement from './elements/button.js'
import Styles from './styles.js'

class Login extends Component {

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
          <View style={Styles.popUp}>
            <Text
              style={Styles.h1}>
              Login
            </Text>
            <View style={Styles.spacerMedium}></View>
              <TextInput
                placeholder='email'
                style={Styles.textInput}>
              </TextInput>
              <View style={Styles.spacerSmall}></View>
              <TextInput
                placeholder='password'
                style={Styles.textInput}>
              </TextInput>
            <View style={Styles.spacerMedium}></View>
            <View>
              <ButtonElement
                text="Login"
                screen='Popup'/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Login
