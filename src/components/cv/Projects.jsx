import React from 'react'


const projects = [
    {
        "start": "February 2022",
        "end": "June 2022",
        "role": "Data Scientist",
        "industry": "Manufacturing",
        "project": "Analysis of manufacturing processes for automated defect detection.",
        "responsibility": [
            "Analysis of machine data for anomalies and identification of anomaly patterns",
            "Commissioning of data pipelines for early defect detection"
        ],
        "technology": "Python, Docker, AWS"
    },
    {
        "start": "August 2020",
        "end": "January 2022",
        "role": "Machine Learning Engineer",
        "industry": "Pharmaceutical",
        "project": "Provide an analytics platform for HR business partners to leverage machine learning to ensure " +
            "gender equitable pay.",
        "responsibility": [
            "Accelerate model iterations by building machine learning pipelines",
            "Development of a resilient software architecture for the use-case industrialization",
            "Automated testing, deployment, commissioning and monitoring of the solution",
            "Project planning, architecture consulting, engineering coaching"
        ],
        "technology": "Python, Docker, AWS, Kubeflow, Tableau"
    },
    {
        "start": "February 2020",
        "end": "August 2020",
        "role": "Machine Learning Engineer",
        "industry": "Pharmaceutical",
        "project": "Automated classification of purchase orders for correct allocation of expenses.",
        "responsibility": [
            "Improving deep neural networks for a multiclass classification task",
            "Development of industrial machine learning pipelines",
            "Deployment, operation, monitoring and retraining of ML models as microservices in the cloud"
            ],
        "technology": "Python, Docker, AWS"
    },
    {
        "start": "August 2019",
        "end": "December 2019",
        "role": "Machine Learning Engineer",
        "industry": "Pharmaceutical",
        "project": "Benchmarking the cost and performance using GPU acceleration in the cloud or on-premise.",
        "responsibility": [
            "Development of blueprints for ML model training with AWS Sagemaker",
            "Evaluation of possibilities to reduce compute costs when using GPU hardware",
        ],
        "technology": "Python, Docker, AWS, DVC"
    },
    {
        "start": "Mai 2019",
        "end": "January 2020",
        "role": "Server Administrator",
        "industry": "Pharmaceutical",
        "project": "Management of the global tableau server landscape.",
        "responsibility": [
            "Administration of multi-region and multi-node Tableau servers",
            "Server upgrades, migration of server components to AWS",
            "Development of a monitoring stack for usage data"
        ],
        "technology": "Tableau Server, AWS, Python, Shell"
    },
]

const Projects = () => {
    return (
        <section id={"work"}>
            <div className={"container cv_history__container"}>
                <h2 className={"cv_history__container-heading"}>Projects</h2>
                {
                    projects.map(({start, end, role, industry, project, responsibility, technology}, index) => {
                        return (
                            <article key={index} className={"cv_history__container-item"}>
                                <div className={"date date__text"}>{start} - {end}</div>
                                <div>
                                    <h3>{role}</h3>
                                    <div className={"cv_history__container-details"}>
                                        <p><b>Project: </b>{project}</p>
                                        <p><b>Industry: </b>{industry}</p>
                                        <p><b>Responsibility: </b></p>
                                        {
                                            responsibility.map((item, index) => {
                                                return (
                                                    <ul key={index} className={"responsibility_list"}>
                                                        <li>{item}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                        <p><b>Technology: </b>{technology}</p>
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