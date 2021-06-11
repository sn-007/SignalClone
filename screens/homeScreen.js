import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const homeScreen = () => {

    return (
        <View style={styles.container}> 
        <Text>Hi this is homeScreen</Text>
            
        </View>
        
    );

}
const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop: 30
      
    },
  });

export default homeScreen;