import React from "react";
import {BrowserRouter,Route,Link}from 'react-router-dom';
import { Container,Nav,Navbar } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import ServiceDetail from "./ServiceDetail";


function Router() {
  return (
    <div>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark" >
          <Container className="Nav">
            <Nav className="me-auto">
              <div className="nav-links">
              <Link to="/" style={{marginRight:"50px", textDecoration:"none"}}>Home</Link>
              <Link to="/about" style={{marginRight:"50px", textDecoration:"none"}}>About</Link>
              <Link to="/contact" style={{marginRight:"50px" , textDecoration:"none"}}>Contact</Link>
              <Link to="/services" style={{marginRight:"50px", textDecoration:"none"}}>Services</Link>
              </div>
            </Nav>
          </Container>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route path="/service/service_details/:id" component={ServiceDetail} />
      </BrowserRouter>
    </div>
  );
}

export default Router;
