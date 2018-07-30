import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'
import ButtonElement from './elements/button.js'
import Styles from './styles.js'

class Popup extends Component {

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
            source={require('../assets/img/CloseButton.png')}
          />
        </View>
        <View style={Styles.body}>
          <View style={Styles.popUp}>
            <Text
              style={Styles.h1}>
              Remove Partner
            </Text>
            <View style={Styles.spacerMedium}></View>
            <Text
              style={Styles.pCenter}>
              Are you sure you want to delete your partner? They will lose access to all of your progress and feedback.
            </Text>
            <View style={Styles.spacerMedium}></View>
            <View>
              <ButtonElement text="Remove Partner"/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Popup
