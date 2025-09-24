import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
      required: true,
    },
    quiz_id: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "quizzes",
      required: true,
    },
    question: {
      type: String,
      required: true,
      trim: true,
    },
    options: {
      type: [String], 
      validate: {
        validator: function (arr) {
          return arr.length >= 2; // at least 2 options required
        },
        message: "A question must have at least 2 options.",
      },
      required: true,
    },
    correct_answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Question = mongoose.model("questions", questionSchema);


