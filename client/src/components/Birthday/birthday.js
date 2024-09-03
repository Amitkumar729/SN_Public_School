import React, { useState, useEffect } from "react";
import { storage, ref, listAll, getDownloadURL } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./birthday.css";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../Loader/loader";

const Birthday = () => {
  const [birthdayPhotos, setBirthdayPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/gallery");
  };

  useEffect(() => {
    const fetchImages = async () => {
      const birthdayRef = ref(storage, "images/birthday");
      const birthdayResult = await listAll(birthdayRef);
      const birthdayUrls = await Promise.all(
        birthdayResult.items.map((itemRef) => getDownloadURL(itemRef))
      );
      setBirthdayPhotos(birthdayUrls);
      setLoading(false);
    };

    fetchImages();
  }, []);

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

      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="birthday-wrapper">
            <SlickSlider {...settings}>
              {birthdayPhotos.map((photo, index) => (
                <div key={index} className="birthday-photo-container">
                  {" "}
                  {/* Added unique key and corrected class name */}
                  <img src={photo} alt={`Gallery ${index + 1}`} />{" "}
                  {/* Added alt attribute */}
                </div>
              ))}
            </SlickSlider>
          </div>
          <button className="more-photos-button" onClick={handleNavigate}>
            More Photos
          </button>
        </>
      )}
    </div>
  );
};

export default Birthday;
