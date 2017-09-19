/* eslint-disable no-unused-vars*/

import './Footer.css';
import { Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import GitHubLogo from './Assets/github.png';
import LinkedInLogo from './Assets/linkedin.png';
import Resume from './Assets/ryanpencak.pdf';
import Scroll from 'react-scroll';
import Share from './Assets/share.png';

const scroll = Scroll.animateScroll;

export default class Footer extends Component {
  scrollToAbout() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div className="Footer">
        <div className="contact">
          <Row className="show-grid">
            <Col xs={12} sm={6} md={8}>
              <h3>Ryan Pencak</h3>
              <h4>Chicago, IL</h4>
              <h4 className="email">ryanpencak@gmail.com</h4>
            </Col>
          </Row>
        </div>
        <div className="subFooter">
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <div className="links">
                <a className="anchors" href="https://github.com/RyanPencak">
                <img className="gitHubLogo" src={ GitHubLogo } alt={ 'GitHub' } />
                </a>
                <a className="anchors" href="https://www.linkedin.com/in/ryanpencak">
                <img className="linkedInLogo" src={ LinkedInLogo } alt={ 'GitHub' } />
                </a>
                <a className="anchors" href={ Resume }>
                  <img className="share" src={ Share } alt={ 'Resume' } />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
