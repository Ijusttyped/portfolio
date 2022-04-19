import React from 'react'


const work = [
    {
        "id": 1,
        "start": "February 2019",
        "end": "present",
        "position": "Lead Data Science Engineer",
        "responsibility": "Solution enabling and implementation for different enterprises in the areas of artificial intelligence, cloud and reporting",
        "employer": {
            "name": "Capgemini Deutschland GmbH",
            "url": "https://capgemini.com"
        },
        "type": "IT-Consultancy"
    },
    {
        "id": 2,
        "start": "October 2018",
        "end": "January 2019",
        "position": "Business Intelligence Analyst",
        "responsibility": "Operational data selection of the DWH (Data Vault 2.0); Coordination of requirements for the development of a new reporting environment",
        "employer": {
            "name": "DuMont Media Services GmbH",
            "url": "https://dumont.de"
        },
        "type": "Media"
    },
    {
        "id": 3,
        "start": "November 2017",
        "end": "March 2018",
        "position": "Python Developer",
        "responsibility": "Data analysis and automated data cleansing; Process management and process automation; Project management, geolocation controlling",
        "employer": {
            "name": "Fleetpool GmbH",
            "url": "https://fleetpool.de/"
        },
        "type": "Fleet Management"
    },
    {
        "id": 4,
        "start": "February 2017",
        "end": "July 2017",
        "position": "Student Research Assistant for Data Science",
        "responsibility": "Data analysis and visualization; Machine learning model development",
        "employer": {
            "name": "GESIS - Leibniz Institut für Sozialwissenschaften",
            "url": "https://gesis.org/"
        },
        "type": "Research Institute"
    }
]

const Work = () => {
    return (
        <section id={"work"}>
            <div className={"container cv_history__container"}>
                <h2 className={"cv_history__container-heading"}>Work Experience</h2>
                {
                    work.map(({id, start, end, position, responsibility, employer, type}) => {
                        return (
                            <article key={id} className={"cv_history__container-item"}>
                                <div className={"date date__text"}>{start} - {end}</div>
                                <div>
                                    <h3>{position}</h3>
                                    <div className={"cv_history__container-details"}>
                                        <p>{responsibility}</p>
                                        <a className={"institution__name"} href={employer["url"]}
                                           target={"_blank"}>{employer["name"]}</a>, {type}
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

export default Work