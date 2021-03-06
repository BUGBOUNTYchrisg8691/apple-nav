import React from "react"
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom"

import {ThemeProvider} from "styled-components"
import "./index.css"
import theme from "./theme"

import App from "./App"

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router>
            <App />
        </Router>
    </ThemeProvider>,
    document.querySelector("#root")
)