import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'




const CustomListItem = () => {

    return (
        <View style={styles.container}>

            <ListItem>

                <Avatar rounded source={{ uri: "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" }} />
                <ListItem.Content>

                    <ListItem.Title style={{ fontWeight: "bold", fontSize:18 }} >
                        {"RishabPant"}
                    </ListItem.Title>

                    <ListItem.Subtitle numberOfLines={1} >
                        {"Indian Captian for 2028 WTC IND vs AUS, Gabba repeats itself "}
                    </ListItem.Subtitle>

                </ListItem.Content>

            </ListItem>



        </View>

    );

}
export default CustomListItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

