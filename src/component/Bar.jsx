import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Bar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4 d-flex align-items-center justify-content-between">
      {/* Left Corner — Logo */}
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <i className="bi bi-mortarboard-fill me-2 text-primary fs-4"></i>
        <span className="fw-bold fs-5">ID Creator</span>
      </Link>

      {/* Center — Single-Line Nav Links */}
      <ul className="nav d-flex flex-row align-items-center justify-content-center gap-4 m-0">
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="/form">
            Registration
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="/card">
            Student ID
          </Link>
        </li>
      </ul>

      {/* Right Corner — Create Button */}
      <Link to="/form" className="btn btn-primary rounded-pill">
        <i className="bi bi-plus-circle me-1"></i>
        Create ID
      </Link>
    </nav>
  );
};

export default Bar;
