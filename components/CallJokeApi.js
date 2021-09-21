import React from "react";

async function CallJokeApi(jokeType) {
    let url = null;
    switch (jokeType) {
        case 'dad':
            url = 'https://icanhazdadjoke.com/';
            break;
        case 'chuck':
            url = 'https://api.chucknorris.io/jokes/random'
            break;
    }

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Accept": "Application/json"
        },
        redirect: "follow"
    })
        .catch((e) => console.log(e));

    const responseJson = await response.json();
    switch (jokeType) {
        case 'dad':
            return responseJson.joke;
        case 'chuck':
            return responseJson.value;
        case 'none':
            return 'No type selected';
    }
}

export default CallJokeApi;