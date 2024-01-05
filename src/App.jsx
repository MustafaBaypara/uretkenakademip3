
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/navbar/CustomNavbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviesPage from "./components/moviespage/MoviesPage";
import Aboutme from "./components/aboutme/Aboutme";

function App() {

  return (
    <>
     <Router>
    <CustomNavbar />
    <Routes>
      <Route path="/" element={<MoviesPage />} />
      <Route path="/moviespage" element={<MoviesPage />} />
      <Route path="/Aboutme" element={<Aboutme />} />
    </Routes>
  </Router>
    </>
  )
}

export default App
