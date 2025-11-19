import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Lazy load pages for better performance
const About = React.lazy(() => import("./pages/About"));
const Resume = React.lazy(() => import("./pages/Resume"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const Blog = React.lazy(() => import("./pages/Blogs"));
const Contact = React.lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<div className="loading-screen">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* fallback */}
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

export default App;
