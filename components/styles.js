// const workSans = require('typeface-work-sans')

const Styles = {
/** Page Styles **/
  container : {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  header : {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
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

closeButton: {
  height: 20,
  width: 20
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

  popUp:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    textAlign: 'center',
  },

  /** Element Styles **/

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
  }
}

export default Styles
