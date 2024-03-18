import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Navbar from "./components/Navbar";

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

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
