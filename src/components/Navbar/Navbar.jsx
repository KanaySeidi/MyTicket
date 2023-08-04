import React from "react";
import nav from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={nav.section}>
        <div className={nav.container}>
          <Link to="/">
            <button className={nav.button}>Home</button>
          </Link>
          <Link to="/task1">
            <button className={nav.button}>Task 1</button>
          </Link>
          <Link to="/task2">
            <button className={nav.button}>Task 2</button>
          </Link>
          <Link to="/weather">
            <button className={nav.button}>Task 3</button>
          </Link>

          <button className={nav.button} onClick={(e) => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
