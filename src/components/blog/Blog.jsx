import React from 'react'
import "./blog.css"
import {useParams} from "react-router-dom";
import Compensation from "./Compensation";
import Mis from "./MIS";
import PoClass from "./PoClass";


const articles = {
    "compensation": <Compensation />,
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