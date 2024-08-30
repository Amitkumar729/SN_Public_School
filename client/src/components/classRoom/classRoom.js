import React from "react";
import "./classRoom.css"; // Ensure you have a CSS file for custom styles
import { GiBurningRoundShot } from "react-icons/gi";
import { FaMusic } from "react-icons/fa";

const classRoom = () => {
  return (
    <div className="facility-container">
      <div className="facility-wrapper">
        <div className="facility-heading">
          <h2 className="facility-header">School Classes</h2>
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
              <img src="/assets/drawing.png"  style={{height: "55px"}} />
            </div>
            <div className="facility-right">
              <div className="facility-top">Drawing Class</div>
              <div className="facility-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                dicta!
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
               <img src="/assets/conversation.png" style={{height: "50px"}}  />
            </div>
            <div className="facility-right">
              <div className="facility-top">Language & Speaking</div>
              <div className="facility-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                dicta!
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
            <img src="/assets/school.png" />
            </div>
            <div className="facility-right">
              <div className="facility-top">General Knowledge</div>
              <div className="facility-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                dicta!
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
            <img src="/assets/history.png"  style={{height: "53px"}} />
            </div>
            <div className="facility-right">
              <div className="facility-top">Religion & History</div>
              <div className="facility-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                dicta!
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
            <img src="/assets/chemistry.png"  style={{height: "53px"}} />
            </div>
            <div className="facility-right">
              <div className="facility-top">Science</div>
              <div className="facility-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                dicta!
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
            <img src="/assets/mathematician.png"  style={{height: "53px"}} />
            </div>
            <div className="facility-right">
              <div className="facility-top">Mathematics</div>
              <div className="facility-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                dicta!
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
            <img src="/assets/paint-palette.png"  style={{height: "53px"}} />
            </div>
            <div className="facility-right">
              <div className="facility-top">Art & Drawing</div>
              <div className="facility-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                dicta!
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
            <img src="/assets/dancing.png"  style={{height: "55px"}} />
            </div>
            <div className="facility-right">
              <div className="facility-top">Dance</div>
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

export default classRoom;
