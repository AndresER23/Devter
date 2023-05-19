import {GithubAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from './firebaseApp'

export const loginWithGithub = () =>{
  const gitHubProvider = new GithubAuthProvider()
  return signInWithPopup(auth,gitHubProvider)
}