import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navbar = lazy(() => import("./components/Navbar/navbar"));
const Home = lazy(() => import("./page/Home/home"));
const AboutPage = lazy(() => import("./page/About/about"));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
