import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/2088817079.png";

function Header() {
  // const teacherLoginStatus = localStorage.getItem("teacherLoginStatus");
  // const studentLoginStatus = localStorage.getItem("studentLoginStatus");

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full flex justify-between items-center bg-[#1a3b7e] sticky top-0 px-10 z-50 shadow-lg ">
        <div className="p-5">
          <Link to="/">
            <img className="w-12 h-12 m-auto" src={logo} alt="Scopik Logo" />
          </Link>
        </div>

        <div className=" m-auto gap-10 text-black hidden sm:flex ">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/" className="">
            Category
          </Link>
          <Link to="/" className="">
            Courses
          </Link>
          <div className="dropdown">
            <a href="#" className="">
              Login
            </a>
            {/* <div className="m-0">
                    {teacherLoginStatus !='true' && 
                    <>
                      <li><Link className="" to="/">teacher</Link></li>
                      <li><Link className="" to="/">Teacher</Link></li>
                    </>
                    }
                    {studentLoginStatus !='true' && 
                    <>
                      <li><Link className="" to="/">student</Link></li>
                      <li><Link className="" to="/">Register</Link></li>
                    </>
                    }
                   
                    </div> */}
          </div>
          <div className=" dropdown">
            <a href="#" className="ps-0 px-5" data-bs-toggle="dropdown">
              Student
            </a>
            {/* <div class="m-0">
                    {studentLoginStatus !='true' && 
                    <>
                      <li><Link className="" to="/">Login</Link></li>
                      <li><Link className="" to="/">Register</Link></li>
                    </>
                    }
                    {studentLoginStatus === 'true' &&
                    <>
                      <li><Link className="" to="/">Dashboard</Link></li>
                      <li><Link className="" to="/user-logout">Logout</Link></li>
                    </>
                    }
                    </div> */}
          </div>
          <a
            className=""
            target="__blank"
            href="https://minipro.pythonanywhere.com/admin/login/?next=/admin/"
          >
            Admin
          </a>
        </div>

        <div className="my-auto gap-2 sm:flex hidden">
          <Link to="/" className="px-4 py-2 m-auto rounded-3xl bg-white">
            Login
          </Link>
          <Link
            to="/"
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
              <div className="dropdown">
                <a href="#" className="">
                  Login
                </a>
                {/* <div className="m-0">
                    {teacherLoginStatus !='true' && 
                    <>
                      <li><Link className="" to="/">teacher</Link></li>
                      <li><Link className="" to="/">Teacher</Link></li>
                    </>
                    }
                    {studentLoginStatus !='true' && 
                    <>
                      <li><Link className="" to="/">student</Link></li>
                      <li><Link className="" to="/">Register</Link></li>
                    </>
                    }
                   
                    </div> */}
              </div>
              <div className=" dropdown">
                <a href="#" className="ps-0 px-5" data-bs-toggle="dropdown">
                  Student
                </a>
                {/* <div class="m-0">
                    {studentLoginStatus !='true' && 
                    <>
                      <li><Link className="" to="/">Login</Link></li>
                      <li><Link className="" to="/">Register</Link></li>
                    </>
                    }
                    {studentLoginStatus === 'true' &&
                    <>
                      <li><Link className="" to="/">Dashboard</Link></li>
                      <li><Link className="" to="/user-logout">Logout</Link></li>
                    </>
                    }
                    </div> */}
              </div>
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
