import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const chatScreen = ({ route, navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerStyle: { backgroundColor: "white" },
                headerTintColor: "black",
                headerTitle: () => (
                    <View style={{ paddingLeft: 0, flexDirection: 'row', alignItems: "center" }}>
                        <Avatar rounded source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==" }} />
                        <Text style={{ color: "black", fontSize: 15, fontWeight: "bold", paddingLeft: 20 }}>
                            {route.params.chatName}
                        </Text>
                    </View>
                ),
                headerRight: () => (
                    <View style={{ flexDirection: 'row', alignItems: "center", paddingRight: 15, justifyContent: "space-evenly" }}>
                        <TouchableOpacity style={{ paddingRight: 25 }}>
                            <Ionicons name="ios-videocam-outline" size={30} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons name="ios-call-outline" size={25} color="black" />
                        </TouchableOpacity>


                    </View>


                )

            }
        )

    }, [navigation]);

    return (
        <KeyboardAvoidingView  style= {styles.container}>
            <StatusBar style="light" />

            <ScrollView>

            </ScrollView>

            <View style={styles.bottom}>
                <Input
                    leftIcon= {()=> (<SimpleLineIcons name="emotsmile" size={24} color="black" />)} 
                    leftIconContainerStyle={{paddingLeft:10}}
                    placeholder="Enter Message"
                    inputContainerStyle={styles.input}
                    containerStyle={{width:"90%"}}
                />
                <TouchableOpacity style={{paddingBottom:23}}>
                <Ionicons name="send" size={35} color="black" />
                </TouchableOpacity>

            </View>

            
        </KeyboardAvoidingView>
    )

}
export default chatScreen;
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    bottom:{
        flexDirection:"row",
        alignItems:"center",
    },
    input:{
        backgroundColor:"#D3D3D3",
        borderRadius:30,
        borderBottomColor:"#D3D3D3"

    }
})