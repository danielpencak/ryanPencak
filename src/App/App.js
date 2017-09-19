/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import About from '../About/About.js';
import Education from '../Education/Education.js';
import Experience from '../Experience/Experience.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Projects from '../Projects/Projects.js';

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
