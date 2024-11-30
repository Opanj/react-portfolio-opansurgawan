import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ProjectAll from "./pages/ProjectAll";

function App() {
  return (
    <>
      {/* portfolio 1 */}
      {/* <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-600 selection:text-white">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experiences />
          <Projects />
          <Contact />
        </div>
      </div> */}

      {/* portfolio 2 */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ProjectAll />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
