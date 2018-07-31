import React, {Component} from 'react'
import { Text, View, Image, Slider, TextInput } from 'react-native'
import ButtonElement from '../../elements/button.js'
import Styles from '../../styles.js'

class Give1 extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  static navigationOptions = {
   header: null
 }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={Styles.container}>
        <View style={Styles.header}></View>
        <View style={Styles.body}>
          <View style={Styles.giveFeedback}>
            <View style={Styles.giveHeader}>
              <Text style={Styles.h2}>How did your partner do on
                <Text style={Styles.highlight}> Quality Time </Text>

              this week?
              </Text>
            </View>

            <View style={Styles.spacerLarge}></View>

            <View style={Styles.giveScore}>
              <Image
                style={Styles.smile}
                source={require('../../../assets/img/frown.png')}
              />
              <Text style={Styles.h2}>4</Text>
              <Image
                style={Styles.smile}
                source={require('../../../assets/img/smile.png')}
              />
            </View>

            <View style={Styles.spacerSmall}></View>

            <View style ={Styles.sliderContainer}>
              <Slider
                step={1}
                maximumValue={10}>
              </Slider>
            </View>

            <View style={Styles.spacerLarge}></View>

            <View style={Styles.giveCenter}>
              <TextInput
                multiline={true}
                placeholder='What could they have done to get a better score?'
                style={Styles.addDescription} />
            </View>

          <View style={Styles.spacerLarge}></View>

            <View style={Styles.giveCenter}>
              <ButtonElement
                buttonText="Next"
                press={navigate}
                screen="Give2"/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Give1
