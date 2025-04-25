import React from "react";
import Learn from "/src/Components/Learn.jsx"
import Syllabus from "/src/Components/Syllabus.jsx"
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

import CourseCard from "/src/Components/CourseCard.jsx"
import { Courses } from "./Courses";

import bg from "/src/assets/Rectangle 2129.jpg";
import icon1 from "/src/assets/personalcard.png";
import icon2 from "/src/assets/Icon.png";
import icon3 from "/src/assets/teacher.png";
import icon4 from "/src/assets/certificate.png";

import instructor from "/src/assets/Instructor.png"
import certificate from "/src/assets/Big Data for Social Good Certificate.jpg"
import { useParams } from "react-router-dom";

const InnerCourse = () => {

  const { id } = useParams();
  const individual = Courses.find((cor) => cor.id === Number(id))  || {} ;

  return (
    <div className="w-full bg-white text-gray-800">

      {/* Hero Section */}
      <img src={bg} alt="" className="w-full" />
  
      {/* Course Info Card */}
      <div className="container flex justify-center gap-20 mx-auto px-4 mt-16">
        <div className="container lg:h-96 mx-auto shadow-xl rounded-xl p-5 -mt-40 bg-[#f1f8ffab] text-left md:text-lef ">
          <h1 className="text-5xl font-[Newsreader] font-bold mb-4 mt-3 text-[#00005C]">
            {individual.title}
            {/* Digital Marketing */}
          </h1>
          <p className="max-w-2xl mb-6 mt-6 text-black">
            {/* Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. */}
            {individual.description}
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-20">
            <button className="bg-[#2600D0] text-white p-2 rounded-lg">
              Enroll Now
            </button>
          </div>
        </div>

        <div className="bg-white w-full lg:h-72 shadow-lg rounded-lg p-6 md:w-1/3 ml-auto">
          <div className="text-3xl font-semibold mb-2 text-[#00005C]">
            ₹ 35,000
          </div>
          <ul className="text-xl space-y-4 mt-5">
            <li className="flex items-center gap-2">
              <span className="">
                <img src={icon1} alt="" className="" />
              </span>
              Intermediate
            </li>
            <li className="flex items-center gap-2">
              <span className="">
                <img src={icon2} alt="" className="" />
              </span>
              January 30
            </li>
            <li className="flex items-center gap-2">
              <span className="">
                <img src={icon3} alt="" className="" />
              </span>
              32 Total Enrolled
            </li>
            <li className="flex items-center gap-2">
              <span className="">
                <img src={icon4} alt="" className="" />
              </span>
              Certificate
            </li>
          </ul>
        </div>
    </div>

      {/* What You’ll Learn */}
      <div className=" mx-auto px-4 py-10">
        <Learn/>
      </div>

      {/* Course Syllabus */}
      <Syllabus/>

      {/* Instructor Section */}
      <div className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-medium text-[#00005C] mb-4">Your Instructor</h3>
        <div className="flex flex-col md:flex-row items-center gap-6"
       >
        <div className="mt-8" style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}>
          <img
            src={instructor}
            alt="Instructor"
            className="size-80"
          />
          </div>
          <div>
            <h4 className="font-semibold text-2xl text-[#00005C]">Name</h4>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div className="container mx-auto px-4 py-10 text-center">
        <h3 className="text-xl font-bold mb-4">Certificate</h3>
        <img
          src={certificate}
          alt="Certificate"
          className="mx-auto mb-4 w-48"
        />
        <button className="bg-blue-600 p-2 rounded-lg text-white">Apply Now</button>
      </div>

      {/* Related Courses */}
      <div className="container mx-auto px-4 py-10">
        <h3 className="text-3xl text-[#00005C] font-medium mb-4">Related Courses</h3>
        <div className="">
          <CourseCard/>
        </div>
      </div>

    </div>
  );
};

export default InnerCourse;
