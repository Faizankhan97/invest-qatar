import React from "react";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import LinkedIn from "../../assets/linkedIn.png";
import Instagram from "../../assets/instagram.png";
import YouTube from "../../assets/youtube.png";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 p-0">
              <div className="left-wrap">
                <div className="row">
                  <div className="col-md-4">
                    <div className="box1">
                      <h5>Why Qatar?</h5>
                      <ul>
                        <li>
                          <a href="#">Doing Business in Qatar</a>
                        </li>
                        <li>
                          <a href="#">Doing Business in Qatar</a>
                        </li>
                        <li>
                          <a href="#">Doing Business in Qatar</a>
                        </li>
                        <li>
                          <a href="#">Doing Business in Qatar</a>
                        </li>
                        <li>
                          <a href="#">Doing Business in Qatar</a>
                        </li>
                        <li>
                          <a href="#">Doing Business in Qatar</a>
                        </li>
                        <li>
                          <a href="#">Doing Business in Qatar</a>
                        </li>
                        <li>
                          <a href="#">Doing Business in Qatar</a>
                        </li>
                        <li>
                          <a href="#">Doing Business in Qatar</a>
                        </li>
                      </ul>
                    </div>
                    <div className="box2">
                      <h5>About Us</h5>
                      <ul>
                        <li>
                          <a href="#">Message from CEO</a>
                        </li>
                        <li>
                          <a href="#">Message from CEO</a>
                        </li>
                        <li>
                          <a href="#">Message from CEO</a>
                        </li>
                        <li>
                          <a href="#">Message from CEO</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="box1">
                      <h5>Sectors and Opportunities</h5>
                      <ul>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                        <li>
                          <a href="#">Opportunities</a>
                        </li>
                      </ul>
                    </div>
                    <div className="box2">
                      <h5>Media Centre</h5>
                      <ul>
                        <li>
                          <a href="#">Events</a>
                        </li>
                        <li>
                          <a href="#">Events</a>
                        </li>
                        <li>
                          <a href="#">Events</a>
                        </li>
                        <li>
                          <a href="#">Events</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="box1">
                      <h5>Incentives</h5>
                      <ul>
                        <li>
                          <a href="#">Advanced Industries</a>
                        </li>
                        <li>
                          <a href="#">Advanced Industries</a>
                        </li>
                        <li>
                          <a href="#">Advanced Industries</a>
                        </li>
                        <li>
                          <a href="#">Advanced Industries</a>
                        </li>
                        <li>
                          <a href="#">Advanced Industries</a>
                        </li>
                      </ul>
                    </div>
                    <div className="box2">
                      <h5>Resources</h5>
                      <ul>
                        <li>
                          <a href="#">Publications</a>
                        </li>
                        <li>
                          <a href="#">Publications</a>
                        </li>
                        <li>
                          <a href="#">Publications</a>
                        </li>
                        <li>
                          <a href="#">Publications</a>
                        </li>
                      </ul>
                    </div>
                    <div className="box3">
                      <h5>How We Help</h5>
                      <ul>
                        <li>
                          <a href="#">Request information</a>
                        </li>
                        <li>
                          <a href="#">Request information</a>
                        </li>
                        <li>
                          <a href="#">Request information</a>
                        </li>
                        <li>
                          <a href="#">Request information</a>
                        </li>
                        <li>
                          <a href="#">Request information</a>
                        </li>
                        <li>
                          <a href="#">Request information</a>
                        </li>
                        <li>
                          <a href="#">Request information</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 p-0">
              <div className="right-wrap">
                <div className="box">
                  <div>
                    <h5>Receive our updates</h5>
                    <p>
                      By subscribing, I agree to the{" "}
                      <a href="#">Terms and Conditions</a>
                    </p>
                    <div className="inputed">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                      />
                      <button className="btn btn-primary" type="button">
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <div className="follow">
                    <h4>follow on</h4>
                    <span></span>
                    <ul>
                      <li>
                        <img className="img1" src={LinkedIn} alt="" />
                      </li>
                      <li>
                        <img className="img2" src={Instagram} alt="" />
                      </li>
                      <li>
                        <img className="img3" src={Facebook} alt="" />
                      </li>
                      <li>
                        <img className="img4" src={YouTube} alt="" />
                      </li>
                      <li>
                        <img className="img5" src={Twitter} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h4>© 2025 Copyright © 2025 Qatar all rights reserved.</h4>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookies Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
