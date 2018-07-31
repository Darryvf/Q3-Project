import React, {Component} from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import ButtonElement from '../../elements/button.js'
import Styles from '../../styles.js'
import SetupForm from '../../reusables/setupForm.js'

class AddDescription extends Component {

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
      <View style={Styles.container}>
        <View style={Styles.header}>
          <Image
            style={Styles.closeButton}
            source={require('../../../assets/img/CloseButton.png')}
          />
        </View>
        <View style={Styles.body}>
          <View style={Styles.popUp}>
            <Text
              style={Styles.h1}>
              Add A Description
            </Text>
            <View style={Styles.spacerMedium}></View>
            <TextInput
              multiline={true}
              placeholder='This makes me feel loved because...'
              style={Styles.addDescription}>
            </TextInput>
            <View style={Styles.spacerMedium}></View>
            <ButtonElement
              buttonText="Save"
              press={this.props.press}
              screen={this.props.screen}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default AddDescription
