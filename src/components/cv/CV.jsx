import React from 'react'
import "./cv.css"
import Work from "./Work";
import Education from "./Education";

const Cv = () => {
    return (
        <section id={"cv"}>
            <h5>My Curriculum Vitae</h5>
            <h2>Work Experience</h2>
            <div className={"cv__container"}>
                <Work />
                <Education />
            </div>
        </section>
    )
}

export default Cv