import React from 'react'
import { CardGroup, Card, Container } from 'react-bootstrap';


function Component3() {
  return (
    <div>
        <Container>
        <CardGroup>
  <Card className='mx-2'>
    <Card.Img variant="top" src="https://wallpapercave.com/wp/wp10469321.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='mx-2'>
    <Card.Img variant="top" src="https://wallpapercave.com/wp/wp7951374.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='mx-2'> 
    <Card.Img variant="top" src="https://wallpapercave.com/wp/wp10469351.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

        <br></br><br></br>

        </Container>
    </div>
  )
}

export default Component3