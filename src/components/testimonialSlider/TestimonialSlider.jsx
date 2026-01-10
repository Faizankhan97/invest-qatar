import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './testimonialSlider.scss'
import ListStar from '../../assets/listStar.png'
import Image1 from '../../assets/image14.png'
import Qoute from '../../assets/qoute.png'
import Image2 from '../../assets/image15.png'
import Image3 from '../../assets/image16.png'
import RightArrow from '../../assets/whiteRightArrow.png'

const testimonials = [
  {
    label: "Voices of Success",
    quote:
      "Expanding to Qatar in 2016 was the right choice great results, strong support, and an easy transition for my family.",
    brand: "talabat",
    name: "Mr. Francisco Miguel de Sousa",
    role: "Managing Director",
    image: Image2,
    theme: "teal",
  },
  {
    label: "Voices of Success",
    quote:
      "Expanding to Qatar in 2016 was the right choice great results, strong support, and an easy transition for my family.",
    brand: "talabat",
    name: "Mr. Francisco Miguel de Sousa",
    role: "Managing Director",
    image: Image2,
    theme: "orange",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="testimonial-wrapper">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        loop={true}
        navigation={{ nextEl: ".next-btn" }}
        slidesPerView={1}
        className="testimonial-swiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <div className="left">
                <h6 className="label"> <img src={ListStar} alt="" /> {item.label}</h6>
                <h2 className="quote">“{item.quote}”</h2>
                <img className='img1' src={Image1} alt="" />
                <img className='img2' src={Qoute} alt="" />
              </div>
              <div className={`right ${item.theme}`}>
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="controls">
          <img src={Image3} className='person' alt="" />
          <button className="next-btn">NEXT <img src={RightArrow} alt="" /></button>
        </div>
      </Swiper>
    </div>
  )
}

export default TestimonialSlider