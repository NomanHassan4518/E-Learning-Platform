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

// Wrapper to conditionally show loader
const LoaderWrapper = () => {
  const { loading } = useLoading();
  return loading ? <Loader /> : null;
};

function App() {
  return (
    <LoadingProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/results" element={<Result />} />
          </Routes>
          <Footer />
          {/* Loader on top of everything */}
          <LoaderWrapper />
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer position="top-right" autoClose={3000} />
    </LoadingProvider>
  );
}

export default App;
