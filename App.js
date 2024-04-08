import { useState } from "react";
const { View, TextInput, StyleSheet, TouchableOpacity, Text, Image, ImageBackground} = require("react-native");

export default function App(){
  const [Email, setMail]=useState("");
  const [Password, setPassword]=useState("");
  function onPress(){
    alert(`đăng nhập thành công với Email là: ${Email} và Password: ${Password}`)
  }
  return(
    <View style={myStyle.container}>

      <ImageBackground source={require('./assets/background.jpg')}
      style={myStyle.background}>

      <Image style={myStyle.Image}
      source={require('./assets/logo.jpg')}/>

      <Text style={myStyle.Text}>Login</Text>

      <TextInput
      style={myStyle.TextInput}
      value={Email}
      keyboardType="email-address"
      onChangeText={setMail}
      placeholder="Email"/>

      <TextInput
      style={myStyle.TextInput} 
      value={Password}
      secureTextEntry
      onChangeText={setPassword}
      placeholder="Password"/>

      <TouchableOpacity
      style={myStyle.Button}
      onPress={onPress}>
        <Text style={myStyle.textButton}>Login</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const myStyle = StyleSheet.create(
  {
    container:{
      flex:1,
    },
    Text:{
      textAlign:"center",
      marginRight:10,
      fontWeight:"bold",
      fontSize:20
    },
    TextInput:{
      borderWidth:1,
      height:40,
      fontSize:12,
      margin:0.5,
      marginLeft:10,
      marginRight:10,
      borderRadius:20,
      backgroundColor:'pink',
      fontSize:16
    },
    Button:{
      backgroundColor: "#0080FF",
      height:50,
      justifyContent: "center",
      alignItems:"center",
      marginLeft:10,
      marginRight:10,
      borderRadius:20
    },
    textButton:{
      fontSize:20,
      fontWeight:"bold"
    },
    Image:{
      width:300,
      height:200,
      marginLeft:40
    },
    background:{
      width:'100%',
      height:'100%',
      justifyContent:'center'
    }
  }
)