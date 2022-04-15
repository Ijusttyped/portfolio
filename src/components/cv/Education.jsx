import React from 'react'


const edu = [
    {
        "id": 1,
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
        "id": 2,
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
            <div className={"container education__container"}>
                {
                    edu.map(({id, start, end, qualification, thesis, institution}) => {
                        return (
                            <article key={id} className={"education__container-item"}>
                                <div className={"date date__text"}>{start} - {end}</div>
                                <div>
                                    <h3>{qualification}</h3>
                                    <div className={"education__container-details"}>
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