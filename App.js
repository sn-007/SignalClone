import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import loginScreen from './screens/loginScreen'
import registerScreen from './screens/registerScreen'
import homeScreen from './screens/homeScreen'



const Stack = createStackNavigator();
const topBarOptions ={
  headerStyle :{backgroundColor:"#2c6BED"},
  headerTitleStyle:{color:"white"},
  headerTintColor:"white"
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={topBarOptions}>
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Register" component={registerScreen} />
        <Stack.Screen name="Home" component={homeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;