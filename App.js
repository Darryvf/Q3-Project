
import React, { Component} from 'react'
import { Text, View } from 'react-native'
import Styles from './components/styles'


class App extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text >Welcome to React Native!</Text>
      </View>
    )
  }
}

export default App
