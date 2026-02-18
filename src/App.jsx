import React, { Suspense, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SplashScreen from "./components/SplashScreen";

const Home = React.lazy(() => import("./components/Home"));
const Projects = React.lazy(() => import("./components/Projects"));
const About = React.lazy(() => import("./components/About"));
const Playground = React.lazy(() => import("./components/Playground"));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#0a0a0a]" aria-hidden="true">
      <div className="w-10 h-10 rounded-full border-2 border-cyan-500/30 border-t-cyan-400 animate-spin" />
    </div>
  );
}

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashFinish = useCallback(() => setShowSplash(false), []);

  return (
    <Router>
      <div className="bg-[#0a0a0a] min-h-screen text-gray-200 font-sans selection:bg-[#00e5ff] selection:text-black">
        {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
        <NavBar />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
