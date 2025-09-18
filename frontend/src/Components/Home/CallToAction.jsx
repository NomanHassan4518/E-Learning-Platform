import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="relative bg-[#e03b11] text-white py-20 px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Start Your Learning Journey Today
        </h2>
        <p className="text-sm mb-8 text-gray-100">
          Join thousands of learners gaining new skills, boosting careers, and
          achieving success with our platform.
        </p>
        <div className="space-x-5">
          <Link
            to="/register"
            className="px-6 py-3 bg-white text-[#e03b11] font-semibold rounded-lg hover:bg-black hover:text-white transition duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/courses"
            className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-[#e03b11] transition duration-300"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
