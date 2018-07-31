import React, {Component} from 'react'
import { Text, TextInput, View, Dropdown, Picker, Button, Image } from 'react-native'
import ButtonElement from '../elements/button.js'
import ListItem from '../elements/listItem.js'
import Styles from '../styles.js'

class EditList extends Component {

  static navigationOptions = {
   header: null
 }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={Styles.container}>
        <View style={Styles.backHeader}>
          <Image
            style={Styles.backButton}
            source={require('../../assets/img/backButton.png')}
          />
        </View>
        <View style={Styles.body}>
          <View style={Styles.createList}>
            <Text
              style={Styles.pCenter}>
              Edit your Deposits list by choosing from some suggestions or create your own new one.
            </Text>
          </View>
          <View style={Styles.createList}>
            <View>
              <View style={Styles.setting}>
                <Image
                  style={Styles.circle}
                  source={require('../../assets/img/Circle_1.png')}
                />
                <View style={Styles.sideSpacerSmall}></View>
                <ListItem
                  text="Quality Time"
                  screen='CreateList'/>
              </View>
              <View style={Styles.spacerSmall}></View>
              <View style={Styles.setting}>
                <Image
                  style={Styles.circle}
                  source={require('../../assets/img/Circle_2.png')}
                />
                <View style={Styles.sideSpacerSmall}></View>
                <ListItem
                  text="Sexual Intimacy"
                  screen='CreateList'/>
              </View>
              <View style={Styles.spacerSmall}></View>
              <View style={Styles.setting}>
                <Image
                  style={Styles.circle}
                  source={require('../../assets/img/Circle_3.png')}
                />
                <View style={Styles.sideSpacerSmall}></View>
                <ListItem
                  text="Alone Time"
                  screen='CreateList'/>
              </View>
            </View>
          </View>
          <View style={Styles.spacerLarge}></View>
          <View style={Styles.createList}>

            <View style={Styles.spacerSmall}></View>
            <TextInput
              placeholder='Create your own...'
              style={Styles.textInput}>
            </TextInput>
          </View>
          <View style={Styles.spacerLarge}></View>
            <View style={Styles.sendFeedback}>
            </View>
        </View>
      </View>
    )
  }
}

export default EditList
