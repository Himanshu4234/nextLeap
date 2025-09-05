import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyWorkWithUs from "./components/WhyWorkWithUs";
import HowWeWork from "./components/HowWeWork";
import ConnectWithUs from "./components/ConnectWithUs";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppFloatingButton/>

      <main className="flex-grow">
        <Routes>
          {/* 👇 Home page will show Hero + all sections */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutSection />
                <ServicesSection />
                <WhyWorkWithUs/>
                <HowWeWork/>
                <ConnectWithUs/>
                {/* <ContactSection /> */}
              </>
            }
          />

          {/* Other routes only show their page */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
