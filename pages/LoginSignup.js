import React,{useState}  from 'react'

import { StyleSheet, TouchableOpacity,View,Text,KeyboardAvoidingView, ScrollView } from 'react-native'
import Login from './Login'
import Signup from './Signup'


const LoginSignup = () => {
 const [tab,setToggle]=useState(true)
  return (
<KeyboardAvoidingView>
    <View style={styles.main}>

<View style={styles.radioButton}>
      <TouchableOpacity onPress={()=>setToggle(!tab)}
   >
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            <View style={styles.radioBg}></View>
            
          </View>
          <Text style={styles.radioText}> Login</Text>

        </View>
        </TouchableOpacity>
      <TouchableOpacity onPress={()=>setToggle(!tab)}
   >
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            <View style={styles.radioBg}></View>
            
          </View>
          <Text style={styles.radioText}> Signup</Text>

        </View>
        </TouchableOpacity>

</View>


  {!tab?<Login/>:<Signup/>}
  
 
   </View>
  </KeyboardAvoidingView>
 
  )
}
const styles=StyleSheet.create({

  main:{

flex:1,
justifyContent:'space-around',
alignItems:'center'
  },
 radioWrapper:{
  borderWidth:2,
  borderColor:'red',
  padding:10,
  borderRadius:20
 },
 radioButton:{

  flex:1,
  flexDirection:'row'
 }


})
export default LoginSignup