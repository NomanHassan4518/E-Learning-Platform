import express from "express";
import { getQuizQuestions } from "../controllers/questionConroller.js";
import { protect } from "../middleware/authMiddleware.js"; // middleware for auth

const router = express.Router();

router.get(
  "/courses/:course_id/quizzes/:quiz_id/questions",
  protect,           
  getQuizQuestions
);

export default router;
