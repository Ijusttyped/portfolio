import React from 'react'
import "./footer.css"
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {HashLink as Link} from "react-router-hash-link";

const Footer = () => {
    return (
        <footer>
            <a href={"/#"} className={"footer__logo"}>MFR</a>

            <ul className={"permalinks"}>
                <li><Link to={{hash: "#"}}>Home</Link></li>
                <li><Link to={{hash: "#about"}}>About</Link></li>
                <li><Link to={{hash: "#experience"}}>Experience</Link></li>
                {/*<li><a href={"#services"}>Services</a></li>*/}
                <li><Link to={{hash: "#portfolio"}}>Portfolio</Link></li>
                {/*<li><a href={"#testimonials"}>Testimonials</a></li>*/}
                <li><Link to={{hash: "#contact"}}>Contact</Link></li>
            </ul>

            <div className={"footer__socials"}>
                <a href={"https://www.linkedin.com/in/marcel-fernandez-rosas-1b224b175/"} target="_blank"
                   rel={"noreferrer"}><BsLinkedin/></a>
                <a href={"https://github.com/ijusttyped"} target="_blank" rel={"noreferrer"}><FaGithub/></a>
            </div>

            <div className={"footer__copyright"}>
                <small>&copy; Marcel Fernandez Rosas. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer