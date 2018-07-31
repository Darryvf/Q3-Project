import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'
import ButtonElement from '../elements/button.js'
import ListItem from '../elements/listItem.js'
import Styles from '../styles.js'
import BottomNav from '../elements/nav.js'

class Couple extends Component {

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
              source={require('../../assets/img/partner1.jpg')}
            />
            <Image
              style={Styles.profilePic}
              source={require('../../assets/img/partner2.jpeg')}
            />
          </View>
          <View style={Styles.hr}></View>
          <View style={Styles.spacerMedium}></View>
          <View style={Styles.posNeg}>
            <Image
              style={Styles.plusMinus}
              source={require('../../assets/img/plus.png')}
            />
            <View style={Styles.spacerSlim}></View>
            <Image
              style={Styles.plusMinus}
              source={require('../../assets/img/minus.png')}
            />
          </View>
          <View style={Styles.spacerLarge}></View>
          <View style={Styles.list}>
            <View style={Styles.listHalf1}>
              <ListItem
                text="Quality Time"
                screen='Popup'/>
              <View style={Styles.spacerSmall}></View>
              <ListItem
                text="Sexual Intimacy"
                screen='Popup'/>
                <View style={Styles.spacerSmall}></View>
              <ListItem
                text="Alone Time"
                screen='Popup'/>
            </View>
            <View style={Styles.listHalf2}>
              <ListItem
                text="Intense Anger"
                screen='Popup'/>
                <View style={Styles.spacerSmall}></View>
              <ListItem
                text="Not Contributing"
                screen='Popup'/>
                <View style={Styles.spacerSmall}></View>
              <ListItem
                text="Work Too Much"
                screen='Popup'/>
            </View>
          </View>
          <View style={Styles.spacerLarge}></View>
            <View style={Styles.sendFeedback}>
              <ButtonElement
                buttonText="Send Feedback"
                screen='Popup'/>
            </View>
        </View>
        <BottomNav />
      </View>
    )
  }
}

export default Couple
