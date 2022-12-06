import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View} from 'react-native'
import {getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import {useEffect, useState} from 'react'
import {app} from '@/firebaseConfig'
const auth = getAuth(app)
const [data, setData] = useState({email: '', password: ''})
const handleInputs = (e: {target: HTMLInputElement}) => {
  const input = {[e.target.name]: e.target.value}
  setData({...data, ...input})
}
const addData = () => {
  signInWithEmailAndPassword(auth, data.email, data.password)
}
const handleLogout = () => signOut(auth)
useEffect(() => {
  onAuthStateChanged(auth, user => {
    if (user) {
      alert('user is logged in')
    } else {
      alert('user is logged out')
    }
  })
}, [])
export const Login = () => {
  return (
    <View style={styles.container}>
      <input type='email' name='email' placeholder='Email' onChange={e => handleInputs(e)} />
      <input type='password' name='password' placeholder='Password' onChange={e => handleInputs(e)} />
      <button onClick={addData}>login</button>
      <button onClick={handleLogout}>logout</button>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
