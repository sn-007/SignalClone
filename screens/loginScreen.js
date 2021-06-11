import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const loginScreen = () => {

    return (
        <View style={styles.container}> 
        <Text>Hi this is loginScreen</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop: 30
      
    },
  });
export default loginScreen;