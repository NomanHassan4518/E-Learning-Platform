import React from "react";
import CourseCard from "../CourseCard";

const Courses = () => {
  const courses = [
    {
      id: 1,
      image: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      title: "Web Development",
      description:
        "Learn modern web development with HTML, CSS, JavaScript, and React to build responsive websites and apps.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWl8ZW58MHx8MHx8fDA%3D",
      title: "Artificial Intelligence",
      description:
        "Understand the basics of AI, machine learning, and neural networks with practical projects and real-world examples.",
    },
    {
      id: 3,
      image: "https://plus.unsplash.com/premium_photo-1664297950425-99a968926a74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
      title: "Data Science",
      description:
        "Master data analysis, visualization, and machine learning using Python, Pandas, and modern tools for insights.",
    },
  ];

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
        {courses.map((course) => (
         <CourseCard course={course}/>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-[#e03b11] transition duration-300">
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default Courses;
