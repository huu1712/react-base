import React from 'react';
import "./style.css"
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header>
            <NavLink to={"count"}>Count</NavLink>
            <NavLink to={"albums"}>Albums</NavLink>
        </header>
    )
}

export default Header