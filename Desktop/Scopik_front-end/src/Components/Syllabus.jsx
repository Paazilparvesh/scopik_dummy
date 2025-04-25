import { useState } from "react";

const syllabus = [
    {
      title: "01 : LMS Orientation",
      items: ["LMS Login", "Intro"],
    },
    {
      title: "02 : Elective - Sound Design",
      items: ["LMS Login", "Intro"],
    },
    {
      title: "03 : Video Production",
      items: ["LMS Login", "Intro"],
    },
    {
      title: "04 : VR Application Development",
      items: ["LMS Login", "Intro"],
    },
  ];

function Syllabus() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
                  
  return (
    <div className="ml-[100px]">
    <div className="mt-4 space-y-4">
      <h2 className="text-2xl font-bold">
        Course <span className="text-indigo-600">Syllabus</span>
      </h2>
      <p className="text-gray-600 max-w-2xl">
        In this digital marketing course, you will gain a comprehensive understanding of online marketing strategies...
      </p>

      <div className="mt-6">
        {syllabus.map((section, index) => (
          <div
            key={index}
            className="border-b py-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <strong>{section.title}</strong>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </div>
            {openIndex === index && (
              <ul className="ml-4 mt-2 list-disc text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Syllabus;