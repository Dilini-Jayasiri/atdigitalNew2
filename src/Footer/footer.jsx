import React from "react";
import './footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-div section">
                <div className="footer-links">
                <div className="footer-description">
                    <h1>AT Digital</h1>
                    <p>Your goal is our taget. Not anything in between. We use <br/> online marketing platforms and tools to achive single <br/> objectives - your business reuslts. </p>
                </div>
                <div className="footer-links-div">
                    <h4>Our Technologies</h4>
                    <a href="/">
                        <p>ReactJS</p>
                    </a>
                    <a href="/">
                        <p>Gatsby</p>
                    </a>
                    <a href="/">
                        <p>NExtJS</p>
                    </a>
                    <a href="/">
                        <p>NodeJS</p>
                    </a>
                </div>
                <div className="footer-links-div">
                    <h4>Our Services</h4>
                    <a href="/">
                        <p>Social Media MArketing</p>
                    </a>
                    <a href="/">
                        <p>Web & Mobile App <br/> Development</p>
                    </a>
                    <a href="/">
                        <p>Data & Analytics</p>
                    </a>
                </div>
</div>
                <hr></hr>

                <div className="footer-below">
                    <div className="footer-copyright">
                        <p>Privacy Policy  |  Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;