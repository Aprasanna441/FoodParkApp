import React from 'react'
import {View,Text, StyleSheet} from 'react-native'

import Login from './pages/Login'
import Signup from './pages/Signup'



const App = () => {
  return (
    
    <View style={styles.main}>
      <Signup/>
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