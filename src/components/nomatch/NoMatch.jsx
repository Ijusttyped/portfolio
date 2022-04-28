import React from 'react'
import "./nomatch.css"

const NoMatch = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                </div>
                <a href="/#" className={"btn btn-primary"}>Go TO Homepage</a>
            </div>
        </div>
    )
}

export default NoMatch