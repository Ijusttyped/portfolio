import React from "react"
import "./home.css"
import Header from "../header/Header";
import Nav from "../nav/Nav";
import About from "../about/About";
import Experience from "../experience/Experience";
import Portfolio from "../portfolio/Portfolio";
// import Testimonials from "../testimonials/Testimonials";
// import Services from "../services/Services";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            {/*<Services />*/}
            <Portfolio />
            {/*<Testimonials />*/}
            <Contact />
            <Footer />
        </>
    )
}

export default Home