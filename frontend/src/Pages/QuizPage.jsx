import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLoading } from "../Context/LoadingContext";
import { useParams, useNavigate } from "react-router-dom";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const { setLoading } = useLoading();
  const ids = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const user = JSON.parse(localStorage.getItem("user"));
        const res = await axios.get(
          `http://localhost:5000/api/courses/${ids.course_id}/quizzes/${ids.quiz_id}/questions`,
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );

        setQuestions(res.data.questions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quiz:", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [ids.course_id, ids.quiz_id, setLoading]);

  useEffect(() => {
    setAnswered(false);
  }, [currentQuestionIndex]);

  const handleOptionChange = (option) => {
    if (answered) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
    setAnswered(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct_answer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = async () => {
    const score = calculateScore();
    setShowResults(true);

    try {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem("user"));

      await axios.post(
        `http://localhost:5000/api/results`,
        {
          user_id: user.id,
          course_id: ids.course_id,
          quiz_id: ids.quiz_id,
          score,
        },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      setLoading(false);

      navigate(`/results/${user.id}`);
    } catch (error) {
      console.error("Error submitting result:", error);
      setLoading(false);
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const question = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-[#eda0a8] pt-10">
      {!showResults ? (
        <div>
          <div key={currentQuestionIndex} className="pb-12">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              <img
                src="https://templates.seekviral.com/qzain/quiz/Quiz7/assets/images/girl-glasses.jpg"
                alt="quiz background"
                className="absolute inset-0 w-full h-full object-cover "
              />
              <h1 className="relative bg-white max-w-2xl mx-auto mt-72 py-8 px-6 text-center text-xl font-semibold rounded-lg border-4 border-red-500 shadow-lg">
                {question.question}
              </h1>
            </div>
            <div
              className="bg-cover bg-center w-full h-full pb-10"
              style={{
                backgroundImage: `url("https://templates.seekviral.com/qzain/quiz/Quiz7/assets/images/question_bg.jpg")`,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-10 max-w-2xl px-10 mx-auto">
                {question.options.map((option, index) => {
                  const isSelected = answers[currentQuestionIndex] === option;
                  const isCorrect = option === question.correct_answer;
                  let bgClass = "bg-white border-gray-300 hover:bg-red-100";

                  if (answered) {
                    if (isCorrect) {
                      bgClass = "bg-green-500 text-white border-green-600";
                    } else if (isSelected && !isCorrect) {
                      bgClass = "bg-red-500 text-white border-red-600";
                    } else {
                      bgClass = "bg-white border-gray-300";
                    }
                  } else if (isSelected) {
                    bgClass = "bg-red-500 text-white border-red-600";
                  }

                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-[2px] h-16 bg-red-500"></div>
                      <button
                        onClick={() => handleOptionChange(option)}
                        disabled={answered}
                        className={`py-6 w-full text-lg font-semibold border-2 rounded-lg shadow mt-0 transition ${bgClass}`}
                      >
                        {option}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 max-w-2xl mx-auto pb-12">
            <button
              onClick={() =>
                setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
              }
              disabled={currentQuestionIndex === 0}
              className={`px-6 py-3 rounded ${
                currentQuestionIndex === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-red-600 text-white hover:bg-red-700"
              }`}
            >
              Previous
            </button>

            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={() =>
                  setCurrentQuestionIndex((prev) =>
                    Math.min(prev + 1, questions.length - 1)
                  )
                }
                className="px-6 py-3 rounded bg-red-600 text-white hover:bg-red-700"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 rounded bg-red-700 text-white font-bold hover:bg-red-800"
              >
                Submit Quiz
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-3xl font-bold mb-6">Quiz Results</h2>
          <p className="text-xl">
            You scored{" "}
            <span className="font-bold text-red-600">{calculateScore()}</span> /{" "}
            {questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
