import React from "react";
import CourseCard from "../CourseCard";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = JSON.parse(localStorage.getItem("courses"))

  return (
    <section className="py-10 px-10 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">
          Popular <span className="text-[#e03b11]">Courses</span>
        </h2>
        <p className="text-gray-600 text-sm mt-3">
          Boost your career with in-demand skills and structured learning paths.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.slice(0,3).map((course) => (
         <CourseCard course={course}/>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/courses" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-[#e03b11] transition duration-300">
          View All Courses
        </Link>
      </div>
    </section>
  );
};

export default Courses;
