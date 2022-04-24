import React from 'react'
import "./cv.css"
import Work from "./Work";
import Education from "./Education";
import Footer from "../footer/Footer";
import Projects from "./Projects";

const Cv = () => {
    return (
        <section id={"cv"}>
            {/*<h5>My Curriculum Vitae</h5>*/}
            <h2>Curriculum Vitae</h2>
            <div className={"cv__container"}>
                <Projects />
                <Work />
                <Education />
                <Footer />
            </div>
        </section>
    )
}

export default Cv