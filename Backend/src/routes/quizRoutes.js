import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getQuizzes } from "../controllers/quizController.js";

const router = Router();

router.get("/:courseId", protect, getQuizzes);

export default router;
