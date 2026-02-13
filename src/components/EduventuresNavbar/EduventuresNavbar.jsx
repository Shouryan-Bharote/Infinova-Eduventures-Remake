import React from "react";
import { NavLink } from "react-router-dom";
import "./EduventuresNavbar.css";


const EduventuresNavbar = () => {
  return (
    <nav className="eduventures-navbar bg-black h-[5.5 vh] md:h-[5.5 vh]">
      <div className="eduventures-navbar-inner">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "eduventures-link active-link"
              : "eduventures-link"
          }
        >
          For Individuals
        </NavLink>
        <NavLink
          to="/foruniversities"
          className={({ isActive }) =>
            isActive
              ? "eduventures-link active-link"
              : "eduventures-link"
          }
        >
          For Colleges
        </NavLink>
      </div>
    </nav>
  );
};

export default EduventuresNavbar;
