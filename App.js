import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import loginScreen from './screens/loginScreen'
import registerScreen from './screens/registerScreen'
import homeScreen from './screens/homeScreen'
import newChat from './screens/newChat';
import chatScreen from './screens/chatScreen';



const Stack = createStackNavigator();
const topBarOptions ={
  headerStyle :{backgroundColor:"#2c6BED"},
  headerTitleStyle:{color:"white"},
  headerTintColor:"white",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS

}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={topBarOptions}>
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Register" component={registerScreen} />
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="NewChat" component={newChat} />
        <Stack.Screen name="ChatScreen" component={chatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;