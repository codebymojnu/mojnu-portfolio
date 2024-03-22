import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

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
        <div className="container mx-auto p-4 w-full md:max-w-4xl  m-2 mt-0 md:p-8 shadow-xs">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
