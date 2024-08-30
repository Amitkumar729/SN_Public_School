import React, { useEffect, useRef, useState } from "react";
import "./banner.css";
import { FaCircleLeft } from "react-icons/fa6";
import { FaCircleRight } from "react-icons/fa6";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/assets/banner1.jpg",
    "/assets/banner2.jfif ",
    "/assets/banner3.jfif",
    "/assets/banner4.jpg",
  ];

  const totalSlides = slides.length;
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  // Set up autoplay
  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000); // Change slide every 3 seconds

    return () => {
      clearInterval(slideInterval.current); // Clean up interval on component unmount
    };
  }, []);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${slide})` }}
          >
            {/* You can add content here */}
          </div>
        ))}
      </div>
      <div className="banner-prev-button" onClick={prevSlide}>
        <FaCircleLeft size={30} />
      </div>
      <div className="banner-next-button" onClick={nextSlide}>
        <FaCircleRight size={30}  />
      </div>
    </div>
  );
};

export default Banner;
