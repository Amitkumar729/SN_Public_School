import React from "react";
import "./classRoom.css"; // Ensure you have a CSS file for custom styles
// import { GiBurningRoundShot } from "react-icons/gi";
// import { FaMusic } from "react-icons/fa";

const classRoom = () => {
  return (
    <div className="facility-container">
      <div className="facility-wrapper">
        <div className="facility-heading">
          <h2 className="facility-header">School Classes</h2>
          <div className="facility-sub-header">
            <h5>
              Our school offers a wide range of classes that foster creativity,
              critical thinking, and overall development. These include subjects
              such as drawing, language and speaking, general knowledge,
              religion history, science, mathematics, arts, and dance. Each
              class is designed to enhance students' skills and broaden their
              understanding of the world.
            </h5>
          </div>
        </div>
        <div className="facility-items">
          <div className="facility-item">
            <div className="facility-left">
              <img
                src="/assets/drawing.png"
                alt="photo......"
                style={{ height: "55px" }}
              />
            </div>
            <div className="facility-right">
              <div className="facility-top">Drawing Class</div>
              <div className="facility-bottom">
                Drawing classes encourage creativity, improving students'
                artistic abilities and visual expression.
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
              <img
                src="/assets/conversation.png"
                alt="photo..."
                style={{ height: "50px" }}
              />
            </div>
            <div className="facility-right">
              <div className="facility-top">Language & Speaking</div>
              <div className="facility-bottom">
                Language and speaking lessons enhance communication skills,
                fluency, and confidence in expression.
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
              <img src="/assets/school.png" alt="photo..." />
            </div>
            <div className="facility-right">
              <div className="facility-top">General Knowledge</div>
              <div className="facility-bottom">
                General knowledge builds students' awareness of current events,
                culture, and global affairs.
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
              <img
                src="/assets/history.png"
                alt="photo..."
                style={{ height: "53px" }}
              />
            </div>
            <div className="facility-right">
              <div className="facility-top">Religion & History</div>
              <div className="facility-bottom">
                Religion history teaches cultural understanding, moral values,
                and the origins of religious beliefs.
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
              <img
                src="/assets/chemistry.png"
                alt="photo..."
                style={{ height: "53px" }}
              />
            </div>
            <div className="facility-right">
              <div className="facility-top">Science</div>
              <div className="facility-bottom">
                Science classes promote critical thinking and understanding of
                the natural world through experimentation.
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
              <img
                src="/assets/mathematician.png"
                alt="photo..."
                style={{ height: "53px" }}
              />
            </div>
            <div className="facility-right">
              <div className="facility-top">Mathematics</div>
              <div className="facility-bottom">
                Mathematics enhances problem-solving, logical reasoning, and
                analytical skills in practical and abstract concepts.
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
              <img
                src="/assets/paint-palette.png"
                alt="photo..."
                style={{ height: "53px" }}
              />
            </div>
            <div className="facility-right">
              <div className="facility-top">Art & Drawing</div>
              <div className="facility-bottom">
                Mathematics enhances problem-solving, logical reasoning, and
                analytical skills in practical and abstract concepts.
              </div>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-left">
              <img
                src="/assets/dancing.png"
                alt="photo..."
                style={{ height: "55px" }}
              />
            </div>
            <div className="facility-right">
              <div className="facility-top">Dance</div>
              <div className="facility-bottom">
                Dance classes boost physical fitness, coordination, and rhythm
                while encouraging cultural expression.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default classRoom;
