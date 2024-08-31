import React, { Suspense, lazy } from "react";

const Banner = lazy(() => import("../../components/banner/banner"));
const Facility = lazy(() => import("../../components/Facility/facility"));
const AboutFaculty = lazy(() =>
  import("../../components/AboutFaculty/faculty")
);
const Activity = lazy(() => import("../../components/Activity/activity"));
const ClassRoom = lazy(() => import("../../components/classRoom/classRoom"));
const Birthday = lazy(() => import("../../components/Birthday/birthday"));
const Contact = lazy(() => import("../../components/ContactUs/contactUs"));
const Footer = lazy(() => import("../../components/Footer/footer"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>...Loading...</div>}>
        <Banner />
        <Facility />
        <AboutFaculty />
        <Activity />
        <ClassRoom />
        <Birthday />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
