import React from 'react';

function Experience() {
    return (
        <>
            <section className="experience" id="experience">
                <div className="experience-text">
                    <div className="section-header">
                        <h2>EXPERIENCE</h2>
                    </div>

                    <div className="card">
                        <div className="job">
                            <div className="job-title">
                                <h3>SOFTWARE ENGINEER III</h3>
                                <h3 className="companies">Zenith Insurance Company</h3>
                            </div>
                            
                            <div className="job-description">
                                <ul>
                                    <li>
                                        Introduced changes to C# backend and relational database designs to mitigate existing security flaws
                                    </li>
                                    <li>
                                        Optimized several SQL database queries and schema designs, resulting in improved response times, maintainability, and scalability
                                    </li>
                                    <li>
                                        Translated business and user requirements to a full stack HR application (Vue, C#, SQL Server) for employee warnings and performance improvement plans
                                    </li>
                                    <li>
                                        Improved UI performance by identifying and refactoring unnecessary Vue component computations
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="dates">
                                <span>October 2021 - May 2024</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="job">
                            <div className="job-title">
                                <h3>SOFTWARE ENGINEER I</h3>
                                <h3 className="companies">OUTCOMES</h3>
                            </div>
                            
                            <div className="job-description">
                                <ul>
                                    <li>
                                        Developed and maintained a project (.NET, C#, Microsoft SQL Server) responsible for ingesting, processing, and transmitting 15M annual records to over 50 state government agencies
                                    </li>
                                    <li>
                                        Prevented cancellation by a F100 client by resolving a bug that spanned multiple teams and microservices
                                    </li>
                                    <li>
                                        Built a new medical billing product (JavaScript, React, C#) using a microservices architecture with integrations to two different core applications
                                    </li>
                                    <li>
                                        Acted as a subject matter expert for a process that interfaced with 3 different engineering teams and numerous
                                        non-technical teams across the company
                                    </li>
                                    <li>
                                        Created a UI that provides custom SQL querying and visualization of database diagnostics, improving the efficiency of database monitoring by internal staff
                                    </li>
                                    <li>
                                        Reduced database ingestion errors by 70% by writing scripts to automate data verification procedures
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="dates">
                                <span>October 2021 - May 2024</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="job">
                            <div className="job-title">
                                <h3>SOFTWARE ENGINEER (PRACTICUM)</h3>
                                <h3 className="companies">COMMNET WIRELESS LLC</h3>
                            </div>
                            
                            <div className="job-description">
                                <ul>
                                    <li>Created a front-end UI with Python and Flask that processes HTTP requests to pull and analyze cellular networking data</li>
                                    <li>Aggregated data based on user selections to render graphs and automate machine learning models that flag anomalous data as a signal for intervention</li>
                                    <li>Provided well-documented and unit tested code for the client to modify for future infrastructural changes</li>
                                </ul>
                            </div>
                        </div>
                        <div className="dates">
                                <span>May 2022 - August 2022</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience