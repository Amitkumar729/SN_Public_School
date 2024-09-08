import React from "react";
import "./banner.css";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banner = () => {
  const BannerPhoto = [
    "/assets/banner3.jpg",
    "/assets/s1.jpg",
    "/assets/s2.jpg",
    "/assets/s3.jpg",
    "/assets/s4.jpg",
    "/assets/s5.jpg",
    "/assets/s6.jpg",
  ];

  const settings = {
    className: "center",
    centerPadding: "60px",
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="banner-container">
      <div className="banner-wrapper">
        <SlickSlider {...settings}>
          {BannerPhoto.map((photo, index) => (
            <div key={index} className="banner-photo-container">
              <img src={photo} alt={`Gallery ${index + 1}`} />{" "}
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};

export default banner;
