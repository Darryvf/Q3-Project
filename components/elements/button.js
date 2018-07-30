import React, {Component} from 'react'
import { Text, View } from 'react-native'
import Button from 'react-native-button'
import Styles from '../styles.js'

class ButtonElement extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <Button
        style={Styles.buttonText}
        containerStyle={Styles.buttonBox}
        onPress={()=> console.log('press is working')}
      >{this.props.text}
      </Button>
    )
  }
}

export default ButtonElement
