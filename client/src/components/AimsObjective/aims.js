import React from "react";
import "./aims.css";

const aims = () => {
  return (
    <div className="aims-container">
      <div className="aims-header">
        <h3>AIMS & OBJECTIVES</h3>
      </div>
      <div className="aims-wrapper">
        <div className="aims-photo">
          <img src="/assets/call-to-action.jpg" />
        </div>
        <div className="aims-text">
          <p>
            The aim of the School is to help children to grow into true citizens
            through the development of the following:
          </p>
          <p>
            <b>1. </b>
            Integrated personality through intellectual, moral and physical
            development.
          </p>
          <p>
            <b>2. </b>
            Self confidence and leadership skills through participation and
            involvement in co-curricular activities.
          </p>
          <p>
            <b>3. </b>
            Foundation of discipline and atmosphere of love. Trust and care
            inspires students to be self disciplined, sensitive and responsible
            in life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default aims;
