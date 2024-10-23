import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Component1() {
  try {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br>
        </br>

      </div>
    );
  } catch (error) {
    console.error('Error rendering Navbar component:', error);
    return <div>Failed to load the Navbar component.</div>;
  }
}

export default Component1;

