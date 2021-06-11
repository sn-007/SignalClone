import React from 'react';
import { View, StyleSheet, Text, Image, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import {StatusBar} from "expo-status-bar"



const loginScreen = () => {

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style="auto"/>
      <Image style={styles.logo} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png' }} />

      <View style={styles.input}>
        <Input
          placeholder="Email"
          type="email"
          autofocus
          leftIcon={{ type: 'Feather', name: 'mail' }}
        />

        <Input
          placeholder="Password"
          type="password"
          leftIcon={{ type: 'EvilIcons', name: 'lock' }}
          secureTextEntry={true}
          
        />
      </View>
      <Button title="Login" containerStyle={styles.button}/>
      <Button title="Register" containerStyle={styles.button} type="outline"/>


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