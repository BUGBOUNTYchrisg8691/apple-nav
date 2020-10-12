import React, {useState, useEffect} from 'react'
import {useParams, NavLink} from "react-router-dom"

import styled, {keyframes} from "styled-components"

import {sublinks} from "./sublinks"

const slideInRight = keyframes`
    from {
        transform: translate3d(100%, 0, 0);
        visibility: visible;
    }
    to {
        transform: translate3d(0, 0, 0);
    }
`

const StyledDiv = styled.div`
    background-color: ${props => props.theme.white};
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    animation-name: ${slideInRight};
    animation-duration: 1s;
    animation-fill-mode: both;
`

const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme.black};
    text-align: center;
`

export default function Subheading() {
    const [subheader, setSubheader] = useState()
    const params = useParams()

    useEffect(() => {
        setSubheader(sublinks[params.path])
    },[params.path])

    return (
        <StyledDiv>
            {subheader && subheader.map(link => {
                return (
                    <NavLinkStyled key={link.text} activeClassName="active" className="links" to={`/${link.path}`}>{link.text}</NavLinkStyled>
                )
            })}
        </StyledDiv>
    )
}
