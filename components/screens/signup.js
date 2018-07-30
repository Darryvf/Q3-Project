import React, {Component} from 'react'
import { Text, View, TextInput } from 'react-native'
import ButtonElement from '../elements/button.js'
import Styles from '../styles.js'

class SignUp extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

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
              SignUp
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
                text="SignUp"
                screen='Popup'
              />
            </View>
            <View style={Styles.spacerLarge}></View>
            <View style={Styles.spacerSmall}></View>
            <Text>Already have an account? Login.</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default SignUp
