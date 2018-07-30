import React, { Component} from 'react'
import Styles from './components/styles'
import { createStackNavigator } from 'react-navigation'

// Screens

import Popup from './components/reusables/popup.js'
import Couple from './components/screens/couple.js'
import User from './components/screens/user.js'
import CreateList from './components/screens/createList.js'
import GetFeedback from './components/screens/getfeedback.js'

// Setup

import SignUp from './components/screens/setup/signup.js'
import Login from './components/screens/setup/login.js'
import AddPartner from './components/screens/setup/addPartner.js'
import EditAccount from './components/screens/setup/editAccount.js'


// Popups

import RemovePartner from './components/screens/popups/removePartner.js'
import DeleteAccount from './components/screens/popups/deleteAccount.js'
import ExpandedItemUser from './components/screens/popups/expandedItemUser.js'
import ExpandedItemPartner from './components/screens/popups/expandedItemPartner.js'




const RootStack = createStackNavigator(
	{
    Popup: Popup,
		SignUp: SignUp,
		Login: Login,
		AddPartner: AddPartner,
		EditAccount: EditAccount,
		Couple: Couple,
		User: User,
		CreateList: CreateList,
		GetFeedback: GetFeedback,
		RemovePartner: RemovePartner,
		DeleteAccount: DeleteAccount,
		ExpandedItemUser: ExpandedItemUser,
		ExpandedItemPartner: ExpandedItemPartner,
	},
  {
    initialRouteName: 'SignUp'
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
