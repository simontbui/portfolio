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
                                <h3>SOFTWARE ENGINEER</h3>
                                <h3 className="companies">TRANSACTION DATA SYSTEMS</h3>
                            </div>
                            
                            <div className="job-description">
                                <ul>
                                    <li>
                                        Maintained and developed a .NET(C#) product responsible for ingesting, processing, and transmitting vaccination data to 
                                        over 50 state government agencies
                                    </li>
                                    <li>
                                        Debugged and implemented a fix for a production issue affecting over 10% new user accounts per day
                                    </li>
                                    <li>
                                        Improved the maintainability of frontend React code by replacing hard coded data with GraphQL queries
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="dates">
                                <span>February 2023 - Present</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="job">
                            <div className="job-title">
                                <h3>SOFTWARE SUPPORT ENGINEER</h3>
                                <h3 className="companies">TRANSACTION DATA SYSTEMS</h3>
                            </div>
                            
                            <div className="job-description">
                                <ul>
                                    <li>
                                        Automated data verification processes, ensuring data integrity and compatibility with database procedures
                                    </li>
                                    <li>
                                        Utilized SQL and Python to identify data related issues that resulted in bugs on clients’ UI or services
                                    </li>
                                    <li>
                                        Rewrote SQL stored procedures to enhance existing data pipelines and loading processes
                                    </li>
                                    <li>
                                        Acted as a technical liaison between client support, project managers, software engineers, and data engineers
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="dates">
                                <span>October 2021 - February 2023</span>
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