import React, { useEffect, useLayoutEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { StatusBar } from "expo-status-bar";
import CustomListItem from "../components/listItem"
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { TouchableOpacity, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth } from './firebase';




const homeScreen = ({ navigation }) => {

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
          <TouchableOpacity>
            <Avatar
              rounded
              source={{uri:auth?.currentUser?.photoURL,}}
              activeOpacity={0.7}
              containerStyle={{marginLeft:5}}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={{flexDirection:"row"}}>

          <TouchableOpacity style={{marginRight:25}}>
            <Feather name="camera" size={30} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={{marginRight:10}}>
          <MaterialCommunityIcons name="pencil" size={30} color="black" />
          </TouchableOpacity>

          </View>
          
        ),


      }
    );


  }, [{ navigation }]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>

        <CustomListItem />

      </ScrollView>

    </View>

  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
});

export default homeScreen;