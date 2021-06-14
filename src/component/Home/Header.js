import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./main.Module.css";

const Header = (props) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <nav className={`navbar ${ classes.navbarShadow} navbar-dark bg-primary text-white`}>
        <ul className="menuItem">
          <Link className={classes.links} to="/">
            Home
          </Link>
          <Link className={classes.links} to="/education">
            Education
          </Link>
          <Link className={classes.links} to="/corona">
            Corona
          </Link>
          <Link className={classes.links} to="/sport">
            Sports
          </Link>
        </ul>
        <div>
          <input
            type="text"
            className={classes.searchInput}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Search"
          />
          {searchValue.trim() !== "" && (
            <Link
              to={`/search/${searchValue}`}
              className={classes.searchBtn}
              onClick={() => {
                setSearchValue("");
              }}
            >
              Search
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
