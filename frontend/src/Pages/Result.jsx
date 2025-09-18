import React, { useState, useEffect } from "react";

const Result = () => {
  const [latestScore, setLatestScore] = useState(null);
  const [attempts, setAttempts] = useState([]);

  // Dummy quiz data
  const dummyResults = [
    { id: 1, score: 8, total: 10, date: "2025-09-10T10:30:00Z" },
    { id: 2, score: 7, total: 10, date: "2025-09-08T15:20:00Z" },
    { id: 3, score: 9, total: 10, date: "2025-09-05T18:45:00Z" },
    { id: 4, score: 6, total: 10, date: "2025-09-02T12:10:00Z" },
  ];

  useEffect(() => {
    setLatestScore(dummyResults[0]); // latest attempt
    setAttempts(dummyResults);
  }, []);

  const percentage = latestScore
    ? Math.round((latestScore.score / latestScore.total) * 100)
    : 0;
  const isPassed = percentage >= 50;

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="min-h-screen bg-black bg-opacity-60 px-6 md:px-10 pt-28 pb-16">
        {/* Latest Score Card */}
        <div className="flex items-center justify-center mb-16">
          <div className="max-w-xl w-full text-center bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-700">
            {latestScore ? (
              <>
                {/* Pass/Fail Heading */}
                {isPassed ? (
                  <h2 className="text-3xl font-bold text-green-400 flex justify-center items-center gap-2 mb-6">
                    You Passed! ✅
                  </h2>
                ) : (
                  <h2 className="text-3xl font-bold text-red-500 flex justify-center items-center gap-2 mb-6">
                    You Failed! ❌
                  </h2>
                )}

                {/* Latest Score */}
                <p className="text-gray-300 font-medium mb-2">
                  YOUR LATEST SCORE
                </p>
                <h1
                  className={`text-7xl font-extrabold mb-4 ${
                    isPassed ? "text-green-400" : "text-red-500"
                  }`}
                >
                  {percentage}%
                </h1>

                {/* Progress Bar */}
                <div className="relative w-full h-3 bg-gray-700 rounded-full mb-3">
                  <div
                    className={`absolute top-0 left-0 h-3 rounded-full ${
                      isPassed ? "bg-green-500" : "bg-red-500"
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                {/* Performance Text */}
                <p
                  className={`text-sm font-semibold ${
                    isPassed ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isPassed ? "Good Performance" : "Low Performance"}
                </p>

                {/* Last Attempt Date */}
                <p className="text-gray-400 text-xs mt-4">
                  Attempted on:{" "}
                  {new Date(latestScore.date).toLocaleString("en-US")}
                </p>
              </>
            ) : (
              <p className="text-gray-500">No attempts found.</p>
            )}
          </div>
        </div>

        {/* Past Attempts */}
        <div className="max-w-5xl mx-auto bg-gray-900 bg-opacity-70 rounded-2xl shadow-2xl p-8">
          <h3 className="text-3xl font-semibold mb-6 text-center">
            Past Attempts
          </h3>
          {attempts.length > 0 ? (
            <table className="w-full border-collapse text-left overflow-hidden rounded-xl">
              <thead>
                <tr className="bg-[#e03b11] text-white">
                  <th className="py-3 px-4">Attempt</th>
                  <th className="py-3 px-4">Score</th>
                  <th className="py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {attempts.map((attempt, index) => (
                  <tr
                    key={attempt.id}
                    className="hover:bg-gray-800 transition"
                  >
                    <td className="py-3 px-4 border-b border-gray-700">
                      {index + 1}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-700 text-[#ff7043] font-semibold">
                      {attempt.score}/{attempt.total}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-700 text-gray-300">
                      {new Date(attempt.date).toLocaleString("en-US")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-400 text-center">
              No attempts yet. Try a quiz!
            </p>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-[#e03b11] hover:bg-[#c22f0d] text-white font-semibold rounded-full shadow-lg transition">
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
