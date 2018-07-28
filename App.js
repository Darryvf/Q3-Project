import React, { Component} from 'react'
import Styles from './components/styles'
import { createStackNavigator } from 'react-navigation'
import Popup from './components/popup.js'


const RootStack = createStackNavigator(
	{
    Popup: Popup
  },
  {
    initialRouteName: 'Popup'
  },
  {
    headerMode: 'screen'
  }
)


export default class App extends Component {
  render() {
    return <RootStack />
  }
}
