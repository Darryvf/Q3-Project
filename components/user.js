import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'
import ButtonElement from './elements/button.js'
import ListItem from './elements/listItem.js'
import Styles from './styles.js'
import BottomNav from './elements/nav.js'
import Setting from './elements/settings.js'

class User extends Component {

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
          <View style={Styles.profileToggle}>
            <Image
              style={Styles.profilePic}
              source={require('../assets/img/partner1.jpg')}
            />
          </View>
          <View style={Styles.hr}></View>
          <View style={Styles.spacerLarge}></View>
            <Setting text="Loved List"/>
            <Setting text="Unloved List"/>
            <Setting text="Username, Email, Password"/>
            <View style={Styles.spacerLarge}></View>
            <View style={Styles.hr}></View>
            <View style={Styles.spacerLarge}></View>
            <Setting text="Delete Partner"/>
            <Setting text="Delete Account"/>
          </View>
        <BottomNav />
      </View>
    )
  }
}

export default User
