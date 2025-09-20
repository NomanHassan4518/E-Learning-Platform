import React from 'react'
import { useNavigate } from 'react-router-dom'

const CourseCard = ({course}) => {
  const auth = JSON.parse(localStorage.getItem("user"))
  const naviagte = useNavigate()

  const handleQuiz = (course)=>{
    if (auth) {
      naviagte(`${course._id}`,{state:course})
    } else{
      naviagte("/register")
    }
  }
  return (
    <div
            key={course._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-500"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-700 text-xs mb-4 truncate">{course.description.slice(0,150)}</p>
              <button onClick={()=>handleQuiz(course)} className="px-4 py-2 text-sm bg-[#e03b11] text-white rounded-lg hover:bg-black transition duration-300">
                {auth?"Start Quiz":"Enroll Now"}
              </button>
            </div>
          </div>
  )
}

export default CourseCard
