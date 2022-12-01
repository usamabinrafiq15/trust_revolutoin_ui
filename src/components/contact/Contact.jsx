import React from "react";
import "./Contact.css";
import medal from "../../assests/medal.png";
import message from "../../assests/message.png";
import { Row } from "react-bootstrap";
const Contact = () => {
  return (
    <>
      <div className="contacts row ">
        <div className="contact_left col-6">
          <div className="contact_head_left">
            Lets Connect
            <div className="line_contact_left"></div>
          </div>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Service
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            {/* <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div> */}
            <div className="btn">
              <div className="submit_btn"> Submit </div>
            </div>
          </form>
        </div>
        <div className="contact_right col-6">
          <div className="contact_head">
            Contact
            <div className="line_contact"></div>
          </div>
          <div className="contact_title">
            Call Our Customer Service We will Help for Your Convenience
          </div>
          <div className="contact_description">
            <p>
              The list below gives you the 1000 most frequently used English
              words in alphabetical order. Once you've mastered the shorter
              vocabulary lists, this is the next step. It would take time to
              learn the entire list from scratch, but you
            </p>
          </div>
          <div className="Contact_options">
            <Row className="Contact_options_down">
              <div className="Contact_options_things col-6 ">
                <div className="Contact_icons">
                  <img src={medal} />
                </div>
                <div className="Contact_options_heading">
                  <div className="Contact_options_title">Phone Number</div>
                  <div className="Contact_options_descriptions">
                    <p> +(1600) 4567890 </p>
                  </div>
                </div>
              </div>
              <div className="Contact_options_things col-6 ">
                <div className="Contact_icons">
                  <img src={message} />
                </div>
                <div className="Contact_options_heading">
                  <div className="Contact_options_title">Official Location</div>
                  <div className="Contact_options_descriptions">
                    <p>123 Fifth Avenue, New York.</p>
                  </div>
                </div>
              </div>
            </Row>
            <Row className="Contact_options_down">
              <div className="Contact_options_things col-6 ">
                <div className="Contact_icons">
                  <img src={medal} />
                </div>
                <div className="Contact_options_heading">
                  <div className="Contact_options_title">E-mail Address</div>
                  <div className="Contact_options_descriptions">
                    <p>yourid@example.com</p>
                  </div>
                </div>
              </div>
              <div className="Contact_options_things col-6 ">
                <div className="Contact_icons">
                  <img src={message} />
                </div>
                <div className="Contact_options_heading">
                  <div className="Contact_options_title">Working Hours</div>
                  <div className="Contact_options_descriptions">
                    <p>Everyday (7AM - 4PM) </p>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
