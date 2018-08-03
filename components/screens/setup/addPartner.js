import React, {Component} from 'react'
import { Text, View, TextInput } from 'react-native'
import Styles from '../../styles.js'
import SetupForm from '../../reusables/setupForm.js'
import Button from 'react-native-button'

class AddPartner extends Component {

  constructor(props){
    super(props)
    this.state = {
      account: 'addPartner'
    }
  }

  static navigationOptions = {
   header: null
 }

  onSubmit = async (navigate) => {

    const newPartner = {
      user1_id: 1,
      user2_id: 2
    }

    const response = await fetch('http://localhost:3000/api/couples', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(newPartner)
    })


    let responseJSON = await response.json()

    navigate('Couple')
 }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
        </View>
        <View style={Styles.body}>
          <View style={Styles.popUp}>
            <Text
              style={Styles.h1}>
              Add Your Partner
            </Text>
            <View style={Styles.spacerMedium}></View>

            <TextInput
              placeholder='email'
              style={Styles.textInput}
              onChangeText={(value) => {
                this.setState({
                  email: value,
                })
              }}>
            </TextInput>

            <View style={Styles.spacerMedium}></View>
            <View>
              <Button
                style={Styles.buttonText}
                containerStyle={Styles.buttonBox}
                onPress={()=> this.onSubmit(navigate)}
              >Submit
              </Button>
            </View>
            <View style={Styles.spacerLarge}></View>
            <View style={Styles.spacerSmall}></View>
          </View>
        </View>
      </View>


    )
  }
}

export default AddPartner
