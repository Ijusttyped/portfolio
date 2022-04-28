import React from 'react'

const Compensation = () => {
    return (
        <article className={"blog__article-item"}>
            <h2>What would you earn?</h2>
            <div className={"blog__article-description"}>
                <h3>Inspiration and Goal</h3>
                <p>
                    During a client project to identify pay gaps between men and women, I got the idea for this project.
                    The goal is to give you an indication of what salary you can demand for your next job, based on your
                    experience.
                </p>
                <h3>The Data</h3>
                <p>
                    The data used for this project can be found <a
                    href={"https://www.kaggle.com/datasets/parulpandey/2020-it-salary-survey-for-eu-region"}
                    target={"_blank"}>here</a>.
                    An exploratory data analysis with very nice visualizations can be viewed at kaggle:
                    https://www.kaggle.com/code/chanoncharuchinda/it-salary-survey-for-eu-region-2020-visualization.
                    Give credits
                </p>
                <h3>Technology</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Aliquam faucibus purus in massa tempor. Vel elit scelerisque mauris
                    pellentesque. Pharetra convallis posuere morbi leo urna molestie at elementum. Amet mauris commodo
                    quis imperdiet massa tincidunt. Convallis a cras semper auctor neque.
                </p>
            </div>
        </article>
    )
}

export default Compensation