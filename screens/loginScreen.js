import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import {StatusBar} from "expo-status-bar"




const loginScreen = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const triggerLogin = () => {
    
    console.log("loggedin");
  }



  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style="light"/>
      <Image style={styles.logo} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png' }} />

      <View style={styles.input}>
        <Input
          placeholder="Email"
          autoFocus={true}
          leftIcon={{ type: 'Feather', name: 'mail' }}
          onChangeText={(text)=> {setEmail(text)}}



        />

        <Input
          placeholder="Password"
          leftIcon={{ type: 'EvilIcons', name: 'lock' }}
          secureTextEntry={true}
          onChangeText={(text)=> {setPassword(text)}}

          
        />
      </View>
      <Button 
        title="Login" 
        containerStyle={styles.button} 
        type="solid"
        onPress={triggerLogin}
        />
      <Button 
        title="Register" 
        containerStyle={styles.button} 
        type="outline" 
        onPress={()=> navigation.navigate("Register") }/>



    </KeyboardAvoidingView>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15
  },

  logo: {
    height:200,
    width: 200,
  },

  input: {
    width:300,
    paddingBottom:5
  },

  button:{
    width:200,
    paddingBottom:10,
  }
});
export default loginScreen;