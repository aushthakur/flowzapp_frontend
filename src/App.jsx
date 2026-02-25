import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingReviews from './components/FloatingReviews';
import ChatbotIcon from './components/ChatbotIcon';
import AnimatedCursor from './components/AnimatedCursor';
import FloatingLogin from './components/FloatingLogin';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import Integration from './pages/Integration';
import Pricing from './pages/Pricing';
import WhyFlowzapp from './pages/WhyFlowzapp';
import Documentation from './pages/Documentation';
import FreeTrial from './pages/FreeTrial';
import Register from './pages/Register';
import Login from './pages/Login';
import ParticlesBackground from './components/ParticlesBackground';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/why-flowzapp" element={<WhyFlowzapp />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/free-trial" element={<FreeTrial />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <ParticlesBackground />
        <AnimatedCursor />
        <FloatingLogin />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <FloatingReviews />
        <ChatbotIcon />
      </div>
    </Router>
  );
}

export default App;
