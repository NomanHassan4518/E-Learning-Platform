import { Result } from "../models/result.js";
import { Quiz } from "../models/quiz.js";

export const postResult = async (req, res) => {
  try {
    const { user_id, course_id, quiz_id, score, date } = req.body;    

    const quiz = await Quiz.findById(quiz_id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
 
    const existingResult = await Result.findOne({
      user_id,
      course_id,
      quiz_id,
    });

    if (existingResult) {
      existingResult.score = score;
      existingResult.date = date || Date.now();
      existingResult.quizTitle = quiz.title;
      await existingResult.save();

      return res.status(200).json({
        message: "Result updated successfully",
        result: existingResult,
      });
    }

    const newResult = new Result({
      user_id,
      course_id,
      quiz_id,
      quizTitle: quiz.title,
      score,
      date: date || Date.now(),
    });

    await newResult.save();

    res.status(201).json({
      message: "Result saved successfully",
      result: newResult,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error saving result",
      error: error.message,
    });
  }
};

export const getAllResultsByUser = async (req, res) => {
  try {
    const userId = req.user._id; // from auth middleware

    const results = await Result.find({ user_id: userId });

    const courseResults = {};
    results.forEach((result) => {
      const courseId = result.course_id.toString();

      if (!courseResults[courseId]) {
        courseResults[courseId] = {
          courseId,
          results: [],
          totalScore: 0,
        };
      }

      courseResults[courseId].results.push(result);
      courseResults[courseId].totalScore += result.score;
    });

    res.status(200).json(courseResults);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching user results",
      error: error.message,
    });
  }
};
