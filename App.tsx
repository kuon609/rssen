import {getAuth} from 'firebase/auth'
import {StyleSheet, View} from 'react-native'
import {SignUp} from '@/components/SignUp'
import {app} from '@/firebaseConfig'

export default function App() {
  const auth = getAuth(app)
  return (
    <View style={styles.container}>
      <SignUp auth={auth} />
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
