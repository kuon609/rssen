import {getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import {useEffect, useState} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {app} from 'src/firebaseConfig'

export const Login = () => {
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
  }, [auth])
  return (
    <View style={styles.container}>
      <input type='email' name='email' placeholder='Email' onChange={e => handleInputs(e)} />
      <input type='password' name='password' placeholder='Password' onChange={e => handleInputs(e)} />
      <button onClick={addData}>
        <Text>login</Text>
      </button>
      <button onClick={handleLogout}>
        <Text>logout</Text>
      </button>
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
