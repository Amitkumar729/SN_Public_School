import React from "react";
import "./brochure.css";
import { FaCloudDownloadAlt } from "react-icons/fa";

const brochure = () => {
    const handleDownload = () => {
        // Create a link element
        const link = document.createElement("a");
        
        // Set the href to the path of your PDF file
        link.href = "/assets/brochure.pdf";
        
        // Set the download attribute with the desired file name
        link.download = "brochure.pdf";
        
        // Append the link to the body
        document.body.appendChild(link);
        
        // Programmatically click the link to trigger the download
        link.click();
        
        // Remove the link from the body
        document.body.removeChild(link);
      };
  return (
    <div className="brochure-container">
      <div className="brochure-header">
        <h3>DOWNLOAD OUR BROCHURE</h3>
      </div>
      <div className="brochure-wrapper">
        <div className="brochure-button">
          <button onClick={handleDownload} > Brochure <FaCloudDownloadAlt  size={20} /> </button>
        
        </div>
      </div>
    </div>
  );
};

export default brochure;
