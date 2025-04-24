import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "/src/Pages/Home.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import InnerCourse from "./Pages/InnerCourse.jsx";

function App() {
  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/courses" element={<InnerCourse/>}></Route>
          
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
