import React from 'react'
import "./nomatch.css"
import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                </div>
                <Link to={"/"} className={"btn btn-primary"}>Go to Homepage</Link>
            </div>
        </div>
    )
}

export default NoMatch