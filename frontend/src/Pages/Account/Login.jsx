import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://demo.themnific.com/edulogy/wp-content/uploads/2020/04/group-of-people-sitting-inside-room-2422294-1920x1000.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative bg-white shadow-lg w-full max-w-md p-8 mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#e03b11]">
          Welcome Back
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#e03b11]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#e03b11]"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[50%] text-sm bg-[#e03b11] text-white py-2 rounded-md font-semibold hover:bg-[#c22f0d] transition"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#e03b11] font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
