import React from 'react'
import "./cv.css"
import Education from "./Education";

const Cv = () => {
    return (
        <section id={"cv"}>
            <h5>My Curriculum Vitae</h5>
            <h2>Work Experience</h2>
            <div className={"cv__container"}>
                <div className={"cv__container-item"}>
                    <h3 className={"cv__container-heading"}>Education</h3>
                    <Education />
                </div>
            </div>
        </section>
    )
}

export default Cv