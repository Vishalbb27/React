import "./App.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blogs";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <BasicTable />
        <LoginForm />
        <Controlllogin /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
