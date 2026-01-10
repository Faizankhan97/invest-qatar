import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./heroSlider.scss";

export default function HeroSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-containers">
      <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
        <div>
          <h1>Creating a wealth of opportunities</h1>
          <p>We partner closely with you to identify and advance your ambitions</p>
          <button>Explore More</button>
        </div>
        <div>
          <h1>Creating a wealth of opportunities</h1>
          <p>We partner closely with you to identify and advance your ambitions</p>
          <button>Explore More</button>
        </div>
        <div>
          <h1>Creating a wealth of opportunities</h1>
          <p>We partner closely with you to identify and advance your ambitions</p>
          <button>Explore More</button>
        </div>
      </Slider>
      <Slider
      className="list-slider"
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <h3>01</h3>
          <h5>Creating a wealth of opportunities</h5>
        </div>
        <div>
          <h3>02</h3>
          <h5>Creating a wealth of opportunities</h5>
        </div>
        <div>
          <h3>03</h3>
          <h5>Creating a wealth of opportunities</h5>
        </div>
      </Slider>
    </div>
  );
}
