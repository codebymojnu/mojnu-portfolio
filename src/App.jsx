import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import Home from "./components/HomePage/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import VideoPage from "./components/VideoPage";

function App() {
  return (
    <div
      style={{
        fontFamily: 'Google Sans, "Helvetica Neue", sans-serif',
        fontWeight: 400,
      }}
    >
      <Router>
        <Navbar />
        <div className="container mx-auto p-4 w-full md:max-w-4xl  m-2 mt-0 md:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Routes>
          <Route path="/videos" element={<VideoPage />} />
        </Routes>
        <Routes>
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
