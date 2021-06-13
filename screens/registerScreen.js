import React, {useState} from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { Text, Input, Button, } from "react-native-elements";
import { StatusBar } from "expo-status-bar"


const registerScreen = ({ navigation }) => {
  
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [imageUri, setImageUri] = useState("");

const register = () => {
  console.log("registered");
}

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Text h4 style={{ fontSize: 19 }}>Join Signal Today</Text>
      <Image
        style={styles.logo}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png' }}
      />

      <View style={styles.input}>

        <Input placeholder="UserName" type="text" autofocus onChangeText={(text)=>{setName(text)}} />

        <Input placeholder="Email" type="email" onChangeText={(text)=>{setEmail(text)}}  />

        <Input placeholder="Password" type="password" secureTextEntry={true} onChangeText={(text)=>{setPassword(text)}} />


        <Input placeholder="Profile Picture" type="imageUri" onChangeText={(text)=>{setImageUri(text)}} />

      </View>

      <Button
        title="Register"
        containerStyle={styles.button}
        onPress = {register}
      />
      <View style={{paddingBottom: 20}}></View>



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