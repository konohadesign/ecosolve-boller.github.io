import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import ProblemSolution from "./components/ProblemSolution";
import ServiceCards from "./components/ServiceCards";
import { Technology } from "./components/Technology";
import { CaseStudies } from "./components/CaseStudies";
import { AboutShort } from "./components/AboutShort";
import ContactCTA from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { FAQ } from "./components/FAQ";
import ROICalculator from './components/ROICalculator';

function App() {
  return (
    <Router basename="/ecosolve-boller">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="font-sans text-gray-900 bg-gradient-to-b from-white via-blue-50 to-white min-h-screen w-full">
        <Header />
        <main className="pt-24">
          <Hero />
          <TrustSection />
          <ProblemSolution />
          <ServiceCards />
          <Technology />
          <ROICalculator />
          <CaseStudies />
          <AboutShort />
          <FAQ />
          <ContactCTA />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;