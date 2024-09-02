import React from "react";
import "./gallery.css";
import Footer from "../../components/Footer/footer";
const gallery = () => {
  const galleryPhotos = [
    "/assets/gallery1.jfif",
    "/assets/gallery2.jfif",
    "/assets/gallery1.jfif",
    "/assets/gallery2.jfif",
    "/assets/gallery4.jfif",
    "/assets/gallery3.webp",
    "/assets/gallery4.jfif",
    "/assets/gallery5.jfif",
    "/assets/gallery2.jfif",
    "/assets/gallery6.webp",
    // "/assets/gallery7.jfif",
  ];
  return (
    <div className="gallery-container">
    <div className="gallery-sub-container">
      <div className="gallery-header">
        <h3> ACTIVITY PHOTOS </h3>
      </div>
      <div className="gallery-wrapper">
        {galleryPhotos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img
              src={photo}
              alt={`Gallery ${index + 1}`}
              className="gallery-img"
            />
          </div>
        ))}
      </div>
      </div>
    <div className="gallery-sub-container">
      <div className="gallery-header">
        <h3> BIRTHDAY PHOTOS </h3>
      </div>
      <div className="gallery-wrapper">
        {galleryPhotos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img
              src={photo}
              alt={`Gallery ${index + 1}`}
              className="gallery-img"
            />
          </div>
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default gallery;
