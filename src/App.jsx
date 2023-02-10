import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

import Homepage from "./Pages/Homepage"
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import NotFound from "./Pages/NotFound"

function App() { 
  return <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Homepage />} />

    {/*Accesso Piattaforma */}
    <Route path="/auth/login" element={<Login />} />
    <Route path="/auth/registrati" element={<Register />} />
    <Route path="/auth/password-dimenticata" element={<ForgetPassword />} />

    <Route path="/*" element={<NotFound />}/>
  </Routes>
  <Footer />
  </>;
}

export default App;
