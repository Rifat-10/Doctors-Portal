import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home/Home';
import About from './Pages/About/About';
import Navbar from './Shared/Navbar';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
