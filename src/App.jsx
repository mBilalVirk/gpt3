import React from "react";

// import {
//   Footer,
//   Blog,
//   Possibility,
//   Features,
//   WhatGPT3,
//   Header,
// } from "./containers";
// import { CTA, Brand, Navbar } from "./components";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import "./App.css";
import Brand from "./components/brand/Brand";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import Features from "./containers/feature/Features";
import Possibility from "./containers/possibility/Possibility";
import CTA from "./components/cta/CTA";
import Blog from "./containers/blog/Blog";
import Footer from "./containers/footer/Footer";
const App = () => (
  <div className="App">
    <div className="gradient__bg">
      {<Navbar />}
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    {/* <WhatGPT3 /> */}
    {/* <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer /> */}
  </div>
);

export default App;
