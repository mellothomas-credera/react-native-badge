import JokeScreen from "../components/JokeScreen";
import * as ReactDOM from "react-dom";
import React from "react";
import {fireEvent, getByTestId, render, screen} from "@testing-library/react";

it('renders joke page without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<JokeScreen navigation={null}></JokeScreen>, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('joke toggle on', () => {
    const {container} = render(<JokeScreen navigation={null}></JokeScreen>);

    fireEvent.click(getByTestId(container, "toChuck"));

    expect(screen.getByText("Chuck Norris")).toBeInTheDocument();
});