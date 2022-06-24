import React from 'react'
import './Nav.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, NavDropdown, Button, Form } from 'react-bootstrap'
import { MDBCol } from 'mdb-react-ui-kit';
export default function NavTop() {
  return (
    <div> <Navbar bg="light" expand="lg"  >
    <Container fluid >
      <Navbar.Brand href="#">
        <img
      src='https://blackcoffer.com/wp-content/uploads/2022/02/Blackcoffer-logo-new.png'
      className='logo'
      alt='Blackcoffer logo'
      height={60}
      width={'auto'}
      />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="me-auto grid "
        
         
        >
          <Nav.Link href="#action1" id='bold'>Home</Nav.Link>
      




          <NavDropdown title="Services" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
                Big Data & Analytics
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Application Devlopment
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Consultancy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Information Management
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
               HR & Staffing
              </NavDropdown.Item>
            </NavDropdown>



            <NavDropdown title="Industries" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
                Research and Academia
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
               Energy
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Healthcare
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Fast Moving Consumer Goods(FMCG)
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
            Banking Finance Service Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
               Supply Chain
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Organisations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
               Business Planning
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Human Resources
              </NavDropdown.Item>
            </NavDropdown>




            <NavDropdown title="Products" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
          dataOil
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
               DataIntel
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Blackcoffer Insights
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
               Jobs
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Freelance
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              BlackMarlin Style
              </NavDropdown.Item>
            </NavDropdown>




          <Nav.Link href="#" id='bold'>
            LSAlead
          </Nav.Link>

          <MDBCol md="4">
      <input className="form-control" type="text" id='searchhh' placeholder="Search" aria-label="Search" />
    </MDBCol>

    <div id='bttt'>
        <Button variant="btn btn-outline-success" id='btt' className='me-3'>Get a Demo</Button>{' '}
          <Button variant="btn btn-outline-info" id="btt" className='me-3'>Contact Us</Button>{' '}
          </div>

        </Nav>

        
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}
