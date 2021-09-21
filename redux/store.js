import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from "./jokes"

export default configureStore({
    reducer: {
        joke: jokeReducer
    }
});