import React from "react";
import "./Footer.css";
import img from "../../assests/img.svg";
import star from "../../assests/star.png";
import heart from "../../assests/heart.png";
import logo from "../../assests/trew_white.png";
import { GrGoogle } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="company_logo">
          <img src={logo} width={150} />
          <div className="footer_description">
            <p>
              The list below gives you the 1000 most frequently used English es
              you the 1000 most frequently usedThe list below gives you the 1000
            </p>
          </div>
        </div>
        <div className="footer_side">
          <div className="footer_things">
            <div className="footer_title">Usefull Links</div>
            <div className="sub_heading"> &#62; Contact US</div>
            <div className="sub_heading">&#62; Official Pages</div>
            <div className="sub_heading">&#62; Frequently Asked Question</div>
            <div className="sub_heading">&#62; Privacy & Policy</div>
            <div className="sub_heading">&#62; Terms & Condition</div>
          </div>
          <div className="footer_things">
            <div className="footer_title">Features</div>
            <div className="sub_heading">&#62; Home</div>
            <div className="sub_heading">&#62; About</div>
            <div className="sub_heading">&#62; Service</div>
            <div className="sub_heading">&#62; Pricing</div>
            <div className="sub_heading">&#62; Testimonial</div>
          </div>
          <div className="footer_things">
            <div className="footer_title">Social Media</div>
            <div className="media">
              <div className="media_icons">
                <GrGoogle />
              </div>
              <div className="media_icons">
                <BsFacebook />
              </div>
              <div className="media_icons">
                <BsTwitter />
              </div>
              <div className="media_icons">
                <BsLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
