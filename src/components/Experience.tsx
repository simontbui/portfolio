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
                                <h3>DATA ANALYST</h3>
                                <h3 className="companies">TRANSACTION DATA SYSTEMS</h3>
                            </div>
                            
                            <div className="job-description">
                                <ul>
                                    <li>Automated data verification via Python, ensuring data integrity and compatibility with database procedures</li>
                                    <li>Utilized SQL and Python to identify data related issues that resulted in bugs on clients’ UI or services</li>
                                    <li>Modified SQL stored procedures to enhance existing vaccination data pipelines</li>
                                    <li>QA tested database procedure changes by analyzing data flow, API calls, and JSON payloads</li>
                                    <li>Leveraged regular expressions to automate error handling of data transmission to state government agencies</li>
                                    <li>Validated data to ensure seamless REST API integration across various third party vendors</li>
                                    <li>Acted as a technical liaison between data engineers, software engineers, project managers, and non-technical staff</li>
                                    <li>Aggregated data from Oracle and SQL Server databases for third parties and inter-departmental reporting</li>
                                </ul>
                            </div>
                        </div>
                        <div className="dates">
                                <span>October 2021 - Present</span>
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
                                    <li>Aggregated data based on user selections to visualize the last 7 days of packet data, allowing engineers to see anomalous packets as a signal for intervention</li>
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