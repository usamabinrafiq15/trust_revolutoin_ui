import React from "react";
import "./AboutUs.css";
import about from "../../assests/about.jpg";
import medal from "../../assests/medal.png";
import message from "../../assests/message.png";
import stick from "../../assests/magic.png";
import { Row } from "react-bootstrap";
const AboutUs = () => {
  return (
    <>
      <div className="about">
        <div className="about_left">
          <img src={about} />
        </div>
        <div className="about_right">
          <div className="about_head">
            About Us
            <div className="line"></div>
          </div>
          <div className="about_title">
            Be so Trustworthy, consumers can't ignore you.
          </div>
          <div className="about_description">
            <p>
              The list below gives you the 1000 most frequently used English
              words in alphabetical order. Once you've mastered the shorter
              vocabulary lists, this is the next step. It would take time to
              learn the entire list from scratch, but you are probably already
              familiar with some of these words. Feel free to copy this list
              into your online flashcard management tool, an app, or print it
              out to make paper flashcards. You'll have to look up the
              definitions on your own either in English or in your own language.
              Good luck improving your English vocabulary!
            </p>
          </div>
        </div>
      </div>
      <div className="options">
        <Row className="options_down">
        <div className="options_things col-4 ">
          <div className="icons">
            <img src={medal}/>
          </div>
          <div className="options_heading">
            <div className="options_title">First & Best</div>
            <div className="options_descriptions">
              <p>definitions on your own </p>
              <p>definitions on your </p>
            </div>
          </div>
        </div>
        <div className="options_things col-4 ">
          <div className="icons">
            <img src={message}/>
          </div>
          <div className="options_heading">
            <div className="options_title">Coustom Request</div>
            <div className="options_descriptions">
              <p>definitions on your own </p>
              <p>definitions on your </p>
            </div>
          </div>
        </div>
        <div className="options_things col-4 ">
          <div className="icons">
            <img src={stick}/>
          </div>
          <div className="options_heading">
            <div className="options_title">Free Credits</div>
            <div className="options_descriptions">
              <p>definitions on your own </p>
              <p>definitions on your </p>
            </div>
          </div>
        </div>
        </Row>
        <Row className="options_down">
        <div className="options_things col-4 ">
          <div className="icons">
            <img src={medal}/>
          </div>
          <div className="options_heading">
            <div className="options_title">Intergrated APIs</div>
            <div className="options_descriptions">
              <p>definitions on your own </p>
              <p>definitions on your </p>
            </div>
          </div>
        </div>
        <div className="options_things col-4 ">
          <div className="icons">
            <img src={message}/>
          </div>
          <div className="options_heading">
            <div className="options_title">Separate Portal</div>
            <div className="options_descriptions">
              <p>definitions on your own </p>
              <p>definitions on your </p>
            </div>
          </div>
        </div>
        <div className="options_things col-4 ">
          <div className="icons">
            <img src={stick}/>
          </div>
          <div className="options_heading">
            <div className="options_title">Support 24/7</div>
            <div className="options_descriptions">
              <p>definitions on your own </p>
              <p>definitions on your </p>
            </div>
          </div>
        </div>
        </Row>
      </div>
    </>
  );
};

export default AboutUs;
