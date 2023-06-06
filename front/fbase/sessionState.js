import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './client'

const mapUserFromFirebaseAuthToUser = (user) => {
  const { photoURL, displayName, email } = user
  const { reloadUserinfo } = user
  return {
    imageUrl: photoURL,
    name: displayName,
    email,
    isNewUser: reloadUserinfo ? 0 : 1
  }
}
export default function sessionState (onChange) {
  return onAuthStateChanged(auth, (user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}
