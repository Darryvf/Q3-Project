import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import ButtonElement from '../../elements/button.js'
import Styles from '../../styles.js'
import SetupForm from '../../reusables/setupForm.js'

class Login extends Component {

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
              Login
            </Text>
            <View style={Styles.spacerMedium}></View>

            <TextInput
              placeholder='username'
              style={Styles.textInput}>
            </TextInput>

            <View style={Styles.spacerSmall}></View>

            <TextInput
              placeholder='password'
              style={Styles.textInput}
              secureTextEntry={true}>
            </TextInput>

            <View style={Styles.spacerMedium}></View>
            <View>
              <ButtonElement
                buttonText="Login"
                press={navigate}
                screen="Couple"
              />
            </View>
            <View style={Styles.spacerSmall}></View>
            <View style={Styles.spacerLarge}></View>
            <TouchableOpacity
              onPress={ () => navigate('SignUp')}>
               <Text>Don't have an account? Signup.</Text>


            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default Login
