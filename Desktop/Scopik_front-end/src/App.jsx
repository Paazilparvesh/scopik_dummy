import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "/src/Pages/Home.jsx";
import InnerCourse from "./Pages/InnerCourse.jsx";
import StudentDashboard from "/src/Pages/StudentDashboard.jsx";
import Login from "/src/Pages/Login.jsx";
import MainLayout from "/src/Components/MainLayout.jsx"; // new layout

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap common pages inside MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<InnerCourse />} />
          <Route path="/student_dashboard" element={<StudentDashboard />} />
        </Route>

        {/* No header/footer on login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
