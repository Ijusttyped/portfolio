import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiTelegramLine} from "react-icons/ri"
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_68gzkjr', 'service_68gzkjr', form.current, 'LdqBW6YkdUvYjpwB3')
        e.target.reset()
    };
    return (
        <section id={"contact"}>
            {/*<h5>Get In Touch</h5>*/}
            <h2>Contact Me</h2>

            <div className={"container contact__container"}>
                <div className={"contact__options"}>
                    <article className={"contact__option"}>
                        <MdOutlineEmail className={"contact__option-icon"} />
                        <h4>Email</h4>
                        <h5>contact[at]fernandezrosas.com</h5>
                        <a href={"mailto:contact@fernandezrosas.com"} target={"_blank"} rel={"noreferrer"}>Send a message</a>
                    </article>

                    <article className={"contact__option"}>
                        <RiTelegramLine className={"contact__option-icon"} />
                        <h4>Telegram</h4>
                        <h5>marcelfe</h5>
                        <a href={"https://t.me/marcelfe"} target={"_blank"} rel={"noreferrer"}>Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type={"text"} name={"name"} placeholder={"Your Full Name"} required={true} />
                    <input type={"email"} name={"email"} placeholder={"Your Email"} required={true} />
                    <textarea name={"message"} rows={"7"} placeholder={"Your Message"} required={true} />
                    <button type={"submit"} className={"btn btn-primary"}>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact