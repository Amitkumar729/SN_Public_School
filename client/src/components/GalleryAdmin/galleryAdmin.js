import React, { useState, useEffect, useRef } from "react";
import {
  storage,
  firestore,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  deleteDoc,
  listAll,
} from "../../firebase";
import "./galleryAdmin.css";
import Loader from "../Loader/loader";

const GalleryAdmin = () => {
  const [activityPhotos, setActivityPhotos] = useState([]);
  const [birthdayPhotos, setBirthdayPhotos] = useState([]);
  const [newImage, setNewImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [deletingStates, setDeletingStates] = useState({});
  const [imageType, setImageType] = useState("event");
  const [loading, setLoading] = useState(true);

  const fileInputRef = useRef(null);

  const fetchImages = async () => {
    const activityRef = ref(storage, "images/event");
    const birthdayRef = ref(storage, "images/birthday");

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
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageUpload = async () => {
    if (newImage) {
      try {
        setUploading(true);

        // Determine the folder to upload to based on the imageType
        const folder =
          imageType === "event" ? "images/event" : "images/birthday";
        const imageRef = ref(storage, `${folder}/${newImage.name}`);

        // Upload the image
        await uploadBytes(imageRef, newImage);
        const url = await getDownloadURL(imageRef);
        setUploading(false);

        // Refetch images to update the state
        await fetchImages();

        // Add image URL to Firestore
        await addDoc(collection(firestore, imageType), { url });

        // Update the state based on image type
        if (imageType === "event") {
          setActivityPhotos([...activityPhotos, url]);
        } else {
          setBirthdayPhotos([...birthdayPhotos, url]);
        }

        // Reset the file input
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }

        setNewImage(null);
      } catch (error) {
        console.error("Error uploading image: ", error);
      } finally {
        setUploading(false);
      }
    }
  };

  const handleImageDelete = async (url) => {
    try {
      // Set the specific image as deleting
      setDeletingStates((prev) => ({ ...prev, [url]: true }));

      // Determine the folder and collection based on the URL
      const folder = url.includes("event") ? "images/event" : "images/birthday";
      const imageRef = ref(storage, url);

      // Delete the image from Firebase Storage
      await deleteObject(imageRef);

      // Refetch images to update the state
      await fetchImages();

      // Remove the image URL from Firestore
      const collectionRef = collection(firestore, folder);
      const q = query(collectionRef, where("url", "==", url));
      const snapshot = await getDocs(q);
      snapshot.forEach(async (doc) => await deleteDoc(doc.ref));

      // Update the state based on image type
      if (folder === "images/event") {
        setActivityPhotos(activityPhotos.filter((photo) => photo !== url));
      } else {
        setBirthdayPhotos(birthdayPhotos.filter((photo) => photo !== url));
      }
    } catch (error) {
      console.error("Error deleting image: ", error);
    } finally {
      // Reset the specific image deleting state
      setDeletingStates((prev) => ({ ...prev, [url]: false }));
    }
  };

  return (
    <div className="gallery-admin-container">
      <h2>Gallery Admin Control</h2>
      <div className="upload-section">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setNewImage(e.target.files[0])}
          ref={fileInputRef}
        />
        <div className="upload-button-wrapper">
          <select
            onChange={(e) => setImageType(e.target.value)}
            value={imageType}
          >
            <option value="event">Event Activity</option>
            <option value="birthday">Birthday</option>
          </select>
          <button onClick={handleImageUpload} disabled={uploading || !newImage}>
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="admin-header1">
            <h5>ACTIVITY PHOTOS</h5>
          </div>
          <div className="gallery-preview">
            {activityPhotos.map((photo, index) => (
              <div key={index} className="gallery-item">
                <img src={photo} alt={`Activity ${index + 1}`} />
                <button onClick={() => handleImageDelete(photo)}>
                  {deletingStates[photo] ? "Deleting..." : "Delete Image"}
                </button>
              </div>
            ))}
          </div>

          <div className="admin-header1">
            <h5>BIRTHDAY PHOTOS</h5>
          </div>
          <div className="gallery-preview">
            {birthdayPhotos.map((photo, index) => (
              <div key={index} className="gallery-item">
                <img src={photo} alt={`Birthday ${index + 1}`} />
                <button onClick={() => handleImageDelete(photo)}>
                  {deletingStates[photo] ? "Deleting..." : "Delete Image"}
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GalleryAdmin;
