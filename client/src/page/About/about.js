import React, { Suspense, lazy } from "react";
import Loader from "../../components/Loader/loader";

const Intro = lazy(() => import("../../components/Introduction/intro"));
const Aims = lazy(() => import("../../components/AimsObjective/aims"));
const Academics = lazy(() => import("../../components/Academics/academics"));
const Footer = lazy(() => import("../../components/Footer/footer"));
const Rules = lazy(() => import("../../components/Rules/rules"));
const Suggestion = lazy(() => import("../../components/Suggestion/suggestion"));
const Brochure = lazy(() => import("../../components/Brochure/brochure"));
// const Banner = lazy(() => import("../../components/banner/banner"));
const About = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
      {/* <Banner/> */}
        <Intro />
        <Aims />
        <Rules />
        <Academics />
        <Suggestion />
        <Brochure />
        <Footer />
      </Suspense>
    </div>
  );
};

export default About;
