import React, {useState} from 'react';
import {View, TextInput, StyleSheet,ScrollView, Text,TouchableHighlight} from 'react-native';

const Signup = () => {
   
    const [data,setData]=useState({})
    const handleSubmit=async ()=>{
        const res=await fetch('http://localhost:8080/api/users/signup',{
          method:"POST",
          headers:{
            'Content-Type':'application/json',
            
          },
          body:JSON.stringify(data)

        })
        const result=res.json()
        console.log(result)


    }
  return (
      
    <View style={styles.main}>
      <Text style={styles.heading}>Login</Text>

      <View>

        <TextInput style={styles.textInput} onChangeText={(text)=>setData({...data,name:text})} placeholder=" Name" />
        <TextInput style={styles.textInput} onChangeText={(text)=>setData({...data,location:text})} placeholder=" Location" />
        <TextInput style={styles.textInput} onChangeText={(text)=>setData({...data,email:text})} placeholder=" Email" />
        <TextInput style={styles.textInput} onChangeText={(text)=>setData({...data,password:text})} placeholder="Password" />
        <TextInput style={styles.textInput} onChangeText={(text)=>setData({...data,confirm_password:text})} placeholder="Confirm Password" />
        <TouchableHighlight  onPress={handleSubmit}>
      <Text  style={styles.submitButton}>SIGNUP</Text>
    </TouchableHighlight>
      </View>
    </View>
      
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    
    
    justifyContent: 'flex-end',
    alignItems: 'center',
   
  },
  textInput: {
    fontWeight:'bold',
     
    backgroundColor:'white',
    color:'black',
    fontSize:20,
    textAlign:'center',
    paddingHorizontal:70,
    
    margin:10,
    borderRadius:40,
    shadowColor:'black',
    elevation:10,
    shadowOpacity:4,
        
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

export default Signup;
