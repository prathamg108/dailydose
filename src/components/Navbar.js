import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar=()=> {
    return (
      <>
        <div className="navbar fixed-top navbar-expandlg navbar-dark bg-dark" style={{position:"sticky"}}>
          <ul className="nav">
            <li className="tag" style={{ fontSize: "30px" }}>
            DailyDose
            </li>
            <li className="tag">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li className="tag">
              <Link className="nav-link " to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="tag">
              <Link className="nav-link " to="/sports">
                Sports
              </Link>
            </li>
            <li className="tag">
              <Link className="nav-link " to="/science">
                Science
              </Link>
            </li>
            <li className="tag">
              <Link className="nav-link " to="/health">
                Health
              </Link>
            </li>
            <li className="tag">
              <Link className="nav-link " to="/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
}

export default Navbar;
