import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Button from 'react-native-button'
import Styles from '../../styles.js'
import Popup from '../../reusables/popup.js'

class DeleteAccount extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: true
    }
  }

  static navigationOptions = {
   header: null
 }

 onSubmit = async () => {
   const { navigate } = this.props.navigation
   const deleteUser = await
    fetch('https://relationship-backend.herokuapp.com/api/users/1', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
     }
   }).then(response => {
     console.log("user deleted:", response)
     navigate('SignUp')
   })

 }

  render() {
    const { navigate } = this.props.navigation
    return (

      <View style={Styles.container}>
        <View style={Styles.header}>
          <TouchableOpacity
            onPress={() => navigate('User1')}
            >
            <Image
              style={Styles.closeButton}
              source={require('../../../assets/img/CloseButton.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.body}>
          <View style={Styles.popUp}>
            <Text
              style={Styles.h1}>
              Delete Account
            </Text>
            <View style={Styles.spacerMedium}></View>
            <Text
              style={Styles.pCenter}>
              Are you sure you want to delete your account? All of your data will be removed, and your partner will also lose all feedback.
            </Text>
            <View style={Styles.spacerMedium}></View>
            <Button
              style={Styles.buttonText}
              containerStyle={Styles.buttonBox}
              onPress={ ()=> this.onSubmit() }>
              Yes, Delete Account
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

export default DeleteAccount
