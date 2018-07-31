import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
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
          <TouchableOpacity
            onPress={() => this.props.press(this.props.back)}>
            <Image
              style={Styles.closeButton}
              source={require('../../assets/img/CloseButton.png')}
            />
          </TouchableOpacity>
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
            <View>{this.props.user ?
              <ButtonElement
                buttonText={this.props.buttonText}
                press={this.props.press}
                screen={this.props.screen}/>
                : <View></View>}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Popup
