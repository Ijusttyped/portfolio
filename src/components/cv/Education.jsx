import React from 'react'


const edu = [
    {
        "start": "October 2020",
        "end": "present",
        "qualification": "MSc. Digital Health",
        "thesis": "tba",
        "institution": {
            "name": "Hasso-Plattner-Institute",
            "url": "https://hpi.de"
        }
    },
    {
        "start": "October 2012",
        "end": "December 2017",
        "qualification": "BSc. Economathematics",
        "thesis": "Application of sparse PCA",
        "institution": {
            "name": "Universtity of Cologne",
            "url": "https://www.uni-koeln.de"
        }
    }
]

const Education = () => {
    return (
        <section id={"education"}>
            <div className={"container cv_history__container"}>
                <h2 className={"cv_history__container-heading"}>Education</h2>
                {
                    edu.map(({start, end, qualification, thesis, institution}, index) => {
                        return (
                            <article key={index} className={"cv_history__container-item"}>
                                <div className={"date date__text"}>{start} - {end}</div>
                                <div>
                                    <h3>{qualification}</h3>
                                    <div className={"cv_history__container-details"}>
                                        <p>Thesis: {thesis}</p>
                                        <a className={"institution__name"} href={institution["url"]} target={"_blank"}>{institution["name"]}</a>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Education