import React from "react";
import { NavLink } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [menuIsSmall, setMenuIsSmall] = React.useState(false);
  return (
    <div className="body">
      <div className={menuIsSmall ? "smal" : "big"}>
        <div className="menuContent">
          <div className="icon_menu">
            <i
              className="bx bx-menu"
              onClick={() => setMenuIsSmall(!menuIsSmall)}
            ></i>
          </div>
        </div>
        <ul>
          <li>
            <i className="bx bx-search-alt"></i>
            <input type="text" placeholder="wyszukaj" />
          </li>
          <li>
            <NavLink to={"billings"}>
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">rozliczanie</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"your_profile"}>
              <i className="bx bx-user"></i>
              <span className="links_name">twoje konto</span>
            </NavLink>
          </li>

          <li>
            <NavLink to={"order"}>
              <i className="bx bx-cart"></i>
              <span className="links_name">Składanie zamówień</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"history"}>
              <i className="bx bx-folder"></i>
              <span className="links_name">Historia zamówień</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'recomending'}>
              <i className="bx bx-heart"></i>
              <span className="links_name">Proponuj</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;