import mongoose, { Schema } from "mongoose";

const quizSchema = new Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "courses",
    required: true,
  },
  quizNo: { type: Number, required: true },
  title: { type: String, required: true },
});

export const Quiz = mongoose.model("quizzes", quizSchema);
