import React from "react";
import HeroSection from "../Components/HeroSection";
import Features from "../Components/Home/Features";
import Courses from "../Components/Home/Courses";
import CallToAction from "../Components/Home/CallToAction";

const Home = () => {
  return (
    <div className="flex flex-col">
     <HeroSection/>
     <Features/>
     <Courses/>
     <CallToAction/>
    </div>
  );
};

export default Home;
