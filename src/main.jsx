import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AmazonPhotography from './pages/AmazonPhotography.jsx'
import FlipkartPhotography from './pages/FlipkartPhotography.jsx'
import FlipkartFootwear from './pages/FlipkartFootwear.jsx'
import FlipkartFashion from './pages/FlipkartFashion.jsx'
import FlipkartMedical from './pages/FlipkartMedical.jsx'
import FlipkartElectronics from './pages/FlipkartElectronics.jsx'
import FlipkartGrocery from './pages/FlipkartGrocery.jsx'
import FlipkartFurniture from './pages/FlipkartFurniture.jsx'
import FlipkartAutomotive from './pages/FlipkartAutomotive.jsx'
import FlipkartBikini from './pages/FlipkartBikini.jsx'
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
import TatacliqProductPhotography from './pages/TatacliqProductPhotography.jsx'
import TatacliqFootwearPhotography from './pages/TatacliqFootwearPhotography.jsx'
import TatacliqFashionPhotography from './pages/TatacliqFashionPhotography.jsx'
import TatacliqBikiniPhotography from './pages/TatacliqBikiniPhotography.jsx'
import TatacliqEcommercePhotography from './pages/TatacliqEcommercePhotography.jsx'
import TatacliqFurniturePhotography from './pages/TatacliqFurniturePhotography.jsx'
import TatacliqCosmeticPhotography from './pages/TatacliqCosmeticPhotography.jsx'
import TatacliqMedicalPhotography from './pages/TatacliqMedicalPhotography.jsx'
import TatacliqElectronicsPhotography from './pages/TatacliqElectronicsPhotography.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services/product-photography" element={<ProductPhotography />} />
        <Route path="/services/amazon-photography" element={<AmazonPhotography />} />
        <Route path="/market-place/Flipkart" element={<FlipkartPhotography />} />
        <Route path="/market-place/flipkart-footwear" element={<FlipkartFootwear />} />
        <Route path="/market-place/flipkart-fashion" element={<FlipkartFashion />} />
        <Route path="/market-place/flipkart-medical" element={<FlipkartMedical />} />
        <Route path="/market-place/flipkart-electronics" element={<FlipkartElectronics />} />
        <Route path="/market-place/flipkart-grocery" element={<FlipkartGrocery />} />
        <Route path="/market-place/flipkart-furniture" element={<FlipkartFurniture />} />
        <Route path="/market-place/flipkart-automotive" element={<FlipkartAutomotive />} />
        <Route path="/market-place/flipkart-bikini" element={<FlipkartBikini />} />
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
        <Route path="/market-place/tatacliq/product-photography" element={<TatacliqProductPhotography />} />
        <Route path="/market-place/tatacliq/footwear-photography" element={<TatacliqFootwearPhotography />} />
        <Route path="/market-place/tatacliq/fashion-photography" element={<TatacliqFashionPhotography />} />
        <Route path="/market-place/tatacliq/bikini-photography" element={<TatacliqBikiniPhotography />} />
        <Route path="/market-place/tatacliq/ecommerce-photography" element={<TatacliqEcommercePhotography />} />
        <Route path="/market-place/tatacliq/furniture-photography" element={<TatacliqFurniturePhotography />} />
        <Route path="/market-place/tatacliq/cosmetic-photography" element={<TatacliqCosmeticPhotography />} />
        <Route path="/market-place/tatacliq/medical-photography" element={<TatacliqMedicalPhotography />} />
        <Route path="/market-place/tatacliq/electronics-photography" element={<TatacliqElectronicsPhotography />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
