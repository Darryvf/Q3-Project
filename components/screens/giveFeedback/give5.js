import React, {Component} from 'react'
import { Text, View, Image, Slider, TextInput } from 'react-native'
import ButtonElement from '../../elements/button.js'
import Styles from '../../styles.js'

class Give5 extends Component {

  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
  }

  static navigationOptions = {
   header: null
 }

 sliderChange(value) {
   this.setState(() => {
      return {
        value: parseFloat(value),
      }
    })
 }

  render() {
    const { navigate } = this.props.navigation
    const {value} = this.state
    return (
      <View style={Styles.container}>
        <View style={Styles.header}></View>
        <View style={Styles.body}>
          <View style={Styles.giveFeedback}>
            <View style={Styles.giveHeader}>
              <Text style={Styles.h2}>How did your partner do on
                <Text style={Styles.highlight}> Not Contributing </Text>

              this week?
              </Text>
            </View>

            <View style={Styles.spacerLarge}></View>

            <View style={Styles.giveScore}>
              <Image
                style={Styles.smile}
                source={require('../../../assets/img/smile.png')}
              />
              <Text style={Styles.h2}>{this.state.value}</Text>
              <Image
                style={Styles.smile}
                source={require('../../../assets/img/frown.png')}
              />
            </View>

            <View style={Styles.spacerSmall}></View>

            <View style ={Styles.sliderContainer}>
              <Slider
                // maximumTrackTintColor="pink"
                minimumTrackTintColor="#30E7CE"
                step={1}
                maximumValue={10}
                onValueChange={this.sliderChange.bind(this)}
                value={value}>
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
                  screen="Give6"
                  onValueChange={(e) => this.sliderChange(e.target.value)}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Give5
