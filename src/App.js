import React from "react"
import {Route, NavLink} from "react-router-dom"

import styled from "styled-components"

import { links } from "./components/links"

export default function App() {
    return (
        <div className="app">
            <header className="app-header">
                {links.map(link => {
                    // console.log(link.text)
                    return (
                        <div>
                            <NavLink activeClassName="active" className="links" to={`/${link.path}`}>{link.text}</NavLink>
                        </div>
                    )
                })}
            </header>
        </div>
    )
}
