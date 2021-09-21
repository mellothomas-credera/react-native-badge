import {createSlice} from "@reduxjs/toolkit";

export const jokeSlice = createSlice({
    name: "joke",
    initialState: {
        jokeType: 'dad'
    },
    reducers: {
        toDad: (state) => {
            state.jokeType = 'dad';
        },
        toChuck: (state) => {
            state.jokeType = 'chuck';
        },
        toNone: (state) => {
            state.jokeType = 'none';
        }
    }
});

export const { toDad, toChuck, toNone } = jokeSlice.actions;

export default jokeSlice.reducer;