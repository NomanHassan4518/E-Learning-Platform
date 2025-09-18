import React from 'react'
import HeroSection from '../Components/HeroSection'
import { courses } from '../data/courseContent'
import CourseCard from '../Components/CourseCard'

const Courses = () => {
  return (
    <div>
      <HeroSection/>
      

      <section id='courses-list' className='p-10 bg-gray-50 mt-10'>
        <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">
          Popular <span className="text-[#e03b11]">Courses</span>
        </h2>
        <p className="text-gray-600 text-sm mt-3">
          Boost your career with in-demand skills and structured learning paths.
        </p>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {
            courses.map((course)=>(
                <CourseCard course={course}/>
            ))
        }
       </div>
      </section>
    </div>
  )
}

export default Courses
