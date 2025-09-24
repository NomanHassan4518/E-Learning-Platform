import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLoading } from "../Context/LoadingContext";

const Result = () => {
  const [results, setResults] = useState([]);
  const { setLoading } = useLoading();
  const coursesData = JSON.parse(localStorage.getItem("courses")) || [];

  const findCourseName = (id) => {
    const courseName = coursesData.find((course) => course._id === id);
    return courseName ? courseName.title : "Unknown Course";
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const user = JSON.parse(localStorage.getItem("user"));

        const res = await axios.get("http://localhost:5000/api/results", {
          headers: { Authorization: `Bearer ${user.token}` },
        });

        const reslt = res.data || {};
        let allResults = [];

        Object.values(reslt).forEach((course) => {
          course.results.forEach((attempt) => {
            allResults.push({
              ...attempt,
              courseId: course.courseId,
            });
          });
        });

        // Sort all attempts by date (latest first)
        allResults.sort((a, b) => new Date(b.date) - new Date(a.date));

        setResults(allResults);
      } catch (error) {
        console.error("Error fetching results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const latestScore = results[0];
  const percentage = latestScore
    ? Math.round((latestScore.score / 10) * 100)
    : 0;
  const isPassed = percentage >= 50;

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-60 px-6 md:px-10 pt-28 pb-16">
        {latestScore ? (
          <>
            <div className="flex items-center justify-center mb-12">
              <div className="max-w-xl w-full text-center bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-700">
                {isPassed ? (
                  <h2 className="text-3xl font-bold text-green-400 mb-6">
                    You Passed!
                  </h2>
                ) : (
                  <h2 className="text-3xl font-bold text-red-500 mb-6">
                    You Failed!
                  </h2>
                )}

                <p className="text-gray-300 font-medium mb-2">
                  <b>Course:</b> {findCourseName(latestScore.courseId)}
                </p>
                <h1
                  className={`text-7xl font-extrabold mb-4 ${
                    isPassed ? "text-green-400" : "text-red-500"
                  }`}
                >
                  {percentage}%
                </h1>

                <div className="relative w-full h-3 bg-gray-700 rounded-full mb-3">
                  <div
                    className={`absolute top-0 left-0 h-3 rounded-full ${
                      isPassed ? "bg-green-500" : "bg-red-500"
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                <p
                  className={`text-sm font-semibold ${
                    isPassed ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isPassed ? "Good Performance" : "Low Performance"}
                </p>

                <p className="text-gray-400 text-xs mt-4">
                  Attempted on:{" "}
                  {new Date(latestScore.date).toLocaleString("en-US")}
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto bg-gray-900 bg-opacity-70 rounded-2xl shadow-2xl p-8">
              <h3 className="text-3xl font-semibold mb-6 text-center">
                All Quiz Attempts
              </h3>

              <table className="w-full border-collapse text-left overflow-hidden rounded-xl">
                <thead>
                  <tr className="bg-[#e03b11] text-white text-center">
                    <th className="py-3 px-4">Attempt</th>
                    <th className="py-3 px-4">Course</th>
                    <th className="py-3 px-4">Quiz</th>
                    <th className="py-3 px-4">Score</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((attempt, index) => (
                    <tr
                      key={attempt._id || index}
                      className="hover:bg-gray-800 transition text-center"
                    >
                      <td className="py-3 px-4 border-b border-gray-700">
                        {index + 1}
                      </td>
                      <td className="py-3 px-4 border-b border-gray-700 text-gray-300">
                        {findCourseName(attempt.courseId)}
                      </td>
                      <td className="py-3 px-4 border-b border-gray-700 text-gray-300">
                        {attempt.quizTitle}
                      </td>
                      <td className="py-3 px-4 border-b border-gray-700 text-[#ff7043] font-semibold">
                        {attempt.score}/10
                      </td>
                      <td className="py-3 px-4 border-b border-gray-700 text-gray-300">
                        {attempt.score>5?"Pass":"Fail"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-400">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Result;
