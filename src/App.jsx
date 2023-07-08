import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


import NotFound from "./Pages/NotFound";
import Books from "./Pages/Books";





function App() { 
  return <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Books />} />

    <Route path="/*" element={<NotFound />}/>
  </Routes>
  <Footer />
  </>;
}

export default App;
