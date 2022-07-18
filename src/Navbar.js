import React from "react";
import {Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';

import './styles/substyles/navbar.css'


export default function Navabar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="https://myportfolio-frontend-website.herokuapp.com/"><img src="https://media-exp2.licdn.com/dms/image/C5603AQF9p1t2wwQh7w/profile-displayphoto-shrink_100_100/0/1651144180365?e=1661990400&v=beta&t=nhDjn_SIPSMXsR9nc8QFeJEUEwfn0PTPRIngdtOGhlk" className="brand-img"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/" className="adjust" aria-disabled>Home</Nav.Link>
        <Nav.Link href="/about" className="adjust">About</Nav.Link>
        <NavDropdown title="Social Media" className="adjust" id="collasible-nav-dropdown">
          <NavDropdown.Item href="https://www.linkedin.com/in/madhu-garapati-b193b4201/">Linkedin</NavDropdown.Item>
          <NavDropdown.Item href="https://github.com/7995356278">Github</NavDropdown.Item>
          <NavDropdown.Item href="https://www.facebook.com/madhu.garapati.1">Facebook</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="https://www.hackerrank.com/mk1240598">Hacker Rank</NavDropdown.Item>
          <NavDropdown.Item href="https://auth.geeksforgeeks.org/user/mk1240598/">GeeksForGeeks</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="/project" className="adjust">Projects</Nav.Link>
        <Nav.Link eventKey={2} href="https://www.google.com/maps/place/16%C2%B054'36.8%22N+81%C2%B045'05.6%22E/@16.9102203,81.7510128,171m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0xf8eed1b2d02d6022!7e2!8m2!3d16.9102191!4d81.75156" className="adjust">
          Location
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
