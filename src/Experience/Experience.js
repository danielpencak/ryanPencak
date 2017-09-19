/* eslint-disable no-unused-vars, max-len */

import './Experience.css';
import { Col, Grid, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;

export default class Experience extends Component {
  render() {
    return (
      <Element name="experience">
        <div className="Experience">
          <Grid>
            <Row>
              <Col>
                <h1>Experience</h1>
                <h3 className="job"><b>Argonne National Laboratory</b> <b className="bar">|</b> Lemont, IL <span>May 2017 – August 2017</span></h3>
                <h4>Summer Research Intern, Center for Nanoscale Materials, Theory and Modeling Group</h4>
                <ul>
                  <li>Algorithm development for OCEAN, an ab-initio software package for DFT and BSE calculations of chemical structures</li>
                  <li>Utilizing Materials Project package pymatgen to develop a Python script for OCEAN input generation based on material ID</li>
                  <li>Benchmarking pseudopotentials for XANES calculations to increase user experience and computational accuracy</li>
                </ul>

                <h3 className="job"><b>Northwestern University School of Law</b> <b className="bar">|</b> Chicago, IL <span>July 2015 – August 2015</span></h3>
                <h4>Summer Research Assistant for Professor Philip Postlewaite</h4>
                <ul>
                  <li>Edited revised portions of Professor Postlewaite’s International Tax Treatise</li>
                  <li>Assisted with tax research</li>
                  <li>Attended Professor Postlewaite’s course on International Taxation</li>
                </ul>
              </Col>
            </Row>
          </Grid>
        </div>
      </Element>
    );
  }
}
