import React from "react";
import {  useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HeroSection = () => {
  const location = useLocation();
  const path = location.pathname;

  const homePageContent = {
    start: "We believe in",
    heading: "Passion for Learning",
    desc: "and Edulogy is a great tool to learn.",
    link: "/courses",
    linkContent: "Browse Courses",
    img: "https://demo.themnific.com/edulogy/wp-content/uploads/2020/04/selective-focus-photo-of-man-using-laptop-1438081-1920x1000.jpg",
  };

  const coursesPageContent = {
    start: "Explore Our",
    heading: "Top Quality Courses",
    desc: "Browse through a wide range of courses designed to help you grow your skills and achieve success.",
    link: "#courses-list",
    linkContent: "View Courses",
    img: "https://themeelite.com/demos/e-learn/image+text-rotator/images/header-image/image02.jpg",
  };
  return (
    <div
      className="relative w-full h-[35rem] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${
          path === "/courses" ? coursesPageContent.img : homePageContent.img
        })`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative text-center text-white font-serif -bottom-12">
        <p className="text-sm font-semibold mb-2">
          {path === "/courses"
            ? coursesPageContent.start
            : homePageContent.start}
        </p>
        <h1 className="text-6xl font-bold mb-2">
          {path === "/courses"
            ? coursesPageContent.heading
            : homePageContent.heading}
        </h1>
        <p className=" mb-6">
          {path === "/courses" ? coursesPageContent.desc : homePageContent.desc}
        </p>
        <HashLink
          smooth
          to={path === "/courses" ? "#courses-list" : "/courses"}
          className="bg-[#e03b11] hover:bg-[#c22f0d] text-white px-6 py-3 rounded-md font-semibold transition"
        >
          {path === "/courses"
            ? coursesPageContent.linkContent
            : homePageContent.linkContent}
        </HashLink>
      </div>
    </div>
  );
};

export default HeroSection;
