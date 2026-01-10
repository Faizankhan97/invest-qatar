import React from "react";
import "./globalGrowth.scss";
import AirTrafficControl from "../../assets/airTrafficControl.png";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
import Icon4 from "../../assets/icon4.png";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";

const GlobalGrowth = () => {
  return (
    <div className="globalGrowth">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-0">
            <div className="wrap">
              <h6>
                <img src={AirTrafficControl} alt="" /> Why Qatar
              </h6>
              <h2>The Gateway to Regional and Global Growth</h2>
              <ul>
                <li>
                  <img src={Icon1} alt="" /> Invest with Condidence
                </li>
                <li>
                  <img src={Icon2} alt="" /> Strategic Location and Connectivity
                </li>
                <li>
                  <img src={Icon3} alt="" /> Lifestyle & Environment
                </li>
                <li>
                  <img src={Icon4} alt="" /> Business Friendly Environment
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="box-wrap">
              <div className="box1">
                <div>
                  <h3>AA</h3>
                <p>Credit rating from S&P and Fitch, Aa2 from Moody’s</p>
                </div>
                <img src={Image1} alt="" />
              </div>
              <div className="box4">
                <img src={Image2} alt="" />
                <div>
                  <h3>6%</h3>
                <p>Average annual GDP growth over the past 15 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalGrowth;
