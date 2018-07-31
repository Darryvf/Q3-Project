import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC1SuaVBPaZ4BnZ9mWsVEGh9HzmyamxElA",
    authDomain: "wyatt-relationship-app.firebaseapp.com",
    databaseURL: "https://wyatt-relationship-app.firebaseio.com",
    projectId: "wyatt-relationship-app",
    storageBucket: "wyatt-relationship-app.appspot.com",
    messagingSenderId: "163904692607"
  }

  firebase.initializeApp(config)

  const auth = firebase.auth()

  export { auth }
