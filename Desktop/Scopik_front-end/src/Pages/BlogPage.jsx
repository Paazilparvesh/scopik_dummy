import React, { useState } from "react";
import bin1 from "/src/assets/889.png";
import bin2 from "/src/assets/090.png";
import bin3 from "/src/assets/009.png";

import hero from "/src/assets/unnamed 8.png"

const categories = ["Full stack", "3D Designer", "AR/VR", "UI/UX Designer", "AI", "Backend"];

const blogs = [
  {
    id: 1,
    title: "Immersive Technology orientation session at AIC TEA-NIFT, Tirupur",
    image: bin1,
    date: "Jan 25, 2023",
    category: "AR/VR",
  },
  {
    id: 2,
    title: "Awareness session on Immersive Technology in our social life",
    image: bin2,
    date: "Jan 25, 2023",
    category: "3D Designer",
  },
  {
    id: 3,
    title: "AR VR Awareness & Demonstration at Kings Engineering College",
    image: bin3,
    date: "Jan 25, 2023",
    category: "AI",
  },
  {
    id: 4,
    title: "AR VR Awareness & Demonstration at Kings Engineering College",
    image: bin3,
    date: "Jan 25, 2023",
    category: "Backend",
  },
];

const BlogPage = () => {

  const [selected, setSelected] = useState("All");

  const filteredBlogs = selected === "All" ? blogs : blogs.filter(blog => blog.category === selected);

  return (
    <div className="bg-[#f9f9f9]">
      {/* Banner */}
      <div className="text-center py-10 xl:-mt-[180px]">
      <h1 className="text-[120px] xl:text-[450px] font-bold text-gray-200 xl:-mb-[500px] relative top-20 md:static z-0">Blogs</h1>
        <img src={hero} alt="Blogs" className="mx-auto w-1/2 max-w-lg z-12" />
      </div>

      {/* Categories */}
      <div className="flex justify-center space-x-4 overflow-x-auto px-4 mb-6">
        {["All", ...categories].map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelected(cat)}
            className={`text-sm md:text-base px-4 py-2 whitespace-nowrap border-b-2 ${
              selected === cat ? "border-black font-semibold" : "border-transparent text-gray-600"
            } hover:text-black transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="px-4 space-y-6 pb-10">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={blog.image} alt="blog" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{blog.title}</h2>
              <div className="text-sm text-gray-500 mt-2 flex justify-between">
                <span>{blog.date}</span>
                <a href="#" className="text-indigo-600 hover:underline">Read more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
