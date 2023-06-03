import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './client'

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
      console.log(user)
      return {
        name: displayName,
        email,
        image: photoURL
      }
    })
}
