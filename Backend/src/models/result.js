import mongoose from "mongoose";
const { Schema } = mongoose;

const resultSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    course_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "courses",
    },
    quiz_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "quizzes",
    },
    quizTitle: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Result = mongoose.model("Result", resultSchema);
