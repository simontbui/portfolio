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
                                        Improved the maintainability of a React product by replacing hard coded data with GraphQL queries, proactively reducing the amount of client-reported UI bugs when Medicare routinely updates their medical codes
                                    </li>
                                    <li>
                                        Developed and maintained a .NET(C#) MVC project responsible for ingesting, processing, and transmitting data to over
                                        50 state government agencies
                                    </li>
                                    <li>
                                        Debugged and implemented a fix for a production issue affecting over 10% of new user profiles per day
                                    </li>
                                    <li>
                                        Implemented a database enhancement to improve the accuracy of data ingestion and API transmission affecting a national retail chain of ~600 stores
                                    </li>
                                    <li>
                                        Automated data verification processes with Python, ensuring data integrity and reducing database errors
                                    </li>
                                    <li>
                                        Rewrote SQL stored procedures to enhance existing data pipelines and loading processes
                                    </li>
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