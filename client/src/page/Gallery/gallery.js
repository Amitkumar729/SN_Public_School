import React, { useState, useEffect } from "react";
import { storage, ref, listAll, getDownloadURL } from "../../firebase";

import "./gallery.css";

const Gallery = () => {
//   const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [activityPhotos, setActivityPhotos] = useState([]);
  const [birthdayPhotos, setBirthdayPhotos] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
    //   const imagesRef = ref(storage, "images"); 
      // Reference to 'images' folder in Firebase Storage
      const activityRef = ref(storage,"images/event"); 
      const birthdayRef = ref(storage,"images/birthday");

    //   const result = await listAll(imagesRef); // Use listAll to get all items in 'images' folder

    //   const imageUrls = await Promise.all(
    //     result.items.map((itemRef) => getDownloadURL(itemRef)) // Get download URLs for each image
    //   );

    //   setGalleryPhotos(imageUrls); // Set the image URLs to state

         // Fetch images for activity photos
         const activityResult = await listAll(activityRef);
         const activityUrls = await Promise.all(
           activityResult.items.map((itemRef) => getDownloadURL(itemRef))
         );
         setActivityPhotos(activityUrls);
   
         // Fetch images for birthday photos
         const birthdayResult = await listAll(birthdayRef);
         const birthdayUrls = await Promise.all(
           birthdayResult.items.map((itemRef) => getDownloadURL(itemRef))
         );
         setBirthdayPhotos(birthdayUrls);
       
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-sub-container">
        <div className="gallery-header">
          <h3>ACTIVITY PHOTOS</h3>
        </div>
        <div className="gallery-wrapper">
          {activityPhotos.map((photo, index) => (
            <div key={index} className={`gallery-item direction-${index % 4}`}>
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
          <h3>BiRTHDAY PHOTOS</h3>
        </div>
        <div className="gallery-wrapper">
          {birthdayPhotos.map((photo, index) => (
            <div key={index} className={`gallery-item direction-${index % 4}`}>
              <img
                src={photo}
                alt={`Gallery ${index + 1}`}
                className="gallery-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
