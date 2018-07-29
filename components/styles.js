// const workSans = require('typeface-work-sans')

const Styles = {
/** Screen Styles **/
  container : {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },

  header : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 25,
    paddingTop: 25
  },

  body : {
    flex: 8,
    flexDirection: 'column',
    padding:20
  },

/** Elements **/

spacerLarge: {
  paddingTop: 20,
  paddingBottom: 20
},

  spacerMedium: {
    paddingTop: 10,
    paddingBottom: 10
  },

  spacerSmall: {
    paddingTop: 5,
    paddingBottom: 5
  },

  spacerSlim: {
    paddingLeft: 5,
    paddingRight: 5
  },

  closeButton: {
    height: 20,
    width: 20
  },

  hr: {
    borderTopWidth: 1,
    borderTopColor: 'black',
  },

  textInput: {
    color: 'pink',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'grey',
    width: 260,
    height: 40,
    padding: 10,
  },

  h1: {
    color: 'black',
    fontSize: 28,
    paddingBottom: 20
    },

  pCenter: {
    paddingBottom: 20,
    textAlign: 'center',
  },

  buttonText: {
    color: '#0adeb3'
  },

  buttonBox: {
    backgroundColor: 'white',
    borderColor: '#0adeb3',
    borderWidth: 2,
    height: 50,
    width: 200,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  navigation: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'black',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  navItem: {
    flex: 1,
    height: 50,
    borderRightWidth: 1,
    borderRightColor: 'black',
    flexDirection: 'row',
    alignItems: 'center'
  },

  navText: {
    flex: 1,
    textAlign: 'center',
  },

  /** Popup Styles **/

  popUp:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    textAlign: 'center',
    },

  /** Couple Styles **/

  couples: {
    flex: 1,
    flexDirection: 'column'
  },

  profileToggle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40
  },

  posNeg: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  list: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  listHalf1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },

  listHalf2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },

  listItemText: {
    color: 'white',
    fontSize: 16
  },

  listItemBox: {
    backgroundColor: '#0adeb3',
    borderColor: '#0adeb3',
    borderWidth: 2,
    height: 40,
    width: 160,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  profilePic: {
    height: 100,
    width: 100,
    borderRadius:100/2
  },

  plusMinus: {
    height: 30,
    width: 30
  },

  sendFeedback: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /** User Styles **/

  user : {
    paddingLeft: 20,
    paddingRight: 20
  },

  userPic: {
    backgroundColor: 'pink',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40
  },

  editPic: {
    width: 20,
    height: 20,
    backgroundColor: 'black',
    marginLeft: 30,
    marginTop: -10
  },

  setting: {
    flexDirection: 'row',
  },

  settingText: {
    flex: 1
  },

  settingArrow: {
    height: 10,
    width: 10
  },
}

export default Styles
