import React, { Component} from 'react'
import Styles from './components/styles'
import { createStackNavigator } from 'react-navigation'

// Screens

import Couple1 from './components/screens/couple1.js'
import Couple2 from './components/screens/couple2.js'
import User1 from './components/screens/user1.js'


import CreateList1 from './components/createList/createList1.js'
import CreateList2 from './components/createList/createList2.js'
import CreateList3 from './components/createList/createList3.js'
import CreateList4 from './components/createList/createList4.js'
import CreateList5 from './components/createList/createList5.js'
import CreateList6 from './components/createList/createList6.js'


import Popup from './components/reusables/popup.js'
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
		Couple1: Couple1,
		Couple2: Couple2,
		User1: User1,
		CreateList1: CreateList1,
		CreateList2: CreateList2,
		CreateList3: CreateList3,
		CreateList4: CreateList4,
		CreateList5: CreateList5,
		CreateList6: CreateList6,
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
    initialRouteName: 'Couple2'
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
