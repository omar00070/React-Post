import React from "react";
import { PostContext } from "../context/PostContext";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav">
      <h3 className="user">omar salameh</h3>
      <ul>
        <Link className="nav-link" to="/">
          <li className="nav-link">Home</li>
        </Link>
        <Link className="nav-link" to="/profile">
          <li className="nav-link">Profile</li>
        </Link>
      </ul>
    </div>
  );
};
