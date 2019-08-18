import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ScrollButton from "./ScrollButton"

function Footer () {
    return (
        <div className="footer">
            <p>Giang Nguyen</p>
            <a href={"https://www.linkedin.com/in/giang-nguyen-aa8161106/detail/contact-info/"}>
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
               
            </a>
            <a href={"https://github.com/GiangNguyen1207"}>
                <FontAwesomeIcon icon={faGithub} size="lg" style={{marginLeft:"10px"}} />
            </a>
            <ScrollButton scrollStepInPx="100" />
        </div>
    )
}

export default Footer;
