import React from "react";
import Logo from "../../assets/logo.png";
import Arrow from "../../assets/arrow.png";
import Search from "../../assets/search.png";
import PersonArmsSpread from "../../assets/personArmsSpread.png";
import Country from "../../assets/countryImage.png";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid p-0">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Why Qatar <img src={Arrow} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sectors & Opportunities <img src={Arrow} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">
                Incentives <img src={Arrow} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">
                How we help <img src={Arrow} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">
                Media Centre <img src={Arrow} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">
                Resources <img src={Arrow} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">
                About us <img src={Arrow} alt="" />
              </a>
            </li>
          </ul>
          <div className="flag">
            <img className="country" src={Country} alt="" />
            <img className="person" src={PersonArmsSpread} alt="" />
            <span></span>
            <form className="d-flex" role="search">
              <div className="input-search">
                <img src={Search} alt="" />
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </div>
              <button className="btn" type="submit">
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
