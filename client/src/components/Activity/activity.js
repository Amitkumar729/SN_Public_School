import React, { useState, useEffect } from "react";
import { storage, ref, listAll, getDownloadURL } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./activity.css";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../Loader/loader";

const Activity = () => {
  const [activityPhotos, setActivityPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const hadleNavigate = () => {
    navigate("/gallery");
  };

  useEffect(() => {
    const fetchImages = async () => {
      const activityRef = ref(storage, "images/event");
      const activityResult = await listAll(activityRef);
      const activityUrls = await Promise.all(
        activityResult.items.map((itemRef) => getDownloadURL(itemRef))
      );
      setActivityPhotos(activityUrls);
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
    <div className="activity-container">
      <div className="activity-header">
        <h2>School Activities</h2>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="activity-wrapper">
            <SlickSlider {...settings}>
              {activityPhotos.map((photo, index) => (
                <div key={index} className="activity-photo-container">
                  {/* Added unique key and corrected class name */}
                  <img src={photo} alt={`Gallery ${index + 1}`} />{" "}
                  {/* Added alt attribute */}
                </div>
              ))}
            </SlickSlider>
          </div>
          <button className="more-photos-button" onClick={hadleNavigate}>
            More Photos
          </button>
        </>
      )}
    </div>
  );
};

export default Activity;
