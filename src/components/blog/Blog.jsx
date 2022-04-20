import React from 'react'
import "./blog.css"
import {Link, useParams} from "react-router-dom";
import Gpe from "./GPE";
import Mis from "./MIS";
import PoClass from "./PoClass";


const articles = {
    "gpe": <Gpe />,
    "mis": <Mis />,
    "poclass": <PoClass />
}


const Blog = () => {
    const blogId = useParams();

    return (
        <div>
            {articles[blogId["blogId"]]}
        </div>
    )
}

export default Blog