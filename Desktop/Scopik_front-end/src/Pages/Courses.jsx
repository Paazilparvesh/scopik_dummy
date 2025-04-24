import React, { useState } from "react"

import image1 from "/src/assets/scopik 32.png";
import image2 from "/src/assets/scopik 34.png";
import image3 from "/src/assets/scopik 43.png";
import image4 from "/src/assets/vr.png";

const categories = ["UI/UX Designer", "AR/VR", "AI", "3D Designer"];

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
    category: "UI/UX Designer",
  },
  {
    id: 3,
    image: image3,
    title: "App Development",
    description: "Learn Python programming from scratch",
    category: "UI/UX Designer",
  },
  {
    id: 4,
    image: image4,
    title: "Java",
    description: "Master Java programming and build robust applications.",
    category: "UI/UX Designer",
  },
  {
    id: 5,
    image: image4,
    title: "Java",
    description: "Master Java programming and build robust applications.",
    category: "UI/UX Designer",
  },
  {
    id: 6,
    image: image4,
    title: "Java",
    description: "Master Java programming and build robust applications.",
    category: "UI/UX Designer",
  },
  {
    id: 7,
    image: image4,
    title: "Java",
    description: "Master Java programming and build robust applications.",
    category: "UI/UX Designer",
  },
  {
    id: 8,
    image: image4,
    title: "Java",
    description: "Master Java programming and build robust applications.",
    category: "UI/UX Designer",
  },
  {
    id: 9,
    image: image4,
    title: "Java",
    description: "Master Java programming and build robust applications.",
    category: "UI/UX Designer",
  },
  {
    id: 10,
    image: image4,
    title: "Java",
    description: "Master Java programming and build robust applications.",
    category: "UI/UX Designer",
  },
  {
    id: 11,
    image: image4,
    title: "Java",
    description: "Master Java programming and build robust applications.",
    category: "UI/UX Designer",
  },
  {
    id: 12,
    image: image4,
    title: "Java",
    description: "Master Java programming and build robust applications.",
    category: "UI/UX Designer",
  },
  {
    id: 13,
    image: image4,
    title: "Java",
    description: "Master Java programming and build robust applications.",
    category: "UI/UX Designer",
  },
  {
    id: 14,
    image: image4,
    title: "Java",
    description: "Master Java programming and build robust applications.",
    category: "UI/UX Designer",
  },
];
export {Courses};

export default function Course() {

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredCourses =
    selectedCategory === "All"
      ? Courses
      : Courses.filter((course) => course.category === selectedCategory);

  return (
    <>
      <div className="flex justify-center items-start">

        <aside className="sticky top-28 w-96 h-96 py-10 px-10 mx-10 my-20 p-4 bg-gray-100 rounded-xl shadow-lg">
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
        </aside>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 lg:mx-20 gap-5">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="w-full rounded-lg overflow-hidden shadow-lg font-[Segeo UI] bg-white text-center"
            >
              <div className="card-image">
                <img
                  src={course.image}
                  alt="Course"
                  className="w-full object-fit"
                />
              </div>
              <div className="py-4 px-2 w-full">
                <h1 className="text-2xl text-[#2d1d7b] mb-4">{course.title}</h1>
                <p className="text-1xl text-[#555] mb-4">
                  {course.description}
                </p>
                <button className="bg-[#4c33f0] text-white p-2 border-0 rounded-lg text-sm cursor-pointer hover:bg-[#3724c0]">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
