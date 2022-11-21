import LI_pic from "../img/LI_pic.jpg"
import { SocialIcon } from "react-social-icons"

function Navbar() {
    const socialSize = {height: 25, width: 25, margin: 5}
    return (
        <div className="nav-div">
            <nav>
                <img src={LI_pic} alt="Broken"></img>
                <ul className="nav-ul">
                    <li className="nav-item">
                        <a className="nav-a" href="#about">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href="#experience">EXPERIENCE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a"href="#projects">PROJECTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href="#education">EDUCATION</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href="#skills">SKILLS</a>
                    </li>
                </ul>

                <div className="nav-socials">
                    <SocialIcon url="https://www.linkedin.com/in/simonbui/" target="_blank" style={socialSize}
                    bgColor="black"/>
                    <SocialIcon url="https://github.com/simontbui" target="_blank" style={socialSize}
                    bgColor="black"/>
                    <SocialIcon url="mailto:simontb@uci.edu" network="email" style={socialSize}
                    bgColor="black"/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar