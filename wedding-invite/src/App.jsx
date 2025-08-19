import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --- Import your custom components from their files ---
import EventDetails from './components/EventDetails.jsx';
import Gallery from './components/Gallery.jsx';
import OurStory from './components/OurStory.jsx';

// --- Countdown component logic is inside App.jsx for styling ---
const Countdown = () => {
  // SET YOUR WEDDING DATE HERE
  const weddingDate = '2025-08-28T18:00:00';

  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center space-x-2 md:space-x-4 text-white">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="text-center bg-black/30 backdrop-blur-sm p-4 rounded-lg shadow-lg w-24">
          <div className="text-4xl md:text-5xl font-sans font-light tracking-tighter">{String(value).padStart(2, '0')}</div>
          <div className="text-xs uppercase tracking-wider text-white/80 mt-1">{interval}</div>
        </div>
      ))}
    </div>
  );
};

// Contact Component
const Contact = () => {
    // SVG Icons for contact details
    const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-3 text-secondary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81 .7A2 2 0 0 1 22 16.92z"></path></svg>;
    const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-3 text-secondary"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
    const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-3 text-secondary"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

    return (
        <div className="text-center">
            <h2 className="text-5xl font-serif text-primary mb-4">Get In Touch</h2>
            <p className="font-sans text-secondary max-w-xl mx-auto mb-10">
                For blessings, inquiries, or collaborations, please feel free to reach out. We would love to hear from you!
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <a href="tel:7538805677" className="flex items-center font-sans text-primary hover:text-accent transition-colors">
                    <PhoneIcon />
                    <span>+91 75388 05677</span>
                </a>
                <a href="mailto:vaishnu753880@gmail.com" className="flex items-center font-sans text-primary hover:text-accent transition-colors">
                    <MailIcon />
                    <span>vaishnu753880@gmail.com</span>
                </a>
                <a href="https://www.instagram.com/vaishnu_v13" target="_blank" rel="noopener noreferrer" className="flex items-center font-sans text-primary hover:text-accent transition-colors">
                    <InstagramIcon />
                    <span>@vaishnu_v13</span>
                </a>
            </div>
        </div>
    );
};


// A wrapper component for scroll animations
const AnimatedSection = ({ children, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.8 }}
      className={`py-20 px-6 md:px-12 ${className}`}
    >
      {children}
    </motion.section>
  );
};

// The Splash Screen Component
const SplashScreen = () => {
    return (
        <motion.div
            key="splash"
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-background"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }} // Fade out duration
        >
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.0 }}
                className="text-5xl md:text-8xl font-serif text-primary text-center"
            >
                <span>READY</span>
                <span className="block my-2 text-accent">FOR</span>
                <span>CELEBRATION</span>
            </motion.h1>
        </motion.div>
    );
};

// Scroll Down Arrow Component
const ScrollDownIndicator = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0, duration: 1.0 }}
            className="mt-10 flex flex-col items-center"
        >
            <span className="font-sans text-xs uppercase tracking-widest text-white/80 mb-2">Swipe Down</span>
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                }}
            >
                <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </motion.div>
        </motion.div>
    );
};


function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      <motion.div
        className="bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 1.0, delay: 0.5 }} 
      >
        <header className="h-screen bg-hero-bg bg-cover bg-center flex flex-col justify-center items-center text-white relative">
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 text-center p-4 flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.0 }}
              className="text-2xl md:text-4xl font-sans mb-4 tracking-wider">
              We Are Getting Married
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 1.5 }}
              className="text-5xl md:text-8xl font-serif mb-4 flex flex-col items-center">
              <span>Sanjay</span>
              <span className="text-accent">&</span>
              <span>Mahalakshmi</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 2.0 }}
              className="text-xl md:text-2xl font-sans">
              August 29, 2025
            </motion.p>
            
            <motion.div 
              className="mt-12 md:mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 2.5 }}
            >
              <Countdown />
            </motion.div>
            
            <ScrollDownIndicator />
          </div>
          
        </header>

        <main className="max-w-6xl mx-auto">
          <AnimatedSection>
            <OurStory />
          </AnimatedSection>

          <div className="w-full h-px bg-primary/20 my-8"></div>

          <AnimatedSection>
            <EventDetails />
          </AnimatedSection>

          <div className="w-full h-px bg-primary/20 my-8"></div>

          {/* *** CHANGED: Message is now part of the gallery section *** */}
          <AnimatedSection>
            <Gallery />
            <div className="text-center mt-12">
                <h3 className="text-4xl font-serif text-accent">We can't wait to see you!</h3>
                <p className="font-sans mt-2 text-primary text-2xl">❤️</p>
            </div>
          </AnimatedSection>

          <div className="w-full h-px bg-primary/20 my-8"></div>
          
          <AnimatedSection className="!py-0 !px-4">
            <div className="bg-white rounded-xl shadow-sm py-16">
                <Contact />
            </div>
          </AnimatedSection>
        </main>

        <footer className="text-center py-10 mt-20">
            <p className="text-sm text-secondary">Designed with love</p>
        </footer>
      </motion.div>
    </>
  );
}

export default App;
