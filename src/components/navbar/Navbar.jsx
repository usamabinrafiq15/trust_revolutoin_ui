import React, { useState } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assests/trew_white.png";
const Menu = () => {
  return (
    <>
      <ul>
        <li> DOCUMENTATIONS</li>
        <li> PLUGIN</li>
       
        <li> CONTACT US</li>
        <li> EN</li>
        <li> IT</li>
      </ul>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__logo">
          <img src={logo}  width={150}/>
        </div>
        <div className="navbar__right">
          <div className="navbar__pages">
            <Menu />
          </div>
          <div className="navbar__mobile_menu">
            {toggleMenu ? (
              <RiCloseLine color="#fff" onClick={() => setToggleMenu(false)} />
            ) : (
              <RiMenu3Line color="#fff" onClick={() => setToggleMenu(true)} />
            )}
            {toggleMenu && (
              <div className="navbar__mobile_menu_links motion">
                <div className="navbar__mobile_menu_links_drop">
                  <Menu />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
