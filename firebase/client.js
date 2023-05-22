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
  const { screenName, email, photoUrl } = user.reloadUserInfo

  return {
    avatar: photoUrl,
    username: screenName,
    email
  }
}
export const sessionState = (onChange) => {
  return onAuthStateChanged(auth, (user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}
