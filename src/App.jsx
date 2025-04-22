import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import ProblemSolution from "./components/ProblemSolution";
import { ServiceCards } from "./components/ServiceCards";
import { Technology } from "./components/Technology";
import { CaseStudies } from "./components/CaseStudies";
import { AboutShort } from "./components/AboutShort";
import ContactCTA from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { FAQ } from "./components/FAQ";
import ROICalculator from './components/ROICalculator';
import { Industries } from './pages/Industries';
import { IndustryDetail } from './pages/IndustryDetail';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-gradient-to-b from-white via-blue-50 to-white min-h-screen w-full">
        <Header />
        <main className="pt-24">
          <Routes>
            <Route path="/" element={
              <>
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
              </>
            } />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:id" element={<IndustryDetail />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;