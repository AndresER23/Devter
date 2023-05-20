import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBiXRMYUv_UDnQTpuKnWKdCDfHKdm0Opy8',
  authDomain: 'devters-b6070.firebaseapp.com',
  projectId: 'devters-b6070',
  storageBucket: 'devters-b6070.appspot.com',
  messagingSenderId: '172969730434',
  appId: '1:172969730434:web:7df83a1e84919a1acc2f9b',
  measurementId: 'G-9DWRR68D3W'
}
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
