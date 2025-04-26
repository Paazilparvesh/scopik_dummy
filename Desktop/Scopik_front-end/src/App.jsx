import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "/src/Pages/Home.jsx";
import InnerCourse from "./Pages/InnerCourse.jsx";
import StudentDashboard from "/src/Pages/StudentDashboard.jsx";
import Login from "/src/Pages/Login.jsx";
import MainLayout from "/src/Components/MainLayout.jsx"; // new layout
import Courses from "./Pages/Courses.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import Register from "./Pages/Register.jsx";
import Quiz from "./Components/Quiz.jsx";
import CourseContent from "./Pages/Coursecontent.jsx";
import ScrollToTop from "./Components/ScrolllToTop.js";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>

        {/* Wrap common pages inside MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses/>}></Route>
          <Route path="/course/:id" element={<InnerCourse />} />
          <Route path="/quiz/:id" element={<Quiz/>}></Route>
          <Route path="/student_dashboard" element={<StudentDashboard />} />
          <Route path="/blog" element={<BlogPage/>}></Route>
          <Route path="/video" element={<CourseContent/>}></Route>
        </Route>

        {/* No header/footer on login */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
