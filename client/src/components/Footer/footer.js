import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
       
          <div className="footer-header">
            <div className="footer-logo">
              <img src="/assets/navLogo.png" />
            </div>
            <div className="footer-heading">
              <h4> S.N.PUBLIC SCHOOL</h4>
            </div>
          </div>
          <div className="sub-wrapper">
          <div className="first-container">
            <div className="first-header">
              <h3>Gen In Touch</h3>
            </div>
            <div className="address">
              <div className="address-logo">
                <img
                  src="/assets/location-pin.png"
                  style={{ height: "30px" }}
                />
              </div>
              <div className="address-text">
                <p>
                  907, NS-1, Sector 3, vasundhara <br /> Ghaziabad, Uttar
                  Pradesh 201010
                </p>
              </div>
            </div>
            <div className="phone-number">
              <div className="phone-logo">
                <img src="/assets/phone-call.png" style={{ height: "25px" }} />
              </div>
              <div className="phone">
                <h6>0120-4135664</h6>
              </div>
            </div>
            <div className="phone-number">
              <div className="phone-logo">
                <img src="/assets/phone-call.png" style={{ height: "25px" }} />
              </div>
              <div className="phone">
                <h6>0120-3671191</h6>
              </div>
            </div>
            <div className="phone-number">
              <div className="phone-logo">
                <img src="/assets/phone-call.png" style={{ height: "25px" }} />
              </div>
              <div className="phone">
                <h6>9810158520</h6>
              </div>
            </div>
            <div className="email">
              <div className="email-logo">
                <img src="/assets/gmail.png" style={{ height: "25px" }} />
              </div>
              <div className="email-id">
                <h6>snps.vasundhara@gmail.com</h6>
              </div>
            </div>
          </div>
          <div className="second-container">
            <div className="second-heading"><h4>Quick Links</h4></div>
            <div className="link-items">
              <div className="item">
                <div className="item-logo">
                  <img
                    src="/assets/right-arrow.png"
                    style={{ height: "20px" }}
                  />
                </div>
                <div className="item-text">Home</div>
              </div>
              <div className="item">
                <div className="item-logo">
                  <img
                    src="/assets/right-arrow.png"
                    style={{ height: "20px" }}
                  />
                </div>
                <div className="item-text">About</div>
              </div>
              <div className="item">
                <div className="item-logo">
                  <img
                    src="/assets/right-arrow.png"
                    style={{ height: "20px" }}
                  />
                </div>
                <div className="item-text">Enquiry</div>
              </div>
              <div className="item">
                <div className="item-logo">
                  <img
                    src="/assets/right-arrow.png"
                    style={{ height: "20px" }}
                  />
                </div>
                <div className="item-text">Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
