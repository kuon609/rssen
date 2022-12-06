import {StatusBar} from 'expo-status-bar'
import {getAuth, createUserWithEmailAndPassword, Auth} from 'firebase/auth'
import {useEffect, useState,FC} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {app} from '@/firebaseConfig'

export const SignUp: FC<{auth: Auth}> = ({auth}) => {
  const [data, setData] = useState({email: '', password: ''})
  const handleInputs = (e: {target: HTMLInputElement}) => {
    const newInput = {[e.target.name]: e.target.value}
    setData({...data, ...newInput})
  }
  const addData = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(response => {
        console.log(response.user)
      })
      .catch(error => {
        console.log(error)
      })
  }
  // useEffect(() => {
  //   onAuthStateChanged(auth, user => {
  //     if (user) {
  //       alert('user is logged in')
  //     } else {
  //       alert('user is logged out')
  //     }
  //   })
  // }, [])
  return (
    <View style={styles.container}>
      <input type='email' name='email' placeholder='Email' onChange={e => handleInputs(e)} />
      <input type='password' name='password' placeholder='Password' onChange={e => handleInputs(e)} />
      <button onClick={addData}>submit</button>
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
