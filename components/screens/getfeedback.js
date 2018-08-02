import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'
import ButtonElement from '../elements/button.js'
import Styles from '../styles.js'
import BottomNav from '../elements/nav.js'
import FeedbackItem from '../elements/feedbackitem.js'

class GetFeedback extends Component {

  constructor(props){
    super(props)
    this.state = {
      scores: []
    }
  }
  static navigationOptions = {
   header: null
 }

 async componentWillMount() {
   const listResponse = await fetch('http://localhost:3000/api/users/2/sent_scores/is_loved')
   const listJSON = await listResponse.json()


   const listJSONData = listJSON.data

   console.log("listJSONData:", listJSONData)


   // let filteredList = listJSON.filter((item) => {
   //   item.is_loved === true
   // })

    this.setState({scores: listJSON})
   // console.log("filteredList", filteredList)
 }


  render() {


    const { navigate } = this.props.navigation
    const scores = this.state.scores.data
    console.log("scores2", scores)


    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
        </View>
        <View style={Styles.body}>
          <Text>July, 2018</Text>
          <View style={Styles.spacerMedium}></View>
          <Text>Gives</Text>
          <View style={Styles.spacerSmall}></View>

          {/* {scores.map(score => {
            <FeedbackItem
              key={item.id}
              name={score.name}
              feedback={score.feedback}
            />
          })} */}
          <Text>Takes</Text>
          {/* {scores.map(score => {
            <FeedbackItem
              key={item.id}
              name={score.name}
              feedback={score.feedback}
            />
          })} */}
        </View>

        <BottomNav
          press={navigate}
          />
      </View>
    )
  }
}

export default GetFeedback
