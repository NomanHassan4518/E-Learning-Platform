import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-3 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <img
            src="https://demo.themnific.com/edulogy/wp-content/uploads/2020/04/edulogy-logo-inv.png"
            alt="Logo"
            className="w-36 mb-4"
          />
          <p className="text-xs leading-relaxed">
            Our platform helps learners build knowledge, improve skills, and
            achieve success through structured courses and assessments.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 ml-3 text-sm">
            <li>
              <Link to="/" className="hover:text-[#e03b11]">Home</Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-[#e03b11]">Courses</Link>
            </li>
            <li>
              <Link to="/results" className="hover:text-[#e03b11]">Results</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#e03b11]">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link to="/facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#e03b11] transition">
              <FaFacebookF />
            </Link>
            <Link to="/twitter" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#e03b11] transition">
              <FaTwitter />
            </Link>
            <Link to="/linkedin" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#e03b11] transition">
              <FaLinkedinIn />
            </Link>
            <Link to="/instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#e03b11] transition">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-700 pt-5 text-sm text-gray-400">
        © {new Date().getFullYear()} Edulogy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
