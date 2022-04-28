import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {BiShow} from "react-icons/bi"
import {BiMessageSquareDetail} from "react-icons/bi"
import {useState} from "react";
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")
    return (
        <nav>
            <Link to={{hash: "#"}} onClick={() => setActiveNav("#")}
                  className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></Link>
            <Link to={{hash: "#about"}} onClick={() => setActiveNav("#about")}
                  className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></Link>
            <Link to={{hash: "#experience"}} onClick={() => setActiveNav("#experience")}
                  className={activeNav === "#experience" ? "active" : ""}><BiBook/></Link>
            <Link to={{hash: "#portfolio"}} onClick={() => setActiveNav("#portfolio")}
                  className={activeNav === "#portfolio" ? "active" : ""}><BiShow/></Link>
            <Link to={{hash: "#contact"}} onClick={() => setActiveNav("#contact")}
                  className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail/></Link>
        </nav>
    )
}

export default Nav