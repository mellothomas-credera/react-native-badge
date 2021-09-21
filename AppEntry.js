import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import JokeScreen from "./components/JokeScreen";

const Stack = createNativeStackNavigator();

function AppEntry() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home"}
                    component={HomeScreen}
                    options={{ title: 'ya got jokes?' }}
                />
                <Stack.Screen
                    name={"Jokes"}
                    component={JokeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppEntry;