import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/gpe.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"


const data = [
    {
        image: IMG1,
        title: "Fair Compensation",
        github: "https://github.com",
        demo: "/blog/gpe"
    },
    {
        image: IMG2,
        title: "Medical Image Segmentation",
        github: "https://github.com",
        demo: "/blog/mis"
    },
    {
        image: IMG3,
        title: "Purchase Order Classification",
        github: "https://github.com",
        demo: "/blog/poclass"
    }
]

const Portfolio = () => {
    return (
        <section id={"portfolio"}>
            {/*<h5>My Recent Work</h5>*/}
            <h2>Portfolio</h2>

            <div className={"container portfolio__container"}>
                {
                    data.map(({id, image, title, github, demo}, index) => {
                        return (
                            <article key={index} className={"portfolio__item"}>
                                <div className={"portfolio__item-image"}>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className={"portfolio__item-cta"}>
                                    <a href={github} className={"btn"} target={"_blank"}>Github</a>
                                    <a href={demo} className={"btn btn-primary"} target={"_blank"}>Blogpost</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio