import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import About from '../About/About.js';
import Education from '../Education/Education.js';
import Experience from '../Experience/Experience.js'
import Projects from '../Projects/Projects.js'
import Footer from '../Footer/Footer.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Footer />
      </div>
    );
  }
}
