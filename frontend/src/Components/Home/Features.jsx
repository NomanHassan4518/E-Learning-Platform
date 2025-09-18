import React from "react";
import { FaBookOpen, FaClipboardList, FaChartLine } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaBookOpen />,
      title: "Courses",
      description:
        "Access a wide range of structured courses designed by experts. Each course helps you learn step by step, making complex topics simple and easy to master.",
    },
    {
      icon: <FaClipboardList />,
      title: "Quizzes",
      description:
        "Test your understanding with interactive quizzes that provide instant feedback. Engaging multiple-choice questions make learning more fun while strengthening your knowledge retention effectively.",
    },
    {
      icon: <FaChartLine />,
      title: "Results Tracking",
      description:
        "Track your performance with detailed results and progress insights. See improvements over time, analyze mistakes, and stay motivated to achieve your learning goals consistently.",
    }
  ];

  return (
    <section className="py-16 px-20">
      <div>
        <h2 className="text-4xl mb-8 font-semibold">
          Key <span className="text-[#e03b11]">Features</span> for Learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border hover:border-[#e03b11] group transition duration-300"
            >
              <div className="flex items-center space-x-4 mb-3">
                <p className="w-14 h-14 border rounded-full text-3xl flex items-center justify-center bg-[#fdf2ef] text-[#e03b11] group-hover:bg-[#e03b11] group-hover:text-white transition duration-300">
                  {feature.icon}
                </p>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
