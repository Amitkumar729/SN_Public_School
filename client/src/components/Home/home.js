import React, { Suspense, lazy } from "react";

const Banner = lazy(() => import("../banner/banner"));
const Facility = lazy(() => import("../Facility/facility"));
const AboutFaculty = lazy(() => import("../AboutFaculty/faculty"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>...Loading...</div>}>
        <Banner />
        <Facility />
        <AboutFaculty />
      </Suspense>
    </div>
  );
};

export default Home;
