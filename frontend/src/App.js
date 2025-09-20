import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Register from "./Pages/Account/Register";
import Login from "./Pages/Account/Login";
import Courses from "./Pages/Courses";
import Result from "./Pages/Result";
import { LoadingProvider, useLoading } from "./Context/LoadingContext";
import { AuthProvider } from "./Context/AuthContext";
import Loader from "./Components/Loader";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
import CourseQuizes from "./Pages/CourseQuizes";
import QuizPage from "./Pages/QuizPage";

// Wrapper to conditionally show loader
const LoaderWrapper = () => {
  const { loading } = useLoading();
  return loading ? <Loader /> : null;
};

function AppContent() {
  const { setLoading } = useLoading();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/api/course/getCourses");
        if (res.data) {
         localStorage.setItem("courses",JSON.stringify(res.data))
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [setLoading]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseQuizes />} />
        <Route path="/courses/:courseId/:quizId" element={<QuizPage />} />
        <Route path="/results" element={<Result />} />
      </Routes>
      <Footer />
      {/* Loader on top of everything */}
      <LoaderWrapper />
    </>
  );
}

function App() {
  return (
    <LoadingProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer position="top-right" autoClose={3000} />
    </LoadingProvider>
  );
}

export default App;
