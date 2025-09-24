import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import courseRoutes from "./src/routes/courseRoutes.js";
import quizRoutes from "./src/routes/quizRoutes.js";
import questionRoutes from "./src/routes/questionRoutes.js"
import resultRoutes from "./src/routes/resultRoutes.js"

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true, 
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api", questionRoutes);
app.use("/api/results", resultRoutes);


const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
