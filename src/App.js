import React from "react"
import {Route, NavLink} from "react-router-dom"

import styled from "styled-components"


export default function App() {
    return (
        <div className="app">
            <header className="app-header">
                <NavLink activeClassName="active" className="nav-link" to="/"></NavLink>
            </header>
        </div>
    )
}
