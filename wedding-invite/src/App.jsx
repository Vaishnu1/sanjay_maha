import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Countdown from './components/Countdown.jsx';
import EventDetails from './components/EventDetails.jsx';
import Gallery from './components/Gallery.jsx';
import OurStory from './components/OurStory.jsx';
// A wrapper component for scroll animations
const AnimatedSection = ({ children }) => {
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
      className="py-20 px-6 md:px-12"
    >
      {children}
    </motion.section>
  );
};

function App() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <header className="h-screen bg-hero-bg bg-cover bg-center flex flex-col justify-center items-center text-white relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center p-4">
           <motion.h2 
             initial={{ opacity: 0, y: -50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.0 }}
             className="text-2xl md:text-4xl font-sans mb-4 tracking-wider">
            We Are Getting Married
          </motion.h2>
          <motion.h1
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.0, delay: 0.5 }}
  className="text-5xl md:text-8xl font-serif mb-4 flex flex-col items-center">
  <span>Sanjay</span>
  <span>&</span>
  <span>Mahalakshmi</span>
</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.0 }}
            className="text-xl md:text-2xl font-sans">
            August 29, 2025
          </motion.p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <AnimatedSection>
          <Countdown />
        </AnimatedSection>

        <div className="w-full h-px bg-primary/20"></div>

        <AnimatedSection>
          <OurStory />
        </AnimatedSection>
        
        <div className="w-full h-px bg-primary/20"></div>

        <AnimatedSection>
          <EventDetails />
        </AnimatedSection>
        
        <div className="w-full h-px bg-primary/20"></div>

        <AnimatedSection>
          <Gallery />
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="text-center py-12 bg-secondary/20">
        <h3 className="text-3xl font-serif text-accent">We can't wait to see you!</h3>
        <p className="font-sans mt-2">❤️</p>
      </footer>
    </div>
  );
}

export default App;