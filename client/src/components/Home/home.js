import React, { Suspense, lazy } from "react";

const Banner = lazy(() => import("../banner/banner"));
const Facility = lazy(() => import("../Facility/facility"));
const AboutFaculty = lazy(() => import("../AboutFaculty/faculty"));
const Activity = lazy(() => import("../Activity/activity"));
const ClassRoom = lazy(() => import("../classRoom/classRoom"))
const Birthday = lazy(() => import("../Birthday/birthday"));
const Contact = lazy(() => import("../ContactUs/contactUs"));

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
      </Suspense>
    </div>
  );
};

export default Home;
