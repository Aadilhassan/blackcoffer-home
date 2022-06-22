import React from 'react'

import { MDBCard, MDBCardImage,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Aboutcard() {
  return (

    <MDBRow className='row-cols-1 row-cols-md-3 g-46 align-self-center' style={{maxWidth:"100vw", marginTop:-40, marginLeft:0}}>
    <MDBCol>
      <MDBCard style={{backgroundImage: `url("https://blackcoffer.com/wp-content/uploads/2022/02/bgn-boxes-01.jpg")`, backgroundPosition: 'center top', backgroundSize: 'cover', marginTop: 10}}>

        <MDBCardBody>
          <MDBCardTitle>Our Services</MDBCardTitle>
          <MDBCardText>
          At Blackcoffer, we put our customers first. We create business value and achieve critical company objectives by providing innovative, best-in-class consulting and IT solutions.

          </MDBCardText>
          <MDBBtn variant="primary">Explore our Solutions</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard style={{backgroundImage: `url("https://blackcoffer.com/wp-content/uploads/2022/02/bgn-boxes-02.jpg")`, backgroundPosition: 'center top', backgroundSize: 'cover', marginTop: 10}}>

        <MDBCardBody>
          <MDBCardTitle>Our Approach</MDBCardTitle>
          <MDBCardText>
          We take a pragmatic approach to creating new opportunities and solving complex problems. We are passionate about developing ideas, creating brilliant strategies for leading the digital revolution.

          </MDBCardText>
          <MDBBtn variant="primary">More about Blackcoffer</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard style={{backgroundImage: `url("https://blackcoffer.com/wp-content/uploads/2022/02/bgn-boxes-03.jpg")`, backgroundPosition: 'center top', backgroundSize: 'cover', marginTop: 10}}>

        <MDBCardBody>
          <MDBCardTitle>Blackcoffer Solutions</MDBCardTitle>
          <MDBCardText>
          Partnering with you, we guide your business into the future. We create ground-breaking strategies that unlock new levels of growth. We take great pains to ensure your ambitions.

          </MDBCardText>
          <MDBBtn variant="primary">Explore our Solutions</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

  </MDBRow>
  )
}
