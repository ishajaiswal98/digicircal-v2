
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Aboutus from "./Components/Pages/Aboutus";
import Animationvideo from "./Components/Pages/Animationvideo";

import Contactus from "./Components/Pages/Contactus";
import Graphicdesign from "./Components/Pages/Graphicdesign";
import Home from './Components/Pages/Home';
import LeadGeneration from "./Components/Pages/LeadGeneration";
import PromoVideo from "./Components/Pages/PromoVideo";
import Shootvideo from "./Components/Pages/Shootvideo";
import Websitedesign from "./Components/Pages/Websitedesign";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path="/about-goldenhoney-saloon-spa" element={<Aboutus/>}/>
       <Route path='/website-design-at-digi-circal' element={<Websitedesign/>}/>
       <Route path='/shoot-video-at-digi-circal' element={<Shootvideo/>}/>
       <Route path='/animation-video-at-digi-circal' element={<Animationvideo/>}/>
       <Route path='/promo-video-at-digi-circal' element={<PromoVideo/>}/>
       <Route path="/lead-generation-by-digi-circal" element={<LeadGeneration/>}/>       <Route path="/graphic-design-by-digi-circal" element={<Graphicdesign/>}/>
       <Route path="/contact-golden-honey-saloon" element={<Contactus/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
