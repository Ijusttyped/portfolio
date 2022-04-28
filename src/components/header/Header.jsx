import React from 'react'
import "./header.css"
import CTA from "./CTA"
import HeaderSocials from "./HeaderSocials";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I am</h5>
                <h1>Marcel Fernandez Rosas</h1>
                <h3 className="text-light">Machine Learning Engineer</h3>
                <CTA />
                <HeaderSocials/>

                {/*<div className="me">*/}
                {/*    <img src={ME} alt="me" className={"me__image"}/>*/}
                {/*</div>*/}

                <Link to={{hash: "#contact"}} className={"scroll__down"}>Scroll Down</Link>
            </div>
        </header>
    )
}

export default Header