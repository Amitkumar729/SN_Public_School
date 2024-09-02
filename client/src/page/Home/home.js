import React, { Suspense, lazy, useEffect, useState } from "react";
import Loader from "../../components/Loader/loader";
import FormModal from "../../components/FromModal/formModal";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  return (
    <div>
      <Suspense fallback={<Loader />}>
      <Banner />
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
