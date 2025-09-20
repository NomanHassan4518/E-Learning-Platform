import React, { useState } from "react";

const QuizPage = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const options = ["Clustering", "Linear Regression", "K-means", "Apriori"];
  const handleOptionChange = (qIndex, option) => {
    setAnswers((prev) => ({
      ...prev,
      [qIndex]: option,
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-[#eda0a8] pt-10  ">
      {/* Question  */}
     <div>
        <div className="relative w-full h-[400px] flex items-center justify-center">
  {/* Background Image */}
  <img
    src="https://templates.seekviral.com/qzain/quiz/Quiz7/assets/images/girl-glasses.jpg"
    alt="quiz background"
    className="absolute inset-0 w-full h-full object-cover rounded-lg"
  />

  {/* Question Box */}
  <h1 className="relative bg-white max-w-xl mx-auto py-10 mt-72 px-5 text-center text-3xl font-semibold rounded-lg border-4 border-red-500 shadow-lg">
    Which of the following is an example of supervised learning?
  </h1>
</div>

     </div>

      {/* Options  */}
      <div
        className="bg-cover bg-center w-full h-full pb-10"
        style={{
          backgroundImage: `url("https://templates.seekviral.com/qzain/quiz/Quiz7/assets/images/question_bg.jpg")`,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-4 mt-16 max-w-xl px-10 mx-auto">
          {["Russia", "America", "Australia", "Hong Kong"].map(
            (option, index) => (
              <div className="flex flex-col items-center ">
                 <div className="w-[2px] h-16 bg-red-500"></div>
                <button
                  key={index}
                  className="py-6 w-full bg-white text-lg font-semibold border-2 border-gray-300 rounded-lg shadow hover:bg-red-100 transition"
                >
                  {option}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
