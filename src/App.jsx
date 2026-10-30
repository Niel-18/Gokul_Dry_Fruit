import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Wholesale from './components/Wholesale';
import About from './components/About';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Products />
        <Wholesale />
        <About />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

