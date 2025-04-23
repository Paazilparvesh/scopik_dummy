import "/src/index.css";   
import image1 from "/src/assets/scopik 32.png";
import image2 from "/src/assets/scopik 34.png";
import image3 from "/src/assets/scopik 43.png";
import image4 from "/src/assets/vr.png";
function CourseCard() {

  const Courses = [
    {
      id: 1,
      image: image1,
      title: "Python",
      description: "Learn Python programming from scratch",
    },
    {
      id: 2,
      image: image2,
      title: "React",
      description: "Learn Python programming from scratch",
    },
    {
      id: 3,
      image: image3,
      title: "App Development",
      description: "Learn Python programming from scratch",
    },
    {
      id: 4,
      image: image4,
      title: "Java",
      description: "Master Java programming and build robust applications.",
    },
  ];

  return (
    <>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 lg:mx-20 gap-5">
        {Courses.map((course,index) => (
          <div key={index} className="w-full rounded-lg overflow-hidden shadow-lg font-[Segeo UI] bg-white text-center">
            <div className="card-image">
              <img src={course.image} alt="Course" className="w-full object-fit" />
            </div>
            <div className="py-4 px-2 w-full">
              <h1 className="text-2xl text-[#2d1d7b] mb-4">{course.title}</h1>
              <p className="text-1xl text-[#555] mb-4">{course.description}</p>
              <button className="bg-[#4c33f0] text-white p-2 border-0 rounded-lg text-sm cursor-pointer hover:bg-[#3724c0]">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}


export default CourseCard;
