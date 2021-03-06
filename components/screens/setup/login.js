import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import ButtonElement from '../../elements/button.js'
import Styles from '../../styles.js'
import SetupForm from '../../reusables/setupForm.js'
import t from 'tcomb-form-native'


const Form = t.form.Form

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  return reg.test(email)
})

t.form.Form.stylesheet.textbox.normal.color = 'black'
t.form.Form.stylesheet.textbox.normal.width = 300
t.form.Form.stylesheet.textbox.normal.borderRadius = 3
t.form.Form.stylesheet.controlLabel.normal.display = 'none'

var Options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  },
  auto: 'placeholders'
}

const User = t.struct({
  username: t.String,
  password: t.String,
})


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

            <Form
              options={Options}
              ref={c => this._form = c}
              type={User}
            />

            <View style={Styles.spacerMedium}></View>
            <View>
              <ButtonElement
                buttonText="Login"
                press={navigate}
                screen="Couple1"
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
