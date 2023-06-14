import { SocialIcon } from "react-social-icons"

function Intro() {
    const socialSize = {height: 40, width: 40, margin: 5}
    return (
        <>
            <section className="intro" id="about">
                <div className="intro-text">
                    <h1 className="firstName">SIMON </h1><h1 className="lastName">BUI</h1>
                    <h2>SOFTWARE ENGINEER</h2>
                    <div>
                        <SocialIcon url="https://www.linkedin.com/in/simonbui/" target="_blank" style={socialSize}/>
                        <SocialIcon url="https://github.com/simontbui" target="_blank" style={socialSize}/>
                        <SocialIcon url="mailto:stbui.ca@gmail.com" network="email" target="_blank" style={socialSize}/>
                    </div>
                    <p>Hello! I'm interested in developing and improving useful systems as well as tackling the intricacies that come along the way. Feel free to reach out if you're interested in career talks or food and cooking videos on YouTube!</p>

                    <a className="resume" href="/SimonBuiResume.pdf" target="_blank">View Resume</a>
                </div>
            </section>
        </>
    )
}

export default Intro