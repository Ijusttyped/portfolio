import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
    return (
        <section id={"services"}>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className={"container services__container"}>
                {/*-------- Service 1 -----------*/}
                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Development</h3>
                    </div>

                    <ul className={"service__list"}>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                    </ul>
                </article>
                {/*-------- End of Service 1 -----------*/}

                {/*-------- Service 2 -----------*/}
                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Development</h3>
                    </div>

                    <ul className={"service__list"}>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                    </ul>
                </article>
                {/*-------- End of Service 2 -----------*/}

                {/*-------- Service 3 -----------*/}
                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Development</h3>
                    </div>

                    <ul className={"service__list"}>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <BiCheck className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                    </ul>
                </article>
                {/*-------- End of Service 3 -----------*/}

            </div>
        </section>
    )
}

export default Services