import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HeaderSocials from "./HeaderSocials";

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

                <a href={"#contact"} className={"scroll__down"}>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header