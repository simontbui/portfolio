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
                            <h3>MEETING SCHEDULE TRACKER</h3>
                            <h3 className="tech-used">TECHNOLOGIES: TypeScript, Node.js, Express, MongoDB (NoSQL), React, HTML, CSS</h3>
                            <p className="project-description">
                                Ever felt frustrated trying to schedule a meeting that fits everyone's availabilities? This is an issue I've often ran into. I love solutions such as the calendar interface on Microsoft Teams when it comes to displaying and scheduling meetings. The caveat is that it's tedious to schedule a meeting that lines up with the availabilities of 5 other people in 3 different timezones. I created an app that allows a user to create, schedule, and view others' meeting times. Now, if you want to schedule a meeting on Wednesday with Alice and John, you can check their schedule on the calendar as well.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="project-item">
                            <h3>
                                DAMAGE CALCULATOR FOR AN ONLINE GAME (LOST ARK ONLINE) -
                                <a 
                                    style={{color:"rgb(16, 34, 70)"}} 
                                    href="https://www.trixion-calculator.com/"
                                >
                                    &nbsp;trixion-calculator.com
                                </a> 
                            
                            </h3>
                            <h3 className="tech-used">TECHNOLOGIES: JavaScript, React, HTML, CSS</h3>
                            <p className="project-description">
                                Online games can be expensive to play. I spent some time trying out a new game earlier in 2022 where many players were spending hundreds to thousands of dollars within the first month. I've met some that spent over 5 figures buying items that were often a poor choice. Many of my friends would frequently ask me to calculate which combinations of items would maximize the damage their character would do. Instead of doing this manually everytime, I created a website that automates the math for you! If you had the option of buying a $100 set of items that increased your damage by 100%, you might think twice before buying a $200 set of items that increased your damage by 100.1%. Spend wisely!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects