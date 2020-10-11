import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import {links} from "./links"

export default function Subheading() {
    const [subheader, setSubheader] = useState()
    const params = useParams()

    useEffect(() => {
        setSubheader(links.includes(params))
    },[params.path])

    return (
        <div>
            subheader
        </div>
    )
}
