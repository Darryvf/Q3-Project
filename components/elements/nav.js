import React, {Component} from 'react'
import { Text, View } from 'react-native'
import NavItem from './navItem.js'
import Styles from '../styles.js'

class BottomNav extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <View style={Styles.navigation}>
        <NavItem
          press={this.props.press}
          screen="Couple1"
          src={require('../../assets/img/couple.png')}/>
        <NavItem
          press={this.props.press}
          screen="GetFeedback"
          src={require('../../assets/img/feedback.png')}/>
        <NavItem
          press={this.props.press}
          screen="User"
          src={require('../../assets/img/settings.png')}/>
      </View>
    )
  }
}

export default BottomNav
