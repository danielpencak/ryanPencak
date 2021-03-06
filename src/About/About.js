/* eslint-disable no-unused-vars, max-len */

import './About.css';
import { Col, Grid, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import Picture from './Assets/picture.JPG';
import Scroll from 'react-scroll';

const scroll = Scroll.animateScroll;
const Link = Scroll.Link;
const Element = Scroll.Element;

export default class About extends Component {
  render() {
    return (
      <Element name="about">
      <div className="About">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} sm={4} md={3} className="pic">
                <img className="headshot" src={ Picture } alt="Headshot"/>
              </Col>
              <Col xs={12} sm={8} md={9} className="summary">
                <p>
                  I am a graduating senior in Computer Engineering at Bucknell University. My experience comes from a range of electrical and computer science courses. I will be focussing in software development, taking courses in databasing and web stacking.
                </p>
                <p>
                  I have recently completed a research internship in the Center for Nanoscale Materials at Argonne National Laboratory. There I worked on algorithm development for an ab-initio software package for atomistic calculations.
                </p>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} sm={4} md={4} lg={4}>
                <h1 className="line">
                  Programming Languages
                </h1>
                <ul className="languages">
                  <li>Python (proficient)</li>
                  <li>C (proficient)</li>
                  <li>MIPS</li>
                  <li>Java</li>
                  <li>Fortran</li>
                  <li>JavaScript</li>
                  <li>MatLab (proficient)</li>
                  <li>Bash Script</li>
                </ul>
              </Col>
              <Col xs={12} sm={4} md={4} lg={4}>
                <h1>
                  Computer Science Courses
                </h1>
                <ul className="cs">
                  <li>Operating Systems - Fall 2017 (C)</li>
                  <li>Computer Organization and Programming (C and MIPS)</li>
                  <li>Data Structures and Algorithms (Python)</li>
                  <li>Intro to Computer Science (C)</li>
                  <li>AP Computer Science (Java)</li>
                </ul>
              </Col>
              <Col xs={12} sm={4} md={4} lg={4}>
                <h1>
                  Electrical Engineering Skills
                </h1>
                <ul className="electrical">
                  <li>Circuit Design and Analysis</li>
                  <li> Linear Systems and Signal Processing</li>
                  <li>PCB Design and Production</li>
                  <li>Ultiboard</li>
                  <li>Multisim</li>
                  <li>Digital Logic Design</li>
                  <li>Altera Quartus II (some experience)</li>
                  <li>VHDL</li>
                </ul>
              </Col>
            </Row>
          </Grid>

      </div>
    </Element>
    );
  }
}
