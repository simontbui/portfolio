import LI_pic from "../img/LI_pic.jpg"
import { HashLink } from "react-router-hash-link"

function Navbar() {
    return (
        <div className="nav-div">
            <nav>
                <img src={LI_pic} alt="Broken"></img>
                <ul className="nav-ul">
                    <li className="nav-item"><a href="#about">ABOUT</a></li>
                    <li className="nav-item"><a href="#experience">EXPERIENCE</a></li>
                    <li className="nav-item"><a href="#projects">PROJECTS</a></li>
                    <li className="nav-item"><a href="#education">EDUCATION</a></li>
                    <li className="nav-item"><a href="#skills">SKILLS</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar