import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Accordion from "./components/Accordian";
import NewSection from "./components/NewSection";
import OurTeam from "./components/OurTeam";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const App = () => {




  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Header />

      <Features />

      <About />

      <Benefits/>

      <OurTeam/>

<NewSection/>

      <Testimonials/>

      <Pricing/>

      <Accordion />

      <Footer/>
    </>
  );
};

export default App;
