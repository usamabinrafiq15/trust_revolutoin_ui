import React from "react";
import "./Service.css";
import man from "../../assests/insect.png";
import bug from "../../assests/software-engineer.png";
import { BsFillBugFill } from "react-icons/bs";
import { MdSettingsSystemDaydream} from "react-icons/md";
const Service = () => {
  return (
    <>
      <div className="service">
        <div className="service_center">
          <div className="service_head">
            Service
            <div className="line_service"></div>
          </div>
        </div>
        <div className="service_heading">
          <div>
            <div className="service_title"> The 1000 most frequently used</div>
            <div className="service_title"> The 1000 most frequently </div>
          </div>
        </div>
        <div className="service_description">
          <div className="service_description_para">
            <p>
              {" "}
              The list below gives you the 1000 most frequently used English es
              you the 1000 most frequently used
            </p>
            <p>
              {" "}
              The list below gives you frequently used es you the 1000 most
              frequently used English
            </p>
          </div>
        </div>
      </div>
      <div className="service_box">
        <div className="service_box_things">
          <div className="service_img">
            {/* <img src={bug} />  */}
            <MdSettingsSystemDaydream />
          </div>
          <div className="service_box_title">Software Service</div>
          <div className="service_box_description">
            <p>
              The list below gives you the 1000 most frequently used English es
              you the 1000 most frequently usedThe list below gives you the 1000
              most frequently used English es you the 1000 most frequently used
            </p>
          </div>
        </div>
        <div className="service_box_things">
          <div className="service_img">
            {/* <img src={man}  />  */}
            <BsFillBugFill />
          </div>
          <div className="service_box_title">Software Service</div>
          <div className="service_box_description">
            <p>
              The list below gives you the 1000 most frequently used English es
              you the 1000 most frequently usedThe list below gives you the 1000
              most frequently used English es you the 1000 most frequently used
            </p>
          </div>
        </div>
        {/* <div className="service_box_things">
          <div className="service_img">
            <MdSettingsSystemDaydream />
          </div>
          <div className="service_box_title">Software Service</div>
          <div className="service_box_description">
            <p>
              The list below gives you the 1000 most frequently used English es
              you the 1000 most frequently usedThe list below gives you the 1000
              most frequently used English es you the 1000 most frequently used
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Service;
