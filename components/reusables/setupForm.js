import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import ButtonElement from '../elements/button.js'
import Styles from '../styles.js'

class SetupForm extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  static navigationOptions = {
   header: null
 }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
        </View>
        <View style={Styles.body}>
          <View style={Styles.popUp}>
            <Text
              style={Styles.h1}>
              {this.props.header}
            </Text>
            <View style={Styles.spacerMedium}></View>

            {this.props.account === 'signup' ? <TextInput
              placeholder='email'
              style={Styles.textInput}>
            </TextInput> : this.props.account === 'addPartner' ? <TextInput
              placeholder='email'
              style={Styles.textInput}>
            </TextInput> : this.props.account === 'editAccount' ? <TextInput
              placeholder='email'
              style={Styles.textInput}>
            </TextInput> : <View></View>}

            <View style={Styles.spacerSmall}></View>

            {this.props.account === 'addPartner' ? <View></View> : <TextInput
              placeholder='username'
              style={Styles.textInput}>
            </TextInput>}

            <View style={Styles.spacerSmall}></View>

            {this.props.account === 'addPartner' ? <View></View> : <TextInput
              placeholder='password'
              style={Styles.textInput}>
            </TextInput>}

            <View style={Styles.spacerMedium}></View>
            <View>
              <ButtonElement
                buttonText={this.props.buttonText}
                press={this.props.press}
                screen={this.props.screen}
              />
            </View>
            <View style={Styles.spacerLarge}></View>
            <View style={Styles.spacerSmall}></View>
            <TouchableOpacity
              onPress={ () => this.props.press(this.props.back)}>
              {this.props.account === 'addPartner' ? <View></View> : this.props.account === 'editAccount' ? <View></View> : <Text>{this.props.login}</Text> }


            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default SetupForm
