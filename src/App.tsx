import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  return (
    <div className="relative min-h-screen SelectionColor">
      {/* Dynamic Background Noise/Shapes overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Sticky Bar */}
        <Navbar onOpenReservation={handleOpenReservation} />

        {/* Hero Section */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* About legacy section */}
        <About />

        {/* Why Choose Us info segment */}
        <WhyChooseUs />

        {/* Menu category filter and shopping cart section */}
        <Menu />

        {/* Photos and Lights Gallery */}
        <Gallery />

        {/* Testimonials block */}
        <Reviews />

        {/* Contact and Map Locator block */}
        <Contact />

        {/* Footer info links */}
        <Footer />
      </div>

      {/* Table Reservation Dialog Modal Overlay */}
      <ReservationModal isOpen={isReservationOpen} onClose={handleCloseReservation} />
    </div>
  );
}
