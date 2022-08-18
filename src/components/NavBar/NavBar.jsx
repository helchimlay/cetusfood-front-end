import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import cetusik from "../../images/cetusFood2.png";
import { GlobalCtx } from "../../App";
import UserSubmenu from "./UserSubmenu/UserSubmenu";

const NavBar = () => {
  const GCtx = React.useContext(GlobalCtx);
  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <div className="NavBar">
      <NavLink style={linkStyle} to="/">
        <div className="logo">
          <img src={cetusik} alt="cetusik" />
          <h3>
            Cetus<span>Food</span>
          </h3>
        </div>
      </NavLink>
      <input type="checkbox" id="menu-toggle" />
      <label id="trigger" htmlFor="menu-toggle"></label>
      <label id="burger" htmlFor="menu-toggle"></label>
      <div className="links">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/"
        >
          Główna
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/order"
        >
          Złóż zamówienie
        </NavLink>
        {!GCtx.user.loggedIn && (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : null)}
            to="/log-in"
          >
            Zaloguj się
          </NavLink>
        )}
        {GCtx.user.role === "admin" && (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : null)}
            to="/admin-panel"
          >
            Panel administratora
          </NavLink>
        )}
        {GCtx.user.loggedIn && <UserSubmenu />}
      </div>
    </div>
  );
};
export default NavBar;
