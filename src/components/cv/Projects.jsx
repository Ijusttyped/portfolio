import React from 'react'


const projects = [
    // {
    //     "start": "February 2022",
    //     "end": "June 2022",
    //     "role": "Data Scientist",
    //     "industry": "Manufacturing",
    //     "project": "Process Data Analytics",
    //     "responsibility": "",
    //     // "technology": "Python, Docker, AWS, Kubeflow"
    // },
    {
        "start": "August 2020",
        "end": "January 2022",
        "role": "Lead Machine Learning Engineer",
        "industry": "Pharmaceutical",
        "project": "HR",
        "responsibility": "Architecture Consulting; Engineering Coaching; Project Planning; " +
            "Industrialization of Data Science Use-Cases in AWS; Migration of AWS-Deployments to Kubeflow",
        // "technology": "Python, Docker, AWS, Kubeflow"
    },
    {
        "start": "February 2020",
        "end": "August 2020",
        "role": "Machine Learning Engineer",
        "industry": "Pharmaceutical",
        "project": "SmartclassAI",
        "responsibility": "Improving deep neural networks for a multiclass classification task; " +
            "Building resilient software architectures for productionizing AI-models; " +
            "Hosting and Deployment of AI-models as microservices in AWS; Coaching & support",
        // "technology": ""
    },
    {
        "start": "August 2019",
        "end": "December 2019",
        "role": "Machine Learning Engineer",
        "industry": "Pharmaceutical",
        "project": "ML GPU Compute Cluster",
        "responsibility": "Development of Blueprints for ML model training with AWS Sagemaker; " +
            "Development of a CI/CD pipeline for automating model training; Cost tracking",
        // "technology": ""
    },
    {
        "start": "Mai 2019",
        "end": "January 2020",
        "role": "Data Engineer",
        "industry": "Pharmaceutical",
        "project": "Tableau Server Managed Services",
        "responsibility": "Administrating multi-region and multi-node servers; Server upgrades; " +
            "Migration of server components to AWS; Development of a monitoring stack for usage data"
        // "technology": ""
    },
]

const Projects = () => {
    return (
        <section id={"work"}>
            <div className={"container cv_history__container"}>
                <h2 className={"cv_history__container-heading"}>Projects</h2>
                {
                    projects.map(({start, end, role, industry, project, responsibility}, index) => {
                        return (
                            <article key={index} className={"cv_history__container-item"}>
                                <div className={"date date__text"}>{start} - {end}</div>
                                <div>
                                    <h3>{role}</h3>
                                    <div className={"cv_history__container-details"}>
                                        <p><b>Responsibility: </b>{responsibility}</p>
                                        <p><b>Industry: </b>{industry}, <b>Project: </b>{project}</p>
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

export default Projects