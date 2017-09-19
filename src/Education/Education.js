/* eslint-disable no-unused-vars, max-len */

import './Education.css';
import { Col, Grid, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;

export default class Education extends Component {
  render() {
    return (
      <Element name="education">
        <div className="Education">
          <Grid>
            <Row>
              <Col>
                <h1>Education</h1>
                <h3 className="school"><b>Bucknell University, College of Engineering</b> <b className="bar">|</b> Lewisburg, PA <span>May 2018</span></h3>
                <h4>B.S. Computer Engineering</h4>
                <p>GPA: 3.5 | Dean's List</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </Element>
    );
  }
}
