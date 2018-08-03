import React, {Component} from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import Button from 'react-native-button'
import Styles from './styles.js'

class LandingPage extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <View>
      <Image
        source={require('../assets/img/partner1.png')}
      />


    </View>
    )
  }
}

export default LandingPage
