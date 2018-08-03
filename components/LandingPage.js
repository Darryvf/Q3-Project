import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Button from 'react-native-button'
import Styles from './styles.js'

class LandingPage extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
  const { navigate } = this.props.navigation
    return (
      <View style={Styles.container}>
        <TouchableOpacity
          onPress={() => navigate("Login")}>
          <Image
            source={require('../assets/img/wyatt-design-01.png')}
            style={{width: '100%', height: '100%'}}
          />
      </TouchableOpacity>
    </View>
    )
  }
}

export default LandingPage
