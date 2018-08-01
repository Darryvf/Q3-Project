import React, {Component} from 'react'
import { Text, TextInput, Button, View, Image } from 'react-native'
import ButtonElement from '../elements/button.js'
import ListItem from '../elements/listItem.js'
import Styles from '../styles.js'
import RNPickerSelect from 'react-native-picker-select';

class CreateList2 extends Component {

  static navigationOptions = {
   header: null
 }

 constructor(props) {
     super(props);

     this.state = {
         gives: '',
         items: []
     }
 }

  async componentWillMount() {

    const listResponse = await fetch('https://relationship-backend.herokuapp.com/api/feelings')
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

    console.log("state", this.state)
  }

  newItem = () => {
    console.log('this creates a new item')
  }

  onSubmit = () => {
    console.log('this sends the entire list to the database')
  }

  render() {

    return (
      <View style={Styles.container}>
        <View style={Styles.backHeader}>
          <Image
            style={Styles.backButton}
            source={require('../../assets/img/backButton.png')}
          />
        </View>
        <View style={Styles.body}>
          <View style={Styles.createList}>
            <Text
              style={Styles.h1}>
              Gives: 1
            </Text>
            <Text
              style={Styles.pCenter}>
              What are the top 3 things that make you feel loved, respected and wanted. Please comment on why each item is important to you, based on your past.
            </Text>
            <View style={Styles.setting}>
              <View style={Styles.buttonBox}>
                <RNPickerSelect
                  items={this.state.items}
                  onValueChange={(value) => {
                    this.setState({
                      [value]: value,
                    });
                  }}>
                </RNPickerSelect>
              </View>
            </View>

          <View style={Styles.spacerMedium}></View>

          <View style={Styles.createList}>
            <TextInput
              placeholder='Create your own...'
              style={Styles.textInput}>
            </TextInput>
          </View>
          <View style={Styles.createList}>
            <TextInput
              placeholder='Provide a description'
              style={Styles.textInput}>
            </TextInput>
          </View>
          <View style={Styles.spacerLarge}></View>
            <View style={Styles.sendFeedback}>
              <ButtonElement
                buttonText='Next'
                containerStyle={Styles.buttonBox}
                onPress={this.onSubmit}
                style={Styles.buttonText}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}


export default CreateList2
