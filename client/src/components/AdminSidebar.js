import React, { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import Countdown from "react-countdown";
import classes from "../styles/AdminSidebar.module.css";
import logo from "../assets/logo-v1.png";
import {
  BiBarChartSquare,
  BiUser,
  BiMessageSquareDetail,
  BiBell,
  BiLogOut,
} from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUserSwitch } from "react-icons/ai";

const AdminSidebar = (props) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isActive, setIsActive] = useState("dashboard");
  const { adminLogout } = useLogout();

  const renderer = ({ minutes, seconds }) => (
    <span>
      {minutes} Minutes {seconds} Seconds
    </span>
  );

  const adminLogoutHandler = () => {
    adminLogout();
  };
  const activePageToggle = (pageName) => {
    setIsActive(pageName);
    props.getActivePage(pageName);
  };
  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    <>
      <div
        className={`${classes["sidebar-menu"]} ${
          isMobileOpen ? classes.open : ""
        }`}
      >
        <div className={classes["sidebar-logo"]}>
          <img src={logo} alt="logo" />
          <h1 className={classes["sidebar-logo-text"]}>Qatar's Talk</h1>
        </div>
        <ul>
          <li
            className={isActive === "dashboard" ? classes.active : ""}
            onClick={() => activePageToggle("dashboard")}
          >
            <BiBarChartSquare size={"20px"} />
            <span>Dashboard</span>
          </li>
          <li
            className={isActive === "company" ? classes.active : ""}
            onClick={() => activePageToggle("company")}
          >
            <BiUser size={"20px"} />
            <span>Company</span>
          </li>
          <li
            className={isActive === "user" ? classes.active : ""}
            onClick={() => activePageToggle("user")}
          >
            <AiOutlineUserSwitch size={"20px"} />
            <span>User Management</span>
          </li>
          <li
            className={isActive === "notification" ? classes.active : ""}
            onClick={() => activePageToggle("notification")}
          >
            <BiBell size={"20px"} />
            <span>Notification</span>
          </li>
          <li
            className={isActive === "message" ? classes.active : ""}
            onClick={() => activePageToggle("message")}
          >
            <BiMessageSquareDetail size={"20px"} />
            <span>Message</span>
          </li>
        </ul>
        <div
          onClick={adminLogoutHandler}
          className={classes["sidebar-menu-logout"]}
        >
          <Countdown date={props.logoutTimer} renderer={renderer} />

          <div>
            <span>
              <BiLogOut size={"20px"} /> Logout
            </span>
          </div>
        </div>
      </div>
      <div className={classes["open-sidebar-btn"]} onClick={toggleSidebar}>
        <GiHamburgerMenu size={"20px"} />
      </div>
      {isMobileOpen && (
        <div className={classes["sidebar-overlay"]} onClick={toggleSidebar} />
      )}
    </>
  );
};

export default AdminSidebar;
