import {
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup
} from 'firebase/auth'
import { auth, db } from './firebaseApp'
import { addDoc, collection, Timestamp } from 'firebase/firestore'

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
  console.log(user)
  const { screenName, email, photoUrl } = user.reloadUserInfo
  const { uid } = user
  return {
    avatar: photoUrl,
    username: screenName,
    email,
    uid
  }
}
export const sessionState = (onChange) => {
  return onAuthStateChanged(auth, (user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}
export const addDevit = ({ userName, userId, avatar, content }) => {
  try {
    return addDoc(collection(db, 'devits'), {
      userId,
      userName,
      avatar,
      content,
      createdAt: Timestamp.fromDate(new Date()),
      likesCount: 0,
      sharesCount: 0
    })
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
