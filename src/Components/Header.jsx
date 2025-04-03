import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../assets/images/logo.svg';

export default function Header({ useAnimation = true }) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants for the mobile menu
  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: "-100%", transition: { duration: 0.3 } },
  };

  // Animation variants for the overlay
  const overlayVariants = {
    open: { opacity: 0.7, transition: { duration: 0.3 } },
    closed: { opacity: 0, transition: { duration: 0.3 } },
  };

  // Animation variants for the burger icon
  const burgerVariants = {
    open: { rotate: 45, y: 6 },
    closed: { rotate: 0, y: 0 },
  };

  const middleLineVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomLineVariants = {
    open: { rotate: -45, y: -6 },
    closed: { rotate: 0, y: 0 },
  };

  // Create a base header component that can be wrapped in motion if needed
  const headerContent = (
    <>
      {/* Overlay that appears when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-10"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      <header className='m-4 sm:m-8 md:m-12 lg:m-15 relative z-20'>
        <nav className='flex justify-between items-center'>
          {/* Left Side: Logo and Navigation Links */}
          <div className='flex items-center gap-6 lg:gap-8'>
            {/* Replace the img tag with a Link component */}
            <Link to="/">
              <img src={Logo} alt="logo" className='w-24 sm:w-28 md:w-32 lg:w-36' />
            </Link>
            <ul className='hidden md:flex gap-4 lg:gap-6'>
              <li>
                <Link to='/about' className='font-medium text-li font-poppins hover:text-primary transition-colors'>
                  About us
                </Link>
              </li>
              <li>
                <Link to='/pricing' className='font-medium text-li font-poppins hover:text-primary transition-colors'>
                  Pricing
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Right Side: Burger Menu (sm) and Auth Buttons (md, lg) */}
          <div className='flex items-center gap-4 lg:gap-6'>
            {/* Burger Menu Button */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className='w-6 h-6 md:hidden cursor-pointer focus:outline-none z-30'
            >
              <motion.div className='space-y-1'>
                {/* Top Line */}
                <motion.span
                  className={`block w-6 h-1 ${isOpen ? 'bg-white' : 'bg-black'} transition-colors duration-300`}
                  variants={burgerVariants}
                  animate={isOpen ? "open" : "closed"}
                ></motion.span>
                {/* Middle Line */}
                <motion.span
                  className={`block w-6 h-1 ${isOpen ? 'bg-white' : 'bg-black'} transition-colors duration-300`}
                  variants={middleLineVariants}
                  animate={isOpen ? "open" : "closed"}
                ></motion.span>
                {/* Bottom Line */}
                <motion.span
                  className={`block w-6 h-1 ${isOpen ? 'bg-white' : 'bg-black'} transition-colors duration-300`}
                  variants={bottomLineVariants}
                  animate={isOpen ? "open" : "closed"}
                ></motion.span>
              </motion.div>
            </button>

            {/* Login and Sign Up - Hidden on sm screens, visible on md and lg screens */}
            <div className='hidden md:flex gap-4 lg:gap-6 items-center'>
              <a href="#" className='font-medium text-li font-poppins hover:text-primary transition-colors'>
                Login
              </a>
              <button className='bg-primary text-white px-[30px] py-[15px] font-bold rounded-4xl cursor-pointer font-poppins hover:opacity-70 transition-opacity ease-in'>
                Sign Up
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu animated */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='md:hidden mt-4 bg-white p-4 rounded-lg shadow-lg z-20'
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul className='flex flex-col items-center gap-4'>
                <li>
                  <Link to="about" className='font-medium text-li font-poppins hover:text-primary transition-colors'>
                    About us
                  </Link>
                </li>
                <li>
                  <a href="#" className='font-medium text-li font-poppins hover:text-primary transition-colors'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className='font-medium text-li font-poppins hover:text-primary transition-colors'>
                    Login
                  </a>
                </li>
                <li className='w-full'>
                  <button className='bg-primary text-white px-4 py-2 font-medium rounded-3xl cursor-pointer font-poppins hover:opacity-70 transition-opacity ease-in w-full'>
                    Sign Up
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );

  // This allows the App component to handle the animations
  if (!useAnimation) {
    return headerContent;
  }

  // Otherwise, use the component's own animations
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {headerContent}
    </motion.div>
  );
}