import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState } from 'react'
import { View } from 'react-native';
import { Text } from 'react-native'
import { Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { db } from './firebase';
const newChat = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerTitle: () => (
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                        New Chat
                    </Text>
                ),

            }
        );

    }, [navigation]);

    const [chat, setChat] = useState("");

    const triggerPostChat = async () => {
        console.log("CAME");
        await db.collection('chats').add
            (
                {
                    chatName:chat
                }
            )
            .then(() => { navigation.goBack() })
            .catch((err) => alert(err.message))


    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.input}>
                <Input
                    placeholder="Chat Name"
                    autoFocus={true}
                    leftIcon={() => (
                        <Ionicons name="md-chatbubble-ellipses" size={30} color="#2c6BED" />
                    )}

                    value={chat}
                    onChangeText={(text) => { setChat(text) }}
                />

            </View>

            <Button
                title="CONFIRM"
                containerStyle={styles.button}
                type="solid"
                onPress={triggerPostChat}
            />
        </View>
    )

}

export default newChat;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    input: {
        paddingTop: 50,
        width: 300
    },
    button: {
        color: "#2c6BED"

    }

});
