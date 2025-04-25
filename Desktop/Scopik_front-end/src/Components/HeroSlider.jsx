// HeroSlider.jsx
import React, { useState, useEffect } from "react";
import slider1 from "/src/assets/Rectangle 2138.jpg"
import slider2 from "/src/assets/Frame 1597881187.jpg"
// import slider3 from "/src/assets/Rectangle 2138.jpg"


const slides = [
  {
    id: 1,
    image: slider1, // Replace with the correct path to your image
    title: "Vr/Ar",
  },
  {
    id: 2,
    image: slider2,
    title: "AI Revolution",
  },
  {
    id: 3,
    image: slider1,
    title: "Next-Gen Robotics",
  },
];

const HeroSlider = () => {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-screen object-cover md:object-fit"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end justify-center">
            <h2 className="text-white text-4xl md:text-6xl mb-40 font-bold">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
