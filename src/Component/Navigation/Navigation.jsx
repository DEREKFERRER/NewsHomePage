import {useState} from "react";
import MediaQuery from "react-responsive";
import logo from "./../../assets/images/logo.svg";
import menu from "./../../assets/images/icon-menu.svg";
import menuClose from "./../../assets/images/icon-menu-close.svg";
import "./Navigation.css";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(!isOpen);
  };
  const closeNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Navbar">
      <img className="logoNav" src={logo} />
      <MediaQuery orientation="portrait">
        <div onClick={openNav}>
          <img className="menuHam" style={{height: "20px"}} src={menu} />
        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1224} device={{deviceWidth: 1440}}>
        <div id="NavButton" className={isOpen ? "nav_active" : "nav_inactive"}>
          <div className="menuClose" onClick={closeNav}>
            <img style={{height: "30px"}} src={menuClose} />
          </div>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Navigation;
