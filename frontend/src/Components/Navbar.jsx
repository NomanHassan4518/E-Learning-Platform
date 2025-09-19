import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuth(null); // This will update state + remove from localStorage
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 py-4 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black text-white border-b border-gray-800"
          : "bg-transparent text-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        <img
          className="w-[110px]"
          src="https://demo.themnific.com/edulogy/wp-content/uploads/2020/04/edulogy-logo-inv.png"
          alt="Logo"
        />

        <div className="w-[40%] space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-[#e03b11]">
            Home
          </Link>
          <Link to="/courses" className="hover:text-[#e03b11]">
            Courses
          </Link>
          <Link to="/results" className="hover:text-[#e03b11]">
            Results
          </Link>
        </div>

        <div className="text-sm font-medium">
          {auth ? (
            <button onClick={logout} className="hover:text-[#e03b11]">
              Logout
            </button>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="hover:text-[#e03b11]">
                Login
              </Link>
              <Link to="/register" className="hover:text-[#e03b11]">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
