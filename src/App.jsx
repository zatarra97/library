import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer"
import Homepage from "./Pages/Homepage"
import NotFound from "./Pages/NotFound"
function App() { 
  return <>

  <Routes>
    <Route path="/" element={<Homepage />} />

    <Route path="/*" element={<NotFound />}/>
  </Routes>
  <Footer />
  </>;
}

export default App;
