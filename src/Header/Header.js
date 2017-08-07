import React, { Component } from 'react';
import { Navbar, NavItem, Nav} from 'react-bootstrap';
import GitHubLogo from './Assets/github.png';
import LinkedInLogo from './Assets/linkedin.png';
import Resume from './Assets/ryanpencak.pdf';
import Share from './Assets/share.png';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
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
            <Nav pullRight>
              <NavItem eventKey={1} href="#">About</NavItem>
              <NavItem eventKey={1} href="#">Education</NavItem>
              <NavItem eventKey={2} href="#">Experience</NavItem>
              <NavItem eventKey={3} href="#">Project</NavItem>
              <NavItem eventKey={4} href="#">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
