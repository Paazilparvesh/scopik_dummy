import React from "react";
import Partners from "/src/Components/Partners.jsx";
import Blog from "/src/Components/Blog.jsx";
import Student from "/src/Components/Student.jsx";
import CourseCard from "/src/Components/CourseCard.jsx";
import Learn from "/src/Components/Learn.jsx";


export default function Home() {
  return (
    <>
      <Learn />

      <div className="text-center text-[#00005C] mt-10 sm:mt-14 md:mt-18 mb-5 text-xl sm:text-2xl md:text-3xl font-[newsreader]">
        <h1>Available Courses</h1>
      </div>
      <div className=" flex justify-center gap-4 overflow -hidden">
        <CourseCard/>
        </div>

      <Partners />
      <Blog />
      <Student />
    </>
  );
}
