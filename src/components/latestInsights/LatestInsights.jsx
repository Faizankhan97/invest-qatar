import React from "react";
import Slider from "react-slick";
import NewsPaper from "../../assets/newspaper.png";
import Image from "../../assets/image8.png";
import "./latestInsights.scss";

const LatestInsights = () => {
  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

  return (
    <div className="latestInsights">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h6>
              <img src={NewsPaper} alt="" /> New and Article
            </h6>
            <h2>Stay updated with the latest insights and stories</h2>
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="box">
                <img src={Image} alt="" />
                <h5>
                  Digital transformation in Qatar has accelerated due to
                  COVID-19, with banks investing more in fintech solutions
                </h5>
                <h6>13 . MAY . 2025</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquet risus quisque
                  pharetra turpis et lectus nibh ac. Sit velit cursus sed
                  aliquet ullamcorper. Sed etiam amet urna vel rutrum urna arcu
                  enim non. Elit.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Image} alt="" />
                <h5>
                  Digital transformation in Qatar has accelerated due to
                  COVID-19, with banks investing more in fintech solutions
                </h5>
                <h6>13 . MAY . 2025</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquet risus quisque
                  pharetra turpis et lectus nibh ac. Sit velit cursus sed
                  aliquet ullamcorper. Sed etiam amet urna vel rutrum urna arcu
                  enim non. Elit.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div>
                              <div className="box">
                <img src={Image} alt="" />
                <h5>
                  Digital transformation in Qatar has accelerated due to
                  COVID-19, with banks investing more in fintech solutions
                </h5>
                <h6>13 . MAY . 2025</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquet risus quisque
                  pharetra turpis et lectus nibh ac. Sit velit cursus sed
                  aliquet ullamcorper. Sed etiam amet urna vel rutrum urna arcu
                  enim non. Elit.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div>
                              <div className="box">
                <img src={Image} alt="" />
                <h5>
                  Digital transformation in Qatar has accelerated due to
                  COVID-19, with banks investing more in fintech solutions
                </h5>
                <h6>13 . MAY . 2025</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquet risus quisque
                  pharetra turpis et lectus nibh ac. Sit velit cursus sed
                  aliquet ullamcorper. Sed etiam amet urna vel rutrum urna arcu
                  enim non. Elit.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </Slider>
        </div>
        <a href="#" className="explore">Explore more Now?</a>
      </div>
    </div>
  );
};

export default LatestInsights;
