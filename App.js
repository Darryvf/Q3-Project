import React, { Component} from 'react'
import Styles from './components/styles'
import { createStackNavigator } from 'react-navigation'
import Popup from './components/reusables/popup.js'
import RemovePartner from './components/screens/removePartner.js'
import SignUp from './components/screens/signup.js'
import Couple from './components/screens/couple.js'
import User from './components/screens/user.js'
import CreateList from './components/screens/createList.js'
import GetFeedback from './components/screens/getfeedback.js'

const RootStack = createStackNavigator(
	{
    Popup: Popup,
		SignUp: SignUp,
		Couple: Couple,
		User: User,
		CreateList: CreateList,
		GetFeedback: GetFeedback,
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
