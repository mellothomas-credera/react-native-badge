import React, {useState} from "react";
import {Button, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {toChuck, toDad} from "../redux/jokes";
import CallJokeApi from "./CallJokeApi";
import chuck from "../pictures/chuck.jpeg";
import dad from "../pictures/dad.jpeg";
import {Box, Modal} from "@material-ui/core";
import "../styles.css"

function JokeScreen({ navigation }) {
    const [joke, setJoke] = useState(null);
    const [tellingJoke, setTellingJoke] = useState(false);
    const jokeType = useSelector(state => state.joke.jokeType);
    const dispatch = useDispatch();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        borderr: "10px",
        bgcolor: 'rgb(73, 106, 134)',
        border: '2px solid white',
        boxShadow: 24,
        p: 4,
    };

    async function handleSubmit() {
        setJoke(await CallJokeApi(jokeType));
        setTellingJoke(true);
    }

    function handleClose() {
        setTellingJoke(false);
    }

    return (
        <View style={
            {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }
        }>
            <Text>
                let me tell you a {jokeType === 'dad' ? 'dad' : "Chuck Norris"} joke!
            </Text>
            <Button
                title={"dad joke"}
                onPress={() => dispatch(toDad())}
                color={"#1d3c54"}
            />
            <Button
                data-testid={"toChuck"}
                title={"chuck norris joke"}
                onPress={() => dispatch(toChuck())}
                color={"#1d3c54"}
            />
            <Button
                title={"tell me a joke"}
                onPress={handleSubmit}
                color={"#ca1415"}
            />
            <Modal
                open={tellingJoke}
                onClose={handleClose}
                aria-labelledby={"modal-modal-title"}
                aria-describedby={"modal-modal-description"}
            >
                <Box sx={style}>
                    <h3>
                        {joke}
                    </h3>
                    <Button
                        title={"another!!"}
                        onPress={handleSubmit}
                        color={"#ca1415"}
                    />
                    <Button
                        title={"go back"}
                        onPress={handleClose}
                        color={"#1d3c54"}
                    />
                </Box>
            </Modal>
            <img
                src={jokeType === 'dad' ? dad : chuck}
                alt={"Laughing guy"}
                style={
                    {
                        width: 300,
                        height: 300
                    }
                }
            />
        </View>
    );
}

export default JokeScreen;