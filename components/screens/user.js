import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'
import ButtonElement from '../elements/button.js'
import ListItem from '../elements/listItem.js'
import Styles from '../styles.js'
import BottomNav from '../elements/nav.js'
import Setting from '../elements/setting.js'

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
          <View style={Styles.user}>
            <View style={Styles.userPic}>
              <Image
                style={Styles.profilePic}
                source={require('../../assets/img/partner1.jpg')}/>
              <View style={Styles.editPic}></View>
              <View style={Styles.spacerMedium}></View>
              <Text>Aimee Roxanne</Text>
            </View>
            <View style={Styles.hr}></View>
            <View style={Styles.spacerLarge}></View>
              <View style={Styles.setting}>
                <Setting text="Loved List"/>
                <Image
                  style={Styles.settingArrow}
                  source={require('../../assets/img/smRightArrow.png')}
                />
              </View>
              <View style={Styles.spacerMedium}></View>
              <View style={Styles.setting}>
                <Setting text="Unloved List"/>
                <Image
                  style={Styles.settingArrow}
                  source={require('../../assets/img/smRightArrow.png')}
                />
              </View>
              <View style={Styles.spacerMedium}></View>
              <View style={Styles.setting}>
                <Setting text="Username, Email, Password"/>
                <Image
                  style={Styles.settingArrow}
                  source={require('../../assets/img/smRightArrow.png')}
                />
              </View>
              <View style={Styles.spacerLarge}></View>
              <View style={Styles.hr}></View>
              <View style={Styles.spacerLarge}></View>
              <View style={Styles.setting}>
                <Setting text="Delete Partner"/>
              </View>
              <View style={Styles.spacerMedium}></View>
              <View style={Styles.setting}>
                <Setting text="Delete Account"/>
              </View>
            </View>
          </View>
        <BottomNav
          press={navigate}/>
      </View>
    )
  }
}

export default User
