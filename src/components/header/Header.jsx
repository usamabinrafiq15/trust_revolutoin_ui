import React from "react";
import "./Header.css";
import img from "../../assests/img.svg";
import star from "../../assests/star.png";
import heart from "../../assests/heart.png";
const Header = () => {
  return (
    <>
      <div className="parent">
        <div className="hero">
          <div className="left_side">
            <div className="header_title">
              <div>Influence people with TREW.</div>
              <div>Because Trust brings</div>
              <div>customers, not a sale.</div>
            </div>
            <div className="header_descriptions">
              <p>So,we will be your first blockchain digital partner for you</p>
              <p>to identify the product problem, improvise it, and</p>
              <p>increase the rate of audience with TREW.</p>
            </div>
            <div className="header_buttton">
              <div className="header_buttton_green">Get started</div>
            </div>
          </div>
          <div className="right_side">
            <img src={img} />
          </div>
        </div>
        <div className="positioned row">
          <div className="hero_middle col-12">
            <div className="middle">
              <div className="middle_title"> Reviews are believed like</div>
              <div className="middle_title"> Personal recommendations</div>
            </div>
            <div className="rating">
              <div className="number">
                <img src={star} />
                <span>4.8</span>{" "}
              </div>
              <div className="inwords"> Has 4.8 Rating</div>
            </div>
            <div className="rating">
              <div className="number">
                {" "}
                <img src={heart} />
                <span>20K</span>{" "}
              </div>
              <div className="inwords"> Satisfied Client</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
