import React, { Component} from 'react'
import Styles from './components/styles'
import { createStackNavigator } from 'react-navigation'

// Screens

import Popup from './components/reusables/popup.js'
import Couple from './components/screens/couple.js'
import User from './components/screens/user.js'
import CreateList1 from './components/createList/createList1.js'
import EditList from './components/screens/editList.js'
import GetFeedback from './components/screens/getfeedback.js'
import Give1 from './components/screens/giveFeedback/give1.js'
import Give2 from './components/screens/giveFeedback/give2.js'

// Setup

import SignUp from './components/screens/setup/signup.js'
import Login from './components/screens/setup/login.js'
import AddPartner from './components/screens/setup/addPartner.js'
import EditAccount from './components/screens/setup/editAccount.js'
import AddDescription from './components/screens/setup/addDescription.js'


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
		CreateList1: CreateList1,
		EditList: EditList,
		AddDescription: AddDescription,
		GetFeedback: GetFeedback,
		RemovePartner: RemovePartner,
		DeleteAccount: DeleteAccount,
		ExpandedItemUser: ExpandedItemUser,
		ExpandedItemPartner: ExpandedItemPartner,
		Give1: Give1,
		Give2: Give2,

	},
  {
    initialRouteName: 'CreateList1',
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
