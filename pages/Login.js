import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text,TouchableHighlight} from 'react-native';

const Login = () => {
   
    const [data,setData]=useState({})
    const handleSubmit=()=>{
        console.warn(data)
    }
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Login</Text>

      <View>
        <TextInput style={styles.textInput} onChangeText={(text)=>setData({...data,email:text})} placeholder=" Email" />
        <TextInput style={styles.textInput} onChangeText={(text)=>setData({...data,password:text})} placeholder="Password" />
        <TouchableHighlight  onPress={handleSubmit}>
      <Text  style={styles.submitButton}>LOGIN</Text>
    </TouchableHighlight>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    width:1000,
    
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    
  },
  textInput: {
    fontWeight:'bold',
     
    backgroundColor:'white',
    color:'black',
    fontSize:20,
    textAlign:'center',
    paddingHorizontal:70,
    paddingVertical:15,
    margin:10,
    borderRadius:40,
    shadowColor:'black',
    elevation:10,
    shadowOpacity:4,
        margin: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    color: 'red',
  },
  submitButton:{
    backgroundColor:'red',
   
    paddingVertical:20,
    borderRadius:40,
    fontWeight:'bold',
    fontSize:20,
    margin:10,
    textAlign:'center'
  }
});

export default Login;
