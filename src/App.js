import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Style/ganural.css";
import Navbar from "./Componet/Navbar";
import Home from "./Componet/Home";
import NotFound from "./Componet/NotFound";
import Footer from "./Componet/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
