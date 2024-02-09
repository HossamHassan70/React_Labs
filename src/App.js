import React, { Component } from 'react';
import HeroSection from './HeroSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Footer from './Footer';




class App extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <About />
        <br />
        <Skills />
        <Portfolio />
        <Footer />
      </>
    );
  }
}

export default App;
