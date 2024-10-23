import React from 'react'
import {Carousel} from 'react-bootstrap';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Component2() {
  return (
    <div>
        <Container>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpapercave.com/wp/wp10469299.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpapercave.com/wp/wp10469348.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpapercave.com/wp/wp10469254.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </Container>
        <br></br><br></br>
    </div>
  )
}

export default Component2