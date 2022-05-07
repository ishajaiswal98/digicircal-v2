
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Aboutus from "./Components/Pages/Aboutus";
import Animationvideo from "./Components/Pages/Animationvideo";
import Graphicdesign from "./Components/Pages/Graphicdesign";
import Home from './Components/Pages/Home';
import LeadGeneration from "./Components/Pages/LeadGeneration";
import PromoVideo from "./Components/Pages/PromoVideo";
import ScrollToTop from "./Components/Pages/ScrollToTop";
import Shootvideo from "./Components/Pages/Shootvideo";
import Websitedesign from "./Components/Pages/Websitedesign";
function App() {
  return (
   
    <BrowserRouter>
     
    <div className="App">
    <ScrollToTop/>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path="/about-goldenhoney-saloon-spa" element={<Aboutus/>}/>
       <Route path='/website-design-at-digi-circal' element={<Websitedesign/>}/>
       <Route path='/shoot-video-at-digi-circal' element={<Shootvideo/>}/>
       <Route path='/animation-video-at-digi-circal' element={<Animationvideo/>}/>
       <Route path='/promo-video-at-digi-circal' element={<PromoVideo/>}/>
       <Route path="/lead-generation-by-digi-circal" element={<LeadGeneration/>}/>       <Route path="/graphic-design-by-digi-circal" element={<Graphicdesign/>}/>
       <Route path="/about-digicircal" element={<Aboutus/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
