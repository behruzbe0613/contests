import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layaut() {
  const [registerState, registerSetState] = useState(false);
  const [showmenuState,setShowMenu] = useState(false)
  return (
    <>
      <nav>
        <div className="container">
          <NavLink to="/" className="logo">
            <img src="./images/logo.avif" alt="img" className="logo-img" />
          </NavLink>
          <div 
            className={showmenuState ? "nav-menu-wrapper wrapper-active" : "nav-menu-wrapper"}
            onClick={()=>{setShowMenu(!showmenuState)}}
          >
          </div>
          <div className={showmenuState? "nav-menu nav-active" : "nav-menu"}>
            <NavLink to="/">Problems</NavLink>
            <NavLink to="/leadboard">LeadBoard</NavLink>
            {registerState ? (
              <>
                <NavLink to="/register">Sign Up</NavLink>
                <NavLink to="/login" className="sign-in-link">
                  Sign In
                </NavLink>
              </>
            ) : (
              <NavLink to="/account" className="nav-link user-icon">
                <i className="fa-solid fa-circle-user"></i>
              </NavLink>
            )}
            <div className="nav-slide-bar"></div>
          </div>
          <i 
            className={showmenuState ? "fa-solid fa-x" : "fa-solid fa-bars"}
            id="nav-menu-btn"
            onClick={()=>{setShowMenu(!showmenuState)}}
          >
          </i>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
