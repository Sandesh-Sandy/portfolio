import React from "react";
import Carousel from "react-bootstrap/Carousel";
//import Slide1 from "../../assets/img/carousal/slide1.webp";
//import Slide3 from "../../assets/img/carousal/slide3.webp";
import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbXB1dGVyJTIwZGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'} 
          alt="First slide" />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;
