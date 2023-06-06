import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './client'
import { BASE_URL } from 'utils/links'

const saveEmailUrl = BASE_URL + '/user/saveEmail'
const saveEmail = (email) => {
  const data = {
    email
  }
  fetch(saveEmailUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
export const loginWithFacebook = async () => {
  const facebookProvider = new FacebookAuthProvider()
  return await signInWithPopup(auth, facebookProvider)
    .then(element => {
      const { user } = element
      const { displayName, email, photoURL } = user
      console.log(user)
      return {
        name: displayName,
        email,
        image: photoURL
      }
    })
}
export const loginWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider()
  return await signInWithPopup(auth, googleProvider)
    .then(element => {
      const { user } = element
      const { displayName, email, photoURL } = user
      saveEmail(email)
      return {
        name: displayName,
        email,
        image: photoURL
      }
    })
}
