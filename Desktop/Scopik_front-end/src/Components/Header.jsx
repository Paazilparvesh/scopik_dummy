import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/2088817079.png";

function Header() {
  // const teacherLoginStatus = localStorage.getItem("teacherLoginStatus");
  // const studentLoginStatus = localStorage.getItem("studentLoginStatus");

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // scrolling down
      setShowNavbar(false);
    } else {
      // scrolling up
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className={`w-full flex justify-between items-center bg-[#1a3b7e] sticky top-0 px-10 z-50 shadow-lg ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="p-5">
          <Link to="/">
            <img className="w-12 h-12 m-auto" src={logo} alt="Scopik Logo" />
          </Link>
        </div>

        <div className=" m-auto gap-10 text-white hidden sm:flex ">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/course" className="">
            Courses
          </Link>
          <Link to="/blog" className="">
            Blog
          </Link>
          {/* <Link to="/" className="">
            Contact
          </Link> */}
          <Link to="/student_dashboard" className="">
            Student Dashboard
          </Link>
          <a
            className=""
            target="__blank"
            href="https://minipro.pythonanywhere.com/admin/login/?next=/admin/"
          >
            Admin
          </a>
        </div>

        <div className="my-auto gap-2 sm:flex hidden">
          <Link to="/login" className="px-4 py-2 m-auto rounded-3xl bg-white">
            Login
          </Link>
          <Link
            to="/register"
            className="text-white px-4 py-2 m-auto rounded-3xl bg-black"
          >
            Register
          </Link>
        </div>

        {/* Mobile Nav Dropdown */}
        <div className="sm:hidden flex relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>

          {isOpen && (
            <div
              className="md:hidden  bg-white space-y-2 absolute top-0 -right-80 w-64 h-96 p-5 shadow-lg rounded-lg"
              style={{ transition: "2s", transform: "translatex(-285px)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 md:hidden absolute top-5 right-5 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                  onClick={toggleMenu}
                />
              </svg>
              <Link
                to="/"
                className="block text-gray-700 hover:text-blue-500 pt-10"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-blue-500"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-blue-500"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-blue-500"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-blue-500"
              >
                Course
              </Link>
              <div>
                <a
                  className=""
                  target="__blank"
                  href="https://minipro.pythonanywhere.com/admin/login/?next=/admin/"
                >
                  Admin
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;