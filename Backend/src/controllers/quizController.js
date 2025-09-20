import { Quiz } from "../models/quiz.js";

export const getQuizzes = async (req, res) => {
  try {
    const { courseId } = req.params;

    if (!courseId) {
      return res.status(400).json({ success: false, message: "Course ID is required" });
    }

    const quizzes = await Quiz.find({ courseId }).sort({ quizNo: 1 });

    if (!quizzes || quizzes.length === 0) {
      return res.status(404).json({ success: false, message: "No quizzes found for this course" });
    }

    res.status(200).json({
      success: true,
      courseId,
      count: quizzes.length,
      quizzes,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
