import React from "react";
import "./intro.css";

const intro = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="intro-container">
          <div className="intro-header">
            <h3>INTRODUCTION</h3>
          </div>
          <div className="intro-wrapper">
            <div className="intro-photo">
              <img src="/assets/school-image.jpg" />
            </div>
            <div className="intro-text">
              <p>
                S.N. Public School is a Co-educational English medium unaided
                School established in 1997 by “SHIV NARAIN MEMORIAL TRUST" in
                the memory and honor of LATE. SHRI SHIV NARAIN GUPTA, who was a
                Maths teacher in “SARDAR PATEL VIDHYALAY” Lodhi Road. He had a
                dream to educate children because he believed that the youth of
                the country are the architects of the nation. Therefore the
                school lays emphasis on teaching children to take responsibility
                to develop their character and prepare them for the future. If a
                child is taught well he/she will go beyond book learning and
                imbibe life skills as well, that will make him/her a responsible
                citizen which is the ultimate goal of education.
                <br/>
                <br/>
                The School is situated at Sector -3 Vasundhara; Ghaziabad built on Government allotted land with green surroundings and an impressive latest architectural design.  The School has all the latest facilities and uninterrupted power supply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default intro;
