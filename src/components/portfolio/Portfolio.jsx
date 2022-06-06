import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/compensation.jpg"
import IMG2 from "../../assets/segmentation.jpg"


const data = [
    {
        image: IMG1,
        title: "Fair Compensation",
        github: "https://github.com/Ijusttyped/fair-compensation-backend",
        demo: "https://ijusttyped.github.io/fair-compensation-frontend/" //"/blog/compensation"
    },
    {
        image: IMG2,
        title: "Medical Image Segmentation",
        github: "https://github.com/HealthML/active-segmentation",
        demo: "/tbd"  //"/blog/mis"
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
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className={"portfolio__item-cta"}>
                                    <a href={github} className={"btn"} target={"_blank"} rel={"noreferrer"}>Github</a>
                                    <a href={demo} target={"_blank"} rel={"noreferrer"}
                                       className={"btn btn-primary"}>Demo</a>
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