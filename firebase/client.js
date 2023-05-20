import {
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup
} from 'firebase/auth'
import { auth } from './firebaseApp'

export const loginWithGithub = async () => {
  const gitHubProvider = new GithubAuthProvider()
  return await signInWithPopup(auth, gitHubProvider)
    .then(user => {
      const { _tokenResponse } = user
      const { email, photoUrl, screenName } = _tokenResponse
      return {
        avatar: photoUrl,
        email,
        username: screenName
      }
    })
}
const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}
export const sessionState = (onChange) => {
  return onAuthStateChanged(auth, (user) => {
    console.log(user)
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}
