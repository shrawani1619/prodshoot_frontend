import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AmazonPhotography from './pages/AmazonPhotography.jsx'
import ProductPhotography from './pages/ProductPhotography.jsx'
import WhiteBackground from './pages/WhiteBackground.jsx'
import HeroShots from './pages/HeroShots.jsx'
import LifestylePhotography from './pages/LifestylePhotography.jsx'
import ThreeDRenders from './pages/ThreeDRenders.jsx'
import InfographicDesign from './pages/InfographicDesign.jsx'
import HandModeling from './pages/HandModeling.jsx'
import GhostMannequin from './pages/GhostMannequin.jsx'
import D2CEcommerce from './pages/D2CEcommerce.jsx'
import FashionApparel from './pages/FashionApparel.jsx'
import FoodFMCG from './pages/FoodFMCG.jsx'
import Electronics from './pages/Electronics.jsx'
import BeautyJewelry from './pages/BeautyJewelry.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/ContactForm.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services/product-photography" element={<ProductPhotography />} />
        <Route path="/services/amazon-photography" element={<AmazonPhotography />} />
        <Route path="/services/white-background" element={<WhiteBackground />} />
        <Route path="/services/hero-shots" element={<HeroShots />} />
        <Route path="/services/lifestyle-photography" element={<LifestylePhotography />} />
        <Route path="/services/3d-renders" element={<ThreeDRenders />} />
        <Route path="/services/infographic-design" element={<InfographicDesign />} />
        <Route path="/services/hand-modeling" element={<HandModeling />} />
        <Route path="/services/ghost-mannequin" element={<GhostMannequin />} />
        <Route path="/industries/d2c-ecommerce" element={<D2CEcommerce />} />
        <Route path="/industries/fashion-apparel" element={<FashionApparel />} />
        <Route path="/industries/food-fmcg" element={<FoodFMCG />} />
        <Route path="/industries/electronics" element={<Electronics />} />
        <Route path="/industries/beauty-jewelry" element={<BeautyJewelry />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
