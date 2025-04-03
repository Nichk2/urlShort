import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import InputUrl from './Components/InputUrl';
import Statistics from './Components/Statistics';
import Cta from './Components/CTA';
import Footer from './Components/Footer';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation(); 

  // Define animation variants that can be used for all components
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2 // Creates a staggered effect for child elements
      } 
    }
  };
  
  // Child animation variants (for staggered animations)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <motion.div variants={itemVariants}>
                <Header useAnimation={false} /> {/* I'm turning off the header animation */}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Hero 
                  headline={'More than just shorter links'}
                  paragraph={'Build your brand`s recognition and get detailed insights on how your links are performing.'}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <InputUrl/>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Statistics/>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Cta/>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Testimonials/>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Footer/>
              </motion.div>
            </motion.div>
          }
        />

        {/* Pricing Page */}
        <Route
          path="/pricing"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <motion.div variants={itemVariants}>
                <Header useAnimation={false} /> 
              </motion.div>

              <motion.div variants={itemVariants}>
                <Pricing/>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Footer/>
              </motion.div>
            </motion.div>
          }
        />

        <Route
          path="/about"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <motion.div variants={itemVariants}>
                <Header useAnimation={false} />
              </motion.div>

              <motion.div variants={itemVariants}>
                <AboutUs/>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Footer/>
              </motion.div>
            </motion.div>
          }
        />
      </Routes>

      
    </AnimatePresence>
  );
}

export default App;