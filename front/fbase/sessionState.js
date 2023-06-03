import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './client'

const mapUserFromFirebaseAuthToUser = (user) => {
  const { photoUrl, displayName, email } = user
  return {
    imageUrl: photoUrl,
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
