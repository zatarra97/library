import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


import NotFound from "./Pages/NotFound";
import Books from "./Pages/Books";
import NewBook from "./Pages/NewBook";





function App() { 
  return <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Books />} />
    <Route path="/nuovo-libro" element={<NewBook />} />

    <Route path="/*" element={<NotFound />}/>
  </Routes>
  <Footer />
  </>;
}

export default App;
