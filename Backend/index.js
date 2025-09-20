import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import courseRoutes from "./src/routes/courseRoutes.js";
import quizRoutes from "./src/routes/quizRoutes.js";
import { Quiz } from "./src/models/quiz.js";
import { courses } from "./src/data/courseContent.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // your React app
    credentials: true, // allow cookies/auth headers
  })
);

// const insertCourses = async ()=>{
//   Quiz.insertMany(courses)
//   console.log("courses");

// }
// insertCourses()

app.use("/api/auth", authRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/quiz", quizRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
