import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Picture from './Assets/picture.JPG';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4} className="pic">
              <img className="headshot" src={ Picture } alt="Headshot"/>
            </Col>
            <Col xs={6} md={8} className="summary"></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
