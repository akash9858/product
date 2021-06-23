import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../Images/logo.png';
import './NavigationBar.css';
const NavigationBar = () => {
   return (
      <section  >
         <div className="container mb-5">
            <Navbar expand="lg">
               <Navbar.Brand className=""> <img src={logo} alt="LOGO" /> </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto ">
                     <Nav.Link className="me-4 text  " >Home</Nav.Link>
                     <Nav.Link className="me-4 text  " >Services</Nav.Link>
                     <Nav.Link className="me-4 text  " >Products</Nav.Link>
                     <Nav.Link className="me-4 text  " >Contact</Nav.Link>
                  </Nav>

                  <button className=" btn shopbtn"  >Shop Now</button>
               </Navbar.Collapse>
            </Navbar>
         </div>
      </section>
   );
};

export default NavigationBar;