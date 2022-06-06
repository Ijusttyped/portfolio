import React from 'react'
import "./footer.css"
import {BsLinkedin} from "react-icons/bs";
import {FaGithub, FaXingSquare} from "react-icons/fa";
import {HashLink as Link} from "react-router-hash-link";

const Footer = () => {
    return (
        <footer>
            {/*<text className={"footer__logo"}>MFR</text>*/}

            <ul className={"permalinks"}>
                <li><Link to="/#">Home</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/#experience">Experience</Link></li>
                {/*<li><a href={"#services"}>Services</a></li>*/}
                <li><Link to="/#portfolio">Portfolio</Link></li>
                {/*<li><a href={"#testimonials"}>Testimonials</a></li>*/}
                <li><Link to="/#contact">Contact</Link></li>
            </ul>

            <div className={"footer__socials"}>
                <a href={"https://www.linkedin.com/in/marcel-fernandez-rosas-1b224b175/"} target="_blank"
                   rel={"noreferrer"}><BsLinkedin/></a>
                <a href={"https://www.xing.com/profile/Marcel_FernandezRosas/cv"} target={"_blank"}
                   rel={"noreferrer"}><FaXingSquare/></a>
                <a href={"https://github.com/ijusttyped"} target="_blank" rel={"noreferrer"}><FaGithub/></a>
            </div>

            <div className={"footer__copyright"}>
                <small>&copy; Marcel Fernandez Rosas. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer