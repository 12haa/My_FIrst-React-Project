import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All The MeetUps </Link>
          </li>
          <li>
            <Link to="/lol"> Add New MeetUps </Link>
          </li>
          <li>
            <Link to="/favoriters"> Favoriters </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
