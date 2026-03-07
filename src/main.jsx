import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AmazonPhotography from './pages/AmazonPhotography.jsx'
import AmazonFootwearPhotography from './pages/AmazonFootwearPhotography.jsx'
import AmazonFashionPhotography from './pages/AmazonFashionPhotography.jsx'
import AmazonMedicalPhotography from './pages/AmazonMedicalPhotography.jsx'
import AmazonElectronicsPhotography from './pages/AmazonElectronicsPhotography.jsx'
import AmazonGroceryPhotography from './pages/AmazonGroceryPhotography.jsx'
import AmazonFurniturePhotography from './pages/AmazonFurniturePhotography.jsx'
import AmazonAutomotivePhotography from './pages/AmazonAutomotivePhotography.jsx'
import AmazonBikiniPhotography from './pages/AmazonBikiniPhotography.jsx'
import FlipkartPhotography from './pages/FlipkartPhotography.jsx'
import FlipkartFootwear from './pages/FlipkartFootwear.jsx'
import FlipkartFashion from './pages/FlipkartFashion.jsx'
import FlipkartMedical from './pages/FlipkartMedical.jsx'
import FlipkartElectronics from './pages/FlipkartElectronics.jsx'
import FlipkartGrocery from './pages/FlipkartGrocery.jsx'
import FlipkartFurniture from './pages/FlipkartFurniture.jsx'
import FlipkartAutomotive from './pages/FlipkartAutomotive.jsx'
import FlipkartBikini from './pages/FlipkartBikini.jsx'
import MyntraPhotography from './pages/MyntraPhotography.jsx'
import MyntraFootwear from './pages/MyntraFootwear.jsx'
import MyntraFashionModel from './pages/MyntraFashionModel.jsx'
import MyntraBikini from './pages/MyntraBikini.jsx'
import AjioPhotography from './pages/AjioPhotography.jsx'
import AjioFootwear from './pages/AjioFootwear.jsx'
import AjioFashion from './pages/AjioFashion.jsx'
import AjioBikini from './pages/AjioBikini.jsx'
import Blog from './pages/Blog.jsx'
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
import EtsyFootwearPhotography from './pages/EtsyFootwearPhotography.jsx'
import EtsyFashionPhotography from './pages/EtsyFashionPhotography.jsx'
import EtsyBikiniPhotography from './pages/EtsyBikiniPhotography.jsx'
import EtsyElectronicsPhotography from './pages/EtsyElectronicsPhotography.jsx'
import EtsyFurniturePhotography from './pages/EtsyFurniturePhotography.jsx'
import EtsyHandicraftPhotography from './pages/EtsyHandicraftPhotography.jsx'
import EtsyEcommercePhotography from './pages/EtsyEcommercePhotography.jsx'
import EtsyFreelancerPhotography from './pages/EtsyFreelancerPhotography.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import Kids from './pages/Kids.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services/product-photography" element={<ProductPhotography />} />
        <Route path="/market-place/amazon-photography" element={<AmazonPhotography />} />
        <Route path="/market-place/amazon-footwear-photography" element={<AmazonFootwearPhotography />} />
        <Route path="/market-place/amazon-fashion-photography" element={<AmazonFashionPhotography />} />
        <Route path="/market-place/amazon-medical-photography" element={<AmazonMedicalPhotography />} />
        <Route path="/market-place/amazon-electronics-photography" element={<AmazonElectronicsPhotography />} />
        <Route path="/market-place/amazon-grocery-photography" element={<AmazonGroceryPhotography />} />
        <Route path="/market-place/amazon-furniture-photography" element={<AmazonFurniturePhotography />} />
        <Route path="/market-place/amazon-automotive-photography" element={<AmazonAutomotivePhotography />} />
        <Route path="/market-place/amazon-bikini-photography" element={<AmazonBikiniPhotography />} />
        <Route path="/market-place/Flipkart" element={<FlipkartPhotography />} />
        <Route path="/market-place/flipkart-footwear" element={<FlipkartFootwear />} />
        <Route path="/market-place/flipkart-fashion" element={<FlipkartFashion />} />
        <Route path="/market-place/flipkart-medical" element={<FlipkartMedical />} />
        <Route path="/market-place/flipkart-electronics" element={<FlipkartElectronics />} />
        <Route path="/market-place/flipkart-grocery" element={<FlipkartGrocery />} />
        <Route path="/market-place/flipkart-furniture" element={<FlipkartFurniture />} />
        <Route path="/market-place/flipkart-automotive" element={<FlipkartAutomotive />} />
        <Route path="/market-place/flipkart-bikini" element={<FlipkartBikini />} />
        <Route path="/market-place/Myntra" element={<MyntraPhotography />} />
        <Route path="/market-place/myntra-footwear" element={<MyntraFootwear />} />
        <Route path="/market-place/myntra-fashion-model" element={<MyntraFashionModel />} />
        <Route path="/market-place/myntra-bikini" element={<MyntraBikini />} />
        <Route path="/market-place/Ajio" element={<AjioPhotography />} />
        <Route path="/market-place/ajio-footwear" element={<AjioFootwear />} />
        <Route path="/market-place/ajio-fashion" element={<AjioFashion />} />
        <Route path="/market-place/ajio-bikini" element={<AjioBikini />} />
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
        <Route path="/market-place/tatacliq/product-photography" element={<TatacliqProductPhotography />} />
        <Route path="/market-place/tatacliq/footwear-photography" element={<TatacliqFootwearPhotography />} />
        <Route path="/market-place/tatacliq/fashion-photography" element={<TatacliqFashionPhotography />} />
        <Route path="/market-place/tatacliq/bikini-photography" element={<TatacliqBikiniPhotography />} />
        <Route path="/market-place/tatacliq/ecommerce-photography" element={<TatacliqEcommercePhotography />} />
        <Route path="/market-place/tatacliq/furniture-photography" element={<TatacliqFurniturePhotography />} />
        <Route path="/market-place/tatacliq/cosmetic-photography" element={<TatacliqCosmeticPhotography />} />
        <Route path="/market-place/tatacliq/medical-photography" element={<TatacliqMedicalPhotography />} />
        <Route path="/market-place/tatacliq/electronics-photography" element={<TatacliqElectronicsPhotography />} />
        <Route path="/market-place/etsy/footwear-photography" element={<EtsyFootwearPhotography />} />
        <Route path="/market-place/etsy/fashion-photography" element={<EtsyFashionPhotography />} />
        <Route path="/market-place/etsy/bikini-photography" element={<EtsyBikiniPhotography />} />
        <Route path="/market-place/etsy/electronics-photography" element={<EtsyElectronicsPhotography />} />
        <Route path="/market-place/etsy/furniture-photography" element={<EtsyFurniturePhotography />} />
        <Route path="/market-place/etsy/handicraft-photography" element={<EtsyHandicraftPhotography />} />
        <Route path="/market-place/etsy/ecommerce-photography" element={<EtsyEcommercePhotography />} />
        <Route path="/market-place/etsy/freelancer-photography" element={<EtsyFreelancerPhotography />} />
        <Route path="/gender/men" element={<Men />} />
        <Route path="/gender/women" element={<Women />} />
        <Route path="/gender/kids" element={<Kids />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
