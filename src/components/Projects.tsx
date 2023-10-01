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
                            <h3>PORTFOLIO WEBSITE</h3>
                            <h3 className="tech-used">TECHNOLOGIES: JavaScript, React, HTML, CSS</h3>
                            <p className="project-description">
                                Resumes can sometimes be dry. I wanted to create something that had more depth and had a better visual appeal. Want to visit? You're already here!
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="project-item">
                            <h3>PTO TRACKER (IN PROGRESS)</h3>
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
                                DAMAGE CALCULATOR FOR AN ONLINE GAME (LOST ARK ONLINE) -&nbsp;
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
                                Online games can be expensive to play. I spent some time trying out a new game earlier in 2022 where many players were spending hundreds to thousands of dollars within the first month. I've met some that spent over 5 figures buying items that were often a poor choice. Many of my friends would frequently ask me to calculate which combinations of items would maximize the damage their character would do. Instead of doing this manually everytime, I created a website that automates the math for you!
                            </p>
                            <p className="project-description">
                                Consider the scenario in the demo screenshot below. Let's say you have two options where option #1 costs $200 and option #2 costs $201. You might find it worthwhile to spend that extra $1 on option #2 if you found out that option #2 made your character 9% better.
                            </p>
                            <img className="project-img" src="/trixioncalculator.JPG" alt="Broken"></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects