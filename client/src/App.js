import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/loader";
const Navbar = lazy(() => import("./components/Navbar/navbar"));
const Home = lazy(() => import("./page/Home/home"));
const AboutPage = lazy(() => import("./page/about/about"));
const ContactPage = lazy(() => import("./page/Contact/contact"));
const GalleryPage = lazy(() => import("./page/Gallery/gallery"));
const Admin = lazy(() => import("./page/Admin/admin"));


function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/contact-us" element={<ContactPage />}></Route>
            <Route path="/gallery" element={<GalleryPage />}></Route>
            <Route path="/gallery-admin-control" element={<Admin/>}></Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
