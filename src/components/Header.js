import React from 'react'
import {NavLink} from "react-router-dom"

import styled from "styled-components"

// import logo from "../../public/main/main-apple-logo-icon.png"
import logo from "../../public/other-icons/apple-logo-icon.png"
import searchIcon from "../../public/main/main-search-icon.png"
import cartIcon from "../../public/main/main-cart-icon.png"

const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme.white};
`

export default function Header(props) {
    const {links} = props
    return (
            <header className="app-header">
                {links.map(link => {
                    if (link.name === "home") {
                        return (
                            <NavLinkStyled key={link.name} activeClassName="active" className="links" to="/">
                                <img key={`${link.name}-image`} src={logo} />
                            </NavLinkStyled>
                        )
                    }
                    if (link.name === "search") {
                        return (
                            <NavLinkStyled key={link.name} activeClassName="active" className="links" to={`/${link.path}`}>
                                <img key={`${link.name}-image`} src={searchIcon} />
                            </NavLinkStyled>
                        )
                    }
                    if (link.name === "cart") {
                        return (
                            <NavLinkStyled key={link.name} activeClassName="active" className="links" to={`/${link.path}`}>
                                <img key={`${link.name}-image`} src={cartIcon} />
                            </NavLinkStyled>
                        )
                    }
                    return (
                        <NavLinkStyled key={link.name} activeClassName="active" className="links" to={`/${link.path}`}>{link.text}</NavLinkStyled>
                    )
                })}
            </header>
    )
}
