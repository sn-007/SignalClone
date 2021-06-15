import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { StatusBar } from "expo-status-bar";
import CustomListItem from "../components/listItem"
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { auth, db } from './firebase';
import { SafeAreaView } from 'react-native';




const homeScreen = ({ navigation }) => {

  const [chats, setChats] = useState([]);

  const triggerLogout = () => {
    auth.signOut()
      .then(() => { navigation.replace("Login") })
      .catch((error) => { alert(error.message) })
  }

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "black",
        headerTitle: () => (
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            Signal
          </Text>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={triggerLogout}>
            <Avatar
              rounded
              source={{ uri: auth?.currentUser?.photoURL, }}
              activeOpacity={0.7}
              containerStyle={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={{ flexDirection: "row" }}>

            <TouchableOpacity style={{ marginRight: 25 }}>
              <Feather name="camera" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => { navigation.push("NewChat") }}>
              <MaterialCommunityIcons name="pencil" size={30} color="black" />
            </TouchableOpacity>

          </View>

        ),


      }
    );


  }, [{ navigation }]);

  useEffect(() => {
    const unsubscribe = db.collection('chats')
      .onSnapshot(snapshot =>
      (
        setChats(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
      )
      );
    //chats.map(chat=>(console.log(chat.data.chatName)))       
    return unsubscribe;

  }, []);

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      
        {
           chats.map((chat) => (<CustomListItem key={chat.id} id={chat.id} chatName={chat.data.chatName} navigation={navigation}  />))
        }
               

    </ScrollView>
    </SafeAreaView>

  );

}
const styles = StyleSheet.create({
  container: {
    flex:1

  },
});

export default homeScreen;