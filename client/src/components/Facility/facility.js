import React from "react";
import "./facility.css"; // Ensure you have a CSS file for custom styles
// import { GiBurningRoundShot } from "react-icons/gi";
// import { FaMusic } from "react-icons/fa";

const Facility = () => {
  return (
    <div className="facility-container">
      <div className="facility-wrapper">
        <div className="facility-heading">
          <h2 className="facility-header">School Facility</h2>
          <div className="facility-sub-header">
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              consectetur aliquam laboriosam fugit hic voluptatibus eos
              similique ex ratione maxime, quis eum, quae aperiam dicta voluptas
              neque natus sit consequatur.
            </h5>
          </div>
        </div>
        <div className="facility-items">
          <div className="facility-item">
            <div className="facility-left">
              <img
                src="/assets/playground.png"
                alt="photo..."
                style={{ height: "55px" }}
              />
            </div>
            <div className="facility-right">
              <div className="facility-top">Play Ground</div>
              <div className="facility-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                dicta!
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
              <img
                src="/assets/music.png"
                alt="photo..."
                style={{ height: "50px" }}
              />
            </div>
            <div className="facility-right">
              <div className="facility-top">Music & Dance</div>
              <div className="facility-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                dicta!
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
              <img src="/assets/crayons.png" alt="photo..." />
            </div>
            <div className="facility-right">
              <div className="facility-top">Arts & Crafts</div>
              <div className="facility-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                dicta!
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
              <img
                src="/assets/bus.png"
                style={{ height: "53px" }}
                alt="photo..."
              />
            </div>
            <div className="facility-right">
              <div className="facility-top">Safe Transportation</div>
              <div className="facility-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                dicta!
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
              <img
                src="/assets/diet.png"
                style={{ height: "53px" }}
                alt="photo..."
              />
            </div>
            <div className="facility-right">
              <div className="facility-top">Health Food</div>
              <div className="facility-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                dicta!
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
              <img
                src="/assets/tour-guide.png"
                style={{ height: "55px" }}
                alt="photo..."
              />
            </div>
            <div className="facility-right">
              <div className="facility-top">Educational Tour</div>
              <div className="facility-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                dicta!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
