import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { Text, Input, Button, } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { db, auth } from "./firebase";


const registerScreen = ({ navigation }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUri, setImageUri] = useState("");



  const triggerRegister = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userObject) => {
        userObject.user.updateProfile({
          displayName:name,
          photoURL: imageUri || "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
        });



      }).catch((error) => { alert(error.message) })
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      {/* <Text  style={{ fontSize: 17, color:'#2c6BED', paddingBottom:5 }}>Join Signal Today</Text> */}
      <Image
        style={styles.logo}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png' }}
      />


      <View style={styles.input}>

        <Input placeholder="UserName" type="text" autoFocus onChangeText={(text) => { setName(text) }} />

        <Input placeholder="Email" type="email" onChangeText={(text) => { setEmail(text) }} />

        <Input placeholder="Password" type="password" secureTextEntry={true} onChangeText={(text) => { setPassword(text) }} />


        <Input placeholder="Profile Picture" type="imageUri" onChangeText={(text) => { setImageUri(text) }} />

      </View>

      <Button
        title="Register"
        containerStyle={styles.button}
        onPress={triggerRegister}
      />
      <View style={{ paddingBottom: 20 }}></View>



    </KeyboardAvoidingView>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  logo: {
    height: 150,
    width: 150,
  },
  input: {
    width: 300,
  },
  button: {
    width: 200,

  }
});







export default registerScreen;