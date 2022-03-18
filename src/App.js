import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Join from "./components/Join";
import Footer from "./components/Footer";
import Register from "./components/Register";
import cozinhando from "../src/img/bloco_services.svg";
import balanca from '../src/img/Illustration.svg'
import JoinImg from '../src/img/bloco_final_image.svg'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home img={balanca} />
              <Recipes />
              <Services img={cozinhando} />
              <Blog />
              <Join img={JoinImg} />
              <Footer />
            </>
          }
        />
        <Route path="/register" element={<Register img={cozinhando} />} />
      </Routes>
      
    </Router>
  );
}

export default App;
