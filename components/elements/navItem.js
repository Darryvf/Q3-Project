import React, {Component} from 'react'
import { Text, View } from 'react-native'
import Styles from '../styles.js'

class NavItem extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <View style={Styles.navItem}>
        <Text style={Styles.navText}>
          {this.props.words}
        </Text>
      </View>
    )
  }
}

export default NavItem
