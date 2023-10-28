import React from 'react'
import {View,Text, StyleSheet} from 'react-native'

import Login from './pages/Login'
import Signup from './pages/Signup'
import LoginSignup from './pages/LoginSignup'



const App = () => {
  return (
    
    <View  style={styles.main}>
      <LoginSignup/>
    </View>
   
  )
}

const styles=StyleSheet.create({
main:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
}
})

export default App