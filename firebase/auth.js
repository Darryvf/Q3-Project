import { auth } from './firebase'

const signup = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password)
}

export {
  signUp,
  
}
