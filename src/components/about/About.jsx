import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.JPG";
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc";
import { HashLink as Link } from "react-router-hash-link";

const About = () => {
    return (
        <section id={"about"}>
            {/*<h5>Get To Know</h5>*/}
            <h2>About Me</h2>

            <div className={"container about__container"}>
                <div className={"about__me"}>
                    <div className={"about__me-image"}>
                        <img src={ME} alt={"Me About"}/>
                    </div>
                </div>

                <div className={"about__content"}>
                    <div className={"about__cards"}>
                        <article className={"about__card"}>
                            <FaAward className={"about__icon"}/>
                            <h5>Experience</h5>
                            <small>4+ Years Working</small>
                        </article>

                        <article className={"about__card"}>
                            <FiUsers className={"about__icon"}/>
                            <h5>Clients</h5>
                            <small>3 Enterprise-Sized</small>
                        </article>

                        <article className={"about__card"}>
                            <VscFolderLibrary className={"about__icon"}/>
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>
                    <p>
                        My name is Marcel, and I am a machine learning engineer.
                        My job is to lead data science and machine learning projects from the proof-of-concept phase into production and operation.
                        I advise you on a suitable software architecture and MLOps concept, plan work packages and
                        the agile implementation with you. Once the project setup is clear, I dive into the Jupyter notebook
                        swamp and build a stable and sustainable solution out of it.
                    </p>
                    <Link to={{hash: "#contact"}} className={"btn btn-primary"}>Get in Touch</Link>

                </div>
            </div>
        </section>
    )
}

export default About