import { Course } from "../models/course.js";

export const getCourses = async (req,res)=>{
   try {
     const courses = await Course.find()
    res.status(200).json(courses)
   } catch (error) {
    res.status(500).json(error.message)
   }
}