// src/Pages/CourseQuizes.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../Context/LoadingContext";

const CourseQuizes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const { state } = useLocation();
  const { courseId } = useParams();
  const course = state;
  const { setLoading } = useLoading();
  const naviagte = useNavigate()

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        setLoading(true);
        const user = JSON.parse(localStorage.getItem("user"));                

        const res = await axios.get(`http://localhost:5000/api/quiz/${courseId}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });

        if (res.data && res.data.quizzes) {
          setQuizzes(res.data.quizzes);
        }
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, [courseId, setLoading]);

  if (!course) {
    return <h2 className="text-center text-red-500 mt-10">Course not found</h2>;
  }

  const handleNaviagte = (quiz)=>{
 naviagte(`/courses/${course._id}/${quiz._id}`)
  }

  return (
    <div>
      {/* ✅ Hero Section */}
      <div
        className="relative w-full h-[35rem] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${course.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative text-center text-white font-serif px-6">
          <p className="text-sm font-semibold mb-2">Welcome to</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{course.title}</h1>
          <p className="max-w-2xl mx-auto text-sm opacity-90">
            {course.description}
          </p>
        </div>
      </div>

      {/* ✅ Quizzes */}
      <div className="p-10 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">
            Course <span className="text-[#e03b11]">Quizzes</span>
          </h2>
          <p className="text-gray-600 text-sm mt-3">
            Challenge yourself and reinforce your learning with structured quizzes.
          </p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quizzes?.map((quiz) => (
           <li
  key={quiz?._id}
  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition transform duration-300 cursor-pointer"
>
  {/* Header */}
  <div className="bg-[#e03b11] text-white text-center py-4">
    <h1 className="font-semibold">{quiz?.title}</h1>
  </div>

  {/* Body */}
  <div className="p-4 flex justify-between items-center">
    <p className="text-sm text-gray-600">Quiz No: <span className="font-semibold">{quiz.quizNo}</span></p>
    <button onClick={()=>handleNaviagte(quiz)} className="px-3 py-1 text-xs font-medium bg-black text-white rounded-full shadow">
      Start
    </button>
  </div>
</li>

          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseQuizes;
