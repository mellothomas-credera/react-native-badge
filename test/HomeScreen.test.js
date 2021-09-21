import React from "react";
import HomeScreen from "../components/HomeScreen";
import * as ReactDOM from "react-dom";

it("renders home screen page without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HomeScreen/>, div);
    ReactDOM.unmountComponentAtNode(div);
});