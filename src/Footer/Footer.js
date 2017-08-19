import React, { Component } from 'react';
import './Footer.css';
import { Row, Col, NavItem, Navbar, Nav } from 'react-bootstrap';
import GitHubLogo from './Assets/github.png';
import LinkedInLogo from './Assets/linkedin.png';
import Resume from './Assets/ryanpencak.pdf';
import Share from './Assets/share.png';
import Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;
let Link = Scroll.Link;

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
            <Col xs={12} sm={6} md={4}>
              {/* <Navbar.Collapse> */}
              {/* <Nav pullRight>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="about" spy={true} smooth={true}>About</Link>

                  </li>
                  <li>
                    <Link to="education" spy={true} smooth={true}>Education</Link>

                  </li>
                  <li>
                    <Link to="experience" spy={true} smooth={true}>Experience</Link>

                  </li>
                  <li>
                    <Link to="projects" spy={true} smooth={true}>Projects</Link>

                  </li>
                  <li>
                    <Link onClick={this.scrollToContact} spy={true} smooth={true}>Contact</Link>

                  </li>
                </ul>

              </Nav> */}
                {/* <Nav pullRight> */}
                {/* <div className="nav pull-right">
                  <NavItem onClick={this.scrollToAbout}>About</NavItem>
                  <Link className="footerNav" spy={true} smooth={true} to="about">Education</Link>
                  <Link className="footerNav" spy={true} smooth={true} to="education">Experience</Link>
                </div> */}
                {/* </Nav> */}
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
