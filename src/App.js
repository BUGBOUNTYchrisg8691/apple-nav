import React, {useState} from "react"
import {Route, NavLink, useParams} from "react-router-dom"

import styled from "styled-components"

import Header from "./components/Header"
import Subheader from "./components/Subheader"

import { links } from "./components/links"

export default function App() {
    const {subHeader, setSubHeader} = useState(null)
    const params = useParams()

    return (
        <div className="app">
            <Route path="/">
                <Header key="header" links={links}/>
            </Route>
            <Route exact path="/:path">
                <Subheader key={`sub-header/${params}`} path="/:path" />
            </Route>
            {/* <header className="app-header">
                {links.map(link => {
                    // console.log(link.text)
                    return (
                        <div>
                            <NavLinkStyled activeClassName="active" className="links" to={`/${link.path}`}>{link.text}</NavLinkStyled>
                            <Route path="/:path">
                                <Subheader />
                            </Route>
                        </div>
                    )
                })}
            </header> */}
        </div>
    )
}
