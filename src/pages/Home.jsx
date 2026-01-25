import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import About from "../components/About";
import Projects from "../components/Projects";
import Galery from "../components/Galery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <Projects />
      <Brands />
      <Galery />
      <Brands />
      <About />
      <Brands />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
