import React from "react";
import "./contactUs.css";

const contactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-left">
          <img src="/assets/appointment.jpg" alt="Contact Banner" />
        </div>
        <div className="contact-right">
          <div className="contact-header">
            <h4>Make An Appointment</h4>
          </div>
          <div className="contact-form">
            <form className="form-container">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="guardianName">Guardian Name</label>
                  <input
                    type="text"
                    id="guardianName"
                    name="guardianName"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guardianEmail">Guardian Email</label>
                  <input
                    type="email"
                    id="guardianEmail"
                    name="guardianEmail"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="guardianPhone">Guardian No.</label>
                  <input
                    type="tel"
                    id="guardianPhone"
                    name="guardianPhone"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="childName">Child Name</label>
                  <input type="text" id="childName" name="childName" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="childAge">Child Age</label>
                  <input
                    type="number"
                    id="childAge"
                    name="childAge"
                    min="4"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="childClass">Class</label>
                  <input
                    type="text"
                    id="childClass"
                    name="childClass"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactUs;
