/* eslint-disable no-unused-vars, max-len */

import './Header.css';
import React, { Component } from 'react';
import GitHubLogo from './Assets/github.png';
import Headroom from 'react-headroom';
import LinkedInLogo from './Assets/linkedin.png';
import { Navbar } from 'react-bootstrap';
import Resume from './Assets/ryanpencak.pdf';
import Scroll from 'react-scroll';
import Share from './Assets/share.png';

const scroll = Scroll.animateScroll;
const Link = Scroll.Link;

export default class Header extends Component {
  scrollToAbout() {
    scroll.scrollToTop();
  }

  scrollToEducation() {
    scroll.scrollTo(538);
  }

  scrollToExperience() {
    scroll.scrollTo(740);
  }

  scrollToProject() {
    scroll.scrollTo(1130);
  }

  scrollToContact() {
    scroll.scrollToBottom();
  }

  render() {
    return (
      <Headroom>
        <div className="Header">
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <div className="name">
                  <h3>
                    Ryan Pencak
                  </h3>
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
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <ul className="nav navbar-nav navbar-right">
               <li>
                  <Link to="" onClick={this.scrollToAbout} spy={true} smooth={true}>About</Link>

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
                  <Link to="contact" onClick={this.scrollToContact} spy={true} smooth={true}>Contact</Link>

                </li>
              </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
      </Headroom>
    );
  }
}
