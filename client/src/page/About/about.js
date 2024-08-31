import React from "react";
import Banner from "../../components/banner/banner";
import Intro from "../../components/Introduction/intro";
import Aims from "../../components/AimsObjective/aims";
import Academics from "../../components/Academics/academics";
import Footer from "../../components/Footer/footer";
import Rules from "../../components/Rules/rules";
import Suggestion from "../../components/Suggestion/suggestion";
import "./about.css";

const about = () => {
  return (
    <div>
      <Intro />
      <Aims />
      <Rules/>
      <Academics />
      <Suggestion/>
      <Footer />
    </div>
  );
};

export default about;
