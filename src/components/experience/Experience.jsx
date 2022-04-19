import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
    return (
        <section id={"experience"}>
            <h5>The Skills I Have</h5>
            <h2>My Experience</h2>

            <div className={"container experience__container"}>
                <div className={"experience__frontend"} >
                    <h3>Professional Skills</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"}/>
                            <div>
                                <h4>Scrum Master</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"}/>
                            <div>
                                <h4>Leading Small Teams</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"}/>
                            <div>
                                <h4>Project Planing</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"}/>
                            <div>
                                <h4>Design Thinking</h4>
                                <small className={"text-light"}>Knowledgeable</small>
                            </div>
                        </article>
                        {/*<article className={"experience__details"}>*/}
                        {/*    <BsPatchCheckFill className={"experience__details-icon"}/>*/}
                        {/*    <div>*/}
                        {/*        <h4>Python</h4>*/}
                        {/*        <small className={"text-light"}>Experienced</small>*/}
                        {/*    </div>*/}
                        {/*</article>*/}
                    </div>
                </div>

                <div className={"experience__backend"}>
                    <h3>Engineering Skills</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"}/>
                            <div>
                                <h4>Python</h4>
                                <small className={"text-light"}>Expert</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"}/>
                            <div>
                                <h4>AWS</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"}/>
                            <div>
                                <h4>SQL</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"}/>
                            <div>
                                <h4>Docker</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"}/>
                            <div>
                                <h4>Kubernetes</h4>
                                <small className={"text-light"}>Knowledgeable</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"}/>
                            <div>
                                <h4>Terraform</h4>
                                <small className={"text-light"}>Knowledgeable</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience