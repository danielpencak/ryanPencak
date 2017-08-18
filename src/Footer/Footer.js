import React, { Component } from 'react';
import './Footer.css';
import { Row, Col, NavItem, Navbar, Nav } from 'react-bootstrap';
import GitHubLogo from './Assets/github.png';
import LinkedInLogo from './Assets/linkedin.png';
import Resume from './Assets/ryanpencak.pdf';
import Share from './Assets/share.png';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="contact">
          <Row className="show-grid">
            <Col xs={12} sm={6} md={8}>
              <h3>Ryan Pencak</h3>
              <h4>Chicago, IL</h4>
              <h4>ryanpencak@gmail.com</h4>
            </Col>
            <Col xs={12} sm={6} md={4}>
              {/* <Navbar.Collapse> */}
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">About</NavItem>
                  <NavItem eventKey={1} href="#">Education</NavItem>
                  <NavItem eventKey={2} href="#">Experience</NavItem>
                  <NavItem eventKey={3} href="#">Project</NavItem>
                  <NavItem eventKey={4} href="#">Contact</NavItem>
                </Nav>
              {/* </Navbar.Collapse> */}
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
