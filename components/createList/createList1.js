import React, {Component} from 'react'
import { Text, TextInput, View, Image } from 'react-native'
import Button from 'react-native-button'
import ListItem from '../elements/listItem.js'
import Styles from '../styles.js'
import RNPickerSelect from 'react-native-picker-select';

class CreateList1 extends Component {

  static navigationOptions = {
   header: null
 }

 constructor(props) {
     super(props);

     this.state = {
         gives: '',
         items: [],
         new: [],
         progress: []
     }
 }

  async componentWillMount() {

    const listResponse = await fetch('https://relationship-backend.herokuapp.com/api/static_feelings')
    const listJSON = await listResponse.json()

    let lovedList = listJSON.slice(0, 7)
    let items = []

    lovedList.map((item) => {
      let obj = {
        label: item.name,
        value: item.name
      }
      items.push(obj)
    })

    this.setState({items: items})
  }

  onSubmit = async () => {

    const newFeeling = {
      description: null,
      is_loved: true,
      is_default: true
    }

    if(this.state.new.length){
      newFeeling.name = this.state.new
      newFeeling.is_default = false
    } else {
      newFeeling.name = this.state.suggested
    }

    if(this.state.description){
      newFeeling.description = this.state.description
    }

      const response1 = await fetch('http://localhost:3000/api/feelings', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeeling)
      })


    let response1JSON = await response1.json()


    const newUserFeeling = {
      user_id: 1,
      feeling_id: response1JSON[0]
    }


    const response2 = await fetch('http://localhost:3000/api/users/1/feelings', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(newUserFeeling)
      })

      let response2JSON = await response2.json()
      console.log(response2)

  }

  render() {

    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
        </View>
        <View style={Styles.body}>
          <View style={Styles.createList}>
            <Text
              style={Styles.h1}>
              Gives: 1
            </Text>
            <Text
              style={Styles.pCenter}>
              What are the top 3 things that make you feel loved, respected and wanted? Give a description on why this is important to you, based on your passed experiences.
            </Text>
            <View style={Styles.setting}>
              <View style={Styles.dropdown}>
                <RNPickerSelect
                  hideIcon={true}
                  placeholder={{
                    label: 'Choose from list...',
                    value: null
                  }}
                  items={this.state.items}
                  onValueChange={(value) => {
                    this.setState({
                      suggested: value,
                    })
                  }}>
                </RNPickerSelect>
              </View>
            </View>

            <View style={Styles.spacerSmall}></View>

            <TextInput
              placeholder='Or create your own...'
              style={Styles.textInput}
              onChangeText={(value) => {
                this.setState({
                  new: value,
                })
              }}>
            </TextInput>

            <View style={Styles.spacerSmall}></View>

            <TextInput
              multiline={true}
              placeholder='Provide a description. These items may be things your partner used to provide but stopped, is currently providing, or has never provided but you’d love it if they did.'
              style={Styles.addDescription}
              onChangeText={(value) => {
                this.setState({
                  description: value,
                })
              }}>
            </TextInput>

            <View style={Styles.spacerMedium}></View>

            <View style={Styles.sendFeedback}>
              <Button
                style={Styles.buttonText}
                containerStyle={Styles.buttonBox}
                onPress={()=> this.onSubmit() }
              >Next
              </Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}


export default CreateList1
