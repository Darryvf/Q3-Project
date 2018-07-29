import React, { Component} from 'react'
import Styles from './components/styles'
import { createStackNavigator } from 'react-navigation'
import Popup from './components/popup.js'
import Login from './components/login.js'
import Couple from './components/couple.js'
import User from './components/user.js'


const RootStack = createStackNavigator(
	{
    Popup: Popup,
		Login: Login,
		Couple: Couple,
		User: User,
  },
  {
    initialRouteName: 'User'
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
