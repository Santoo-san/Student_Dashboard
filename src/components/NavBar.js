import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="NavBar">
      <h1>Student Dashboard</h1>
      <div className="Nav">
        <Link to="/">Grafiek alle studenten</Link>
        <Link to="/Table">Tabel alle studenten</Link>
      </div>
    </nav>
  );
}

export default Navbar;
