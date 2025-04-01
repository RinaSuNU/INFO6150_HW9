import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import LogoutButton from './LogoutButton';

function Layout() {

  return (
    <>
      <Navbar 
        bg="dark" 
        variant="dark" 
        expand="lg" 
        className="py-3 fixed-top"
      >
        <Container>
            <Navbar.Brand href="/" className="fs-3 fw-semibold">
                Job Seek
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/home" className="px-3 fs-6">
                        Home
                    </Nav.Link>
                    <Nav.Link href="/about" className="px-3 fs-6">
                        About
                    </Nav.Link>
                    <Nav.Link href="/jobLists" className="px-3 fs-6">
                      Job Listings
                    </Nav.Link>
                    <Nav.Link href="/companies" className="px-3 fs-6">
                    Company Showcase
                    </Nav.Link>
                    <Nav.Link href="/contact" className="px-3 fs-6">
                    Contact
                    </Nav.Link>
                    <Nav.Link href="/login" className="px-3 fs-6">
                    <LogoutButton />
                    </Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

      <main className="flex-grow-1 mt-5 pt-3"> 
      <Container className="py-4">
      <Outlet />
      </Container>
      </main>

      <footer className="bg-dark text-white py-1 fixed-bottom">
        <Container className="px-0">
          <p className="text-center mb-0" style={{fontSize: "10px"}}>
            © {new Date().getFullYear()} JobPortal - All rights reserved
          </p>
        </Container>
      </footer>
      </>
  );
}

export default Layout;