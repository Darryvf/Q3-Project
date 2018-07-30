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
        <NavItem words="Couple"/>
        <NavItem words="Feedback"/>
        <NavItem words="Progress"/>
        <NavItem words="Settings"/>
      </View>
    )
  }
}

export default BottomNav
