import React from 'react'
import { HashLink as Link } from "react-router-hash-link";

const Cta = () => {
    return (
        <div className={"cta"}>
            <Link to={"/cv"} className={"btn"}>View CV</Link>
            <Link to={{hash: "#contact"}} className={"btn btn-primary"}>Let's Talk</Link>
        </div>
    )
}

export default Cta