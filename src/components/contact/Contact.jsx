import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiTelegramLine} from "react-icons/ri"

const Contact = () => {
    return (
        <section id={"contact"}>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className={"container contact__container"}>
                <div className={"contact__options"}>
                    <article className={"contact__option"}>
                        <MdOutlineEmail className={"contact__option-icon"} />
                        <h4>Email</h4>
                        <h5>myemail@something.com</h5>
                        <a href={"mailto:myemail@something.com"} target={"_blank"}>Send a message</a>
                    </article>

                    <article className={"contact__option"}>
                        <RiTelegramLine className={"contact__option-icon"} />
                        <h4>Telegram</h4>
                        <h5>Marcel</h5>
                        <a href={"https://t.me/marcelfe"} target={"_blank"}>Send a message</a>
                    </article>
                </div>

                <form action={""}>
                    <input type={"text"} name={"name"} placeholder={"Your Full Name"} required={true} />
                    <input type={"email"} name={"email"} placeholder={"Your Email"} required={true} />
                    <textarea name={"message"} rows={"7"} placeholder={"Your Message"} required={true}></textarea>
                    <button type={"submit"} className={"btn btn-primary"}>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact