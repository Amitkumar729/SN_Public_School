import React from "react";
import "./birthday.css";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const birthday = () => {
  const galleryPhoto = [
    "/assets/gallery1.jfif",
    "/assets/gallery2.jfif",
    "/assets/gallery3.webp",
    "/assets/gallery4.jfif",
    "/assets/gallery5.jfif",
    "/assets/gallery6.webp",
    // "/assets/gallery7.jfif",
  ];

  const settings = {
    className: "center",
    centerPadding: "60px",
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className="birthday-container">
      <div className="birthday-header">
        <h2>Student Birthdays</h2>
      </div>
      <div className="birthday-wrapper">
        <SlickSlider {...settings}>
          {galleryPhoto.map((photo, index) => (
            <div key={index} className="birthday-photo-container">
              {" "}
              {/* Added unique key and corrected class name */}
              <img src={photo} alt={`Gallery ${index + 1}`} />{" "}
              {/* Added alt attribute */}
            </div>
          ))}
        </SlickSlider>
      </div>
      <button className="more-photos-button">More Photos</button>
    </div>
  );
};

export default birthday;
