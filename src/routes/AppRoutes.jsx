// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
// import Home from "../pages/HomePage/HomePage";
// import AboutUs from "../pages/HomePage/Sections/AboutUs/AboutUs";
// import CareersPage from "../pages/CareersPage/CareersPage";
// import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
// import MissionPage from "../pages/MissionPage/MissionPage";
// import VisionPage from "../pages/VisionPage/VisionPage";
// import BlogPage from "../pages/BlogPage/BlogPage";
// import EduventuresCourses from "../pages/EduventuresCoursesPage/EduventuresCoursesPage";
// import CourseFormPage from "../pages/CourseFormPage/CourseFormPage";
// import ComingSoon from "../pages/comingsoon/comingsoon";
import ScrollToTop from "../components/ScrollToTop";
import EduventuresForStudents from "../pages/EduventuresForStudents";
import EduventuresForUniversities from "../pages/EduventuresForUniversities";

const AppRoutes = () => {
  return (
  <>
  <ScrollToTop/>
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<EduventuresForStudents />} />
       <Route path="foruniversities" element={<EduventuresForUniversities />} />
      

      {/* 404 Not Found - Optional */}
      <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-[#FFFFFF]">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#000000] mb-4">404</h1>
          <p className="text-xl text-[#000000] mb-8">Page not found</p>
          <a href="/" className="bg-[#2563EB] text-[#000000] px-8 py-3 rounded-lg hover:bg-[#0f2657] transition-colors">
          Home
          </a>
          </div>
      </div>} />
    </Routes>
          </>
  );
};

export default AppRoutes;
