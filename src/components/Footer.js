import React from "react"
import Logo from "../assets/Logo.svg"
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt=""/>
            </div>
            <div className="footer-icons">
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FiFacebook />
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Careers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>021-523-5235</span>
                <span>hello@foodie.com</span>
                <span>press@foodie.com</span>
                <span>contact@foodie.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  );
}

export default Footer