import React from 'react'
import {NavLink} from "react-router-dom"

import styled from "styled-components"

const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme.white};
`

export default function Header(props) {
    const {links} = props
    return (
            <header className="app-header">
                {links.map(link => {
                    // console.log(link.text)
                    return (
                        <NavLinkStyled key={link.text} activeClassName="active" className="links" to={`/${link.path}`}>{link.text}</NavLinkStyled>
                    )
                })}
            </header>
    )
}
