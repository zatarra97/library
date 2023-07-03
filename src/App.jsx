import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Scheda from "./Pages/Scheda";
import Success from "./Pages/Success";
import Login from "./Pages/Auth/Login";
import Homepage from "./Pages/Homepage";
import MenuPage from "./Pages/MenuPage";
import NotFound from "./Pages/NotFound";
import Logout from "./Pages/Auth/Logout";
import Register from "./Pages/Auth/Register";
import Reservations from "./Pages/Internal/Reservations";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import PrivacyPolicy from "./Pages/Static/PrivacyPolicy";
import TermsAndConditions from "./Pages/Static/TermsAndConditions";



import AdminHome from "./Pages/Admin/Homepage";
import Prenota from "./Pages/Prenota";

function App() { 
  return <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/dettaglio" element={<MenuPage />} />

    {/*Pagine statiche */}
    <Route path="/termini-e-condizioni" element={<TermsAndConditions />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />

    {/*Accesso Piattaforma */}
    <Route path="/auth/login" element={<Login />} />
    <Route path="/auth/registrati" element={<Register />} />
    <Route path="/auth/password-dimenticata" element={<ForgetPassword />} />
    <Route path="/auth/logout" element={<Logout />} />

    {/* Altre pagine */}
    <Route path="/scheda" element={<Scheda />} />
    <Route path="/prenota" element={<Prenota />} />
    <Route path="/conferma-prenotazione" element={<Success />} />

    {/* Profilo */}
    <Route path="/profilo/prenotazioni" element={<Reservations />} />

    {/* Pannello Admin */}
    <Route path="/admin" element={<AdminHome />} />

    <Route path="/*" element={<NotFound />}/>
  </Routes>
  <Footer />
  </>;
}

export default App;
