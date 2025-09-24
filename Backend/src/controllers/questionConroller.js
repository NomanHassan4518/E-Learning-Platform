import {Question} from "../models/question.js";  

export const getQuizQuestions = async (req, res) => {
  try {
    const { course_id, quiz_id } = req.params;
    
    if (!course_id || !quiz_id) {
      return res.status(400).json({
        success: false,
        message: "courseId and quizId are required",
      });
    }

    const questions = await Question.find({
      course_id,
      quiz_id,
    });

    if (!questions || questions.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No questions found for this quiz",
      });
    }

    return res.status(200).json({
      success: true,
      count: questions.length,
      questions,
    });
  } catch (error) {
    console.error("Error fetching questions:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching questions",
    });
  }
};
