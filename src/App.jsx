import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { NoiseOverlay } from './components/NoiseOverlay';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/features/Features';
import { Philosophy } from './components/Philosophy';
import { Protocol } from './components/Protocol';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-dark transition-colors duration-700 ease-in-out selection:bg-accent selection:text-white pb-0">
        <NoiseOverlay />

        <Navbar />

        <main>
          <Hero />
          <Features />
          <Philosophy />
          <Protocol />
          <Pricing />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
