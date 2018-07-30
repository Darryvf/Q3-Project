import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'
import ButtonElement from '../elements/button.js'
import Styles from '../styles.js'

class Popup extends Component {

  constructor(props){
    super(props)
  }

  static navigationOptions = {
   header: null
 }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <Image
            style={Styles.closeButton}
            source={require('../../assets/img/CloseButton.png')}
          />
        </View>
        <View style={Styles.body}>
          <View style={Styles.popUp}>
            <Text
              style={Styles.h1}>
              {this.props.header}
            </Text>
            <View style={Styles.spacerMedium}></View>
            <Text
              style={Styles.pCenter}>
              {this.props.content}
            </Text>
            <View style={Styles.spacerMedium}></View>
            <View>{this.props.user ? <ButtonElement
              text={this.props.buttonText}/> : <View></View>}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Popup
