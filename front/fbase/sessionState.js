import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './client'

const mapUserFromFirebaseAuthToUser = (user) => {
  const { photoURL, displayName, email } = user
  console.log(user)
  return {
    imageUrl: photoURL,
    name: displayName,
    email
  }
}
export default function sessionState (onChange) {
  return onAuthStateChanged(auth, (user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}
