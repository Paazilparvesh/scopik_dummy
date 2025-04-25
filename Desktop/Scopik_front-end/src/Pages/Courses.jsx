import React, { useState } from "react";
import { Link } from "react-router-dom";

import image1 from "/src/assets/scopik 32.png";
import image2 from "/src/assets/scopik 34.png";
import image3 from "/src/assets/scopik 43.png";
import image4 from "/src/assets/vr.png";

import prem from "/src/assets/shield-security.png";
import time from "/src/assets/timer-start.png"
import star from "/src/assets/star.png"

const categories = ["ALL", "UI/UX Designer", "AR/VR", "AI", "3D Designer"];

const Courses = [
  {
    id: 1,
    image: image1,
    title: "Python",
    description: "Learn Python programming from scratch",
    category: "UI/UX Designer",

  },
  {
    id: 2,
    image: image2,
    title: "React",
    description: "Learn Python programming from scratch",
    category: "AR/VR",
  },
  {
    id: 3,
    image: image3,
    title: "App Development",
    description: "Learn Python programming from scratch",
    category: "AI",
  },
  {
    id: 4,
    image: image4,
    title: "Java",
    description: "Master Java programming and build robust applications.",
    category: "3D Designer",
  },
  {
    id: 5,
    image: image4,
    title: "Java",
    description: "Master Java programming and build robust applications.",
    category: "UI/UX Designer",
  },
];
export { Courses };

export default function Course() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All"
      ? Courses
      : Courses.filter((course) => course.category === selectedCategory);

  return (
    <>
      <div className="flex justify-center items-start">
        <aside className="md:sticky md:top-28 hidden md:flex w-96 h-96 py-10 px-10 mx-10 my-20 p-4 bg-gray-100 rounded-xl shadow-lg">
          <ul className="space-y-5 flex flex-col justify-center">
            {categories.map((cat, i) => (
              <a>
                <li
                  key={i}
                  onClick={() => setSelectedCategory(cat)}
                  className="flex justify-between items-center text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition"
                >
                  {cat}
                  <span className="text-xl mx-10">›</span>
                </li>
              </a>
            ))}
          </ul>
        </aside>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 lg:mx-20 gap-5">
          {filteredCourses.map((course, index) => (
            <Link to={`/course/${course.id}`}>
              <div
                key={index}
                // onClick={() => setSelectedCategory(course)}
                className="w-full rounded-lg overflow-hidden shadow-lg font-[Segeo UI] bg-white text-left"
              >
                <div className="card-image">
                  <img
                    src={course.image}
                    alt="Course"
                    className="w-full object-fit"
                  />
                </div>
                <div className="py-4 px-2 w-full">
                  <span className=" flex items-center text-sm gap-1">
                    <img src={prem} alt="" className="size-4" />
                    Premium
                  </span>
                  <h1 className="text-3xl text-[#2d1d7b] mb-2">
                    {course.title}
                  </h1>
                  <p className="text-1xl text-[#555] mb-2">
                    {course.description}
                  </p>
                  <span className="flex items-center gap-2 my-4 mx-2">
                    <img src={star} alt="" className="" />
                    <img src={star} alt="" className="" />
                    <img src={star} alt="" className="" />
                    <img src={star} alt="" className="" />
                    <img src={star} alt="" className="" />
                    18,000
                  </span>
                  <div className="flex justify-between items-center mx-2">
                      <span className="flex gap-1 items-center ">
                        <img src={time} alt="" className="size-5" />
                        52 Hrs
                      </span>
                    <button className="bg-[#4c33f0] text-white p-2 border-0 rounded-lg text-sm cursor-pointer hover:bg-[#3724c0]">
                      <Link to={`/course/${course.id}`}>Enroll Now</Link>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

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

              <ul className="space-y-5">
                {categories.map((cat, i) => (
                  <a>
                    <li
                      key={i}
                      className="flex justify-between items-center text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition"
                    >
                      {cat}
                      <span className="text-xl">›</span>
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
