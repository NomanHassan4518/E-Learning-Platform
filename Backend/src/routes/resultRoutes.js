import express from "express";
import { postResult, getAllResultsByUser } from "../controllers/resultController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, postResult);

router.get("/", protect, getAllResultsByUser);

export default router;
