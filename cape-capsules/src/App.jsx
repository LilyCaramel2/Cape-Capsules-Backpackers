import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import ValueProps from './sections/ValueProps';
import Pricing from './sections/Pricing';
import Cannabis420 from './sections/Cannabis420';
import Amenities from './sections/Amenities';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import Location from './sections/Location';
import Booking from './sections/Booking';
import FAQ from './sections/FAQ';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Pricing />
        <Cannabis420 />
        <Amenities />
        <Gallery />
        <Reviews />
        <Location />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
