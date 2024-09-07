function Projects() {
    return (
        <>
            <section className="projects" id="projects">
                <div className="projects-text">
                    <div className="section-header">
                        <h2>PROJECTS</h2>
                    </div>

                    <div className="card">
                        <div className="project-item">
                            <h3>SIMPLY SHOP (IN PROGRESS)</h3>
                            <h3 className="tech-used">TECHNOLOGIES: .NET, C#, Docker, PostgreSQL, JavaScript, React, HTML, CSS</h3>
                            <p className="project-description">
                                I always wonder if I could be saving money by deciding to grocery shop at another store. Maybe if I went to Aldi today instead of Stater Bros., I would saved $20-30. 
                            </p>
                            <p className="project-description">
                                This full-stack app seeks to remediate that. It's a one stop shop site displaying analytics for your local grocery stores. Curious on what the average price of eggs are in your city? You'll be able to find out the average price as well as the typical price at every nearby grocery store. 
                            </p>

                            <p className="project-description">
                                Currently, I'm working on building out features for this site. So far, it has been containerized for easier local development. Future plans include deployment on AWS.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="project-item">
                            <h3>PORTFOLIO WEBSITE</h3>
                            <h3 className="tech-used">TECHNOLOGIES: JavaScript, React, HTML, CSS</h3>
                            <p className="project-description">
                                Resumes can sometimes be dry. I wanted to create something that had more depth and had a better visual appeal.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="project-item">
                            <h3>PTO TRACKER</h3>
                            <h3 className="tech-used">TECHNOLOGIES: TypeScript, Docker, C#, .NET, Python, Django, NodeJS, Express, React, HTML, CSS, PostgreSQL</h3>
                            <p className="project-description">
                                I appreciate the organization that comes out of calendar products. This project implements a calendar website that shows other users' time off events on a monthly calendar. Want to see what days in a month a specific co-worker is taking off? How about which employees in the accounting team are off in December? And which days are they off? This web app does all those things and more. 
                            </p>
                            <p className="project-description">
                                As a side note, I built the backend server three times using Django, .NET, and Express. This was more of a learning exercise than a practical approach. I wanted to dive into 3 different approaches and see what types of roadblocks I run into with each.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="project-item">
                            <h3>
                                ITEMIZATION CALCULATOR -&nbsp;
                                <a 
                                    style={{color:"rgb(16, 34, 70)"}} 
                                    href="https://www.trixion-calculator.com/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    trixion-calculator.com
                                </a> 
                            </h3>
                            <h3 className="tech-used">TECHNOLOGIES: JavaScript, React, HTML, CSS</h3>
                            <p className="project-description">
                                Online games can be expensive to play. I spent some time trying out a new game earlier in 2022 where many players were spending hundreds to thousands of dollars within the first month. I've met some that spent over $10k USD buying items that were often a poor choice. Many of my friends would frequently ask me to calculate which combinations of items would be better, and by how much. Instead of doing this manually everytime, I created a website that automated the math for them.
                            </p>
                            <p className="project-description">
                                Consider the scenario in the demo image below. We can see that option #2 is over 22% better than the first choice. It would be a shame if a player spent a lot of money on the first option thinking it was better.
                            </p>
                            <img className="project-img" src="/trixion-calculator.jpg" alt="Broken"></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects