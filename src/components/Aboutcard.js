import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Container, Nav, NavDropdown, Button, Form } from 'react-bootstrap'

export default function Aboutcard() {
  return (
    <div id='card-container'  style={{marginTop: -40, justifyContent: 'space-around', display: 'flex', wrap:'nowrap'}} >
        
    <Card style={{ width: '23.33vw' ,}} className='car'   >
      <Card.Img variant="top" src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2016/10/camera-photo-lens-stock-images.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22.33vw', }} id='card'>
      <Card.Img variant="top" src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2016/10/camera-photo-lens-stock-images.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22.33vw', }} id="card">
      <Card.Img variant="top" src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2016/10/camera-photo-lens-stock-images.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
