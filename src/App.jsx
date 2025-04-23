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

const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

function App() {
  return (
    <Router {...router}>
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
            <Route path="/solutions" element={<div>Solutions Page</div>} />
            <Route path="/solutions/monitoring" element={<div>Monitoring Page</div>} />
            <Route path="/solutions/management" element={<div>Management Page</div>} />
            <Route path="/technologies" element={<div>Technologies Page</div>} />
            <Route path="/technologies/cues" element={<div>CUES Page</div>} />
            <Route path="/technologies/eniscope-air" element={<div>Eniscope Air Page</div>} />
            <Route path="/technologies/eniscope-ems" element={<div>Eniscope EMS Page</div>} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;