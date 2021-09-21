import React from "react";
import {Button, Text, View} from "react-native";
import "../styles.css"

function HomeScreen({ navigation }) {
    return (
        <View style={
            {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }
        }>
            <p>
                Hello! Welcome to my webapp for the React badge! For this assignment, I've made a joke website that can
                pull from either a Chuck Norris API or a dad joke API. In order to get between the home and joke page,
                I used React Navigation. I was able to keep track of what joke to tell and when my fetches were ready
                through hooks, Redux Toolkit, and async/await. To tell the joke, I have a modal pop up with extra
                buttons to interact with. Tests were done on rendering HomeScreen and JokeScreen.
            </p>
            <Button
                title={"Go to Jokes"}
                onPress={() => navigation.navigate('Jokes')}
            />
        </View>
    );
}

export default HomeScreen;