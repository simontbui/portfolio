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
                                <h3>ANALYST (SOFTWARE ENGINEERING)</h3>
                                <h3 className="companies">TRANSACTION DATA SYSTEMS</h3>
                            </div>
                            
                            <div className="job-description">
                                <ul>
                                    <li>
                                        Developed and maintained a project (React.js, SQL Server, C#) responsible for ingesting, processing, and transmitting 15M annual records to over 50 state government agencies via numerous REST API integrations
                                    </li>
                                    <li>
                                        Prevented cancellation by a F100 client by resolving a bug that went unresolved for nearly a year
                                    </li>
                                    <li>
                                        Built a new billing product using a microservices architecture with integrations to two different core applications
                                    </li>
                                    <li>
                                        Acted as a subject matter expert for a process that interfaced with 3 different engineering teams and various
                                        non-technical teams across the company
                                    </li>
                                    <li>
                                        Collaborated with various VPs and managers to design various features and products
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="dates">
                                <span>March 2023 - Present</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="job">
                            <div className="job-title">
                                <h3>Data Operations Analyst</h3>
                                <h3 className="companies">TRANSACTION DATA SYSTEMS</h3>
                            </div>
                            
                            <div className="job-description">
                                <ul>
                                    <li>
                                        Created a UI that provides custom SQL querying and visualization of database diagnostics, improving the efficiency of database monitoring by internal teams
                                    </li>
                                    <li>
                                        Reduced database ingestion errors by 70% by writing scripts to automate data verification procedures
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="dates">
                                <span>October 2021 - March 2023</span>
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