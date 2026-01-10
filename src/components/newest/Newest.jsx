import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Calendar from "../../assets/calendar.png";
import Image from "../../assets/image9.png";
import Calender from "../../assets/image10.png";

import "swiper/css";
import "swiper/css/navigation";
import "./newest.scss";

export default function Newest() {
  return (
    <section className="latest-events">
        <div className="container">
            <div className="row">
                <div className="events-left">
                    <h6><img src={Calendar} alt="" /> Latest Events</h6>
                    <h2>Catch up on the newest events in Invest Qatar</h2>
                    <div className="event-meta">
                    <div>
                        <p className="label">DATE</p>
                        <p>06 - April - 2025</p>
                    </div>
                    <div>
                        <p className="label">TIME</p>
                        <p>10:00 AM - 12:00 PM</p>
                    </div>
                    </div>
                    <h3>Qatar Pavilion at Expo 2025 Osaka</h3>

                    <p className="description">
                    As part of its ongoing efforts to promote economic collaboration and cultural exchange, the State of Qatar is participating in Expo 2025 Osaka under the national theme “From the Shoreline, We Progress.” The Qatar Pavilion reflects the country’s journey of transformation—celebrating its rich maritime heritage, sustainable development goals, and forward-looking economic vision.
                    </p>
                </div>

                <div className="events-right">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        loop
                        className="event-slider"
                        >
                        <SwiperSlide>
                        <div className="text-center">
                            <img src={Image} alt="Event" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="text-center">
                            <img src={Image} alt="Event" />
                        </div>
                        </SwiperSlide>
                    </Swiper>
                        <div className="slide-card">
                            <div className="venue">
                                <div>
                                    <span className="venuse">VENUE</span>
                                    <p>Education City, near Al Shaqab</p>
                                </div>
                                <button className="calendar-btn">
                                    <span className="spanImage"><img src={Calender} alt="" /></span> <span className="text">Add to Calender</span>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
      </div>
    </section>
  );
}
