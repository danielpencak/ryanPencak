/* eslint-disable no-unused-vars, max-len */

import './Projects.css';
import { Col, Grid, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;

export default class Projects extends Component {
  render() {
    return (
      <Element name="projects">
        <div className="Projects">
          <Grid>
            <Row>
              <Col>
                <h1>Projects</h1>
                <h3 className="project">Algorithm Development<span>May 2017 – Present</span></h3>
                <h4><b>OCEAN, Argonne National Laboratory</b></h4>
                <ul>
                  <li>Developing Fortran code to implement the bi-Lanczos algorithm to transform matrices to tri diagonal form and compute the continued fraction for the eigenvalues</li>
                  <li>Implementing Fortran linear algebra packages LAPACK and BLAS for parallel GMRES solution to non symmetric systems</li>
                </ul>

                <h3 className="project">Text Analysis<span>Fall 2016</span></h3>
                <h4><b>Bucknell University Data Strucutures and Algorithms</b></h4>
                <ul>
                  <li>Data structures and algorithms final project</li>
                  <li>Python object oriented program for the comparison of text files</li>
                </ul>

                <h3 className="project">Engineering Project<span>Spring 2016</span></h3>
                <h4><b>Engineers Without Borders Project Team</b></h4>
                <ul>
                  <li>Worked in a team to design a sustainable water treatment system for the city of Don Juan, Dominican Republic</li>
                  <li>Researched various water purification methods and implementation costs for Don Juan’s school system</li>
                </ul>
              </Col>
            </Row>
          </Grid>
        </div>
      </Element>
    );
  }
}
