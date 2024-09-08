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
            Our school offers top-tier facilities, including a modern library, well-equipped science and computer labs, a spacious auditorium, and diverse sports amenities. Students enjoy a safe playground, creative art and music rooms, and a hygienic cafeteria, all designed to support academic, physical, and creative growth in a conducive environment.
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
              A large, safe playground offers students space for enjoyable outdoor activities and recreational games.
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
              Students explore creativity through engaging music and dance programs, enhancing cultural expression.
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
              Creative arts and crafts activities foster imagination, hands-on learning, and artistic development.
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
              Our safe transportation ensures timely, secure travel for students, prioritizing their well-being.
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
              <div className="facility-top">Healthy Food</div>
              <div className="facility-bottom">
              Nutritious daily meals enhance students' physical health and boost their overall academic performance.
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
              Educational tours offer hands-on learning experiences, broadening students' knowledge beyond the classroom.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
