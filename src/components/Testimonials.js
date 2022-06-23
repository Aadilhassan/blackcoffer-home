import React from 'react'
import { Image } from 'react-bootstrap';
import { MDBCard, MDBCardImage,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Testimonials() {
  return (
  
  <div>
  
  <h1>Trusted by some</h1>
  <h1>Biggest Names</h1>
    <MDBRow className='row-cols-1 row-cols-md-3 g-46 align-self-center' style={{maxWidth:"100vw", marginTop:90, marginLeft:0 }}>
    <MDBCol>
      <MDBCard style={{ marginTop: 70, minHeight:'400px', alignContent:'center'}}>
      <Image src='https://blackcoffer.com/wp-content/uploads/2022/01/1-5.jpg' width={'100%'} style={{width:"50%", marginTop: -50}}  className='mx-auto d-block' roundedCircle={true}/>
        <MDBCardBody style={{textAlign: 'center'}}>
          <MDBCardTitle>Excellent Management!</MDBCardTitle>
          <MDBCardText>
          "Blackcoffer has provided excellent big data management expertise as a partner in ground breaking research and development. I look forward to continuing our work with great results and innovation."

          </MDBCardText>
          <p />
          ⭐ ⭐ ⭐ ⭐ ⭐
          <hr />
          <h6>Dr. Terri McCormick Dawson</h6>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard style={{ marginTop: 70,  minHeight:'400px'}}>
    <Image src='https://blackcoffer.com/wp-content/uploads/2022/01/2-4-640x640.jpg' width={'100%'} style={{width:"50%", marginTop:-50}} className='mx-auto d-block' roundedCircle={true}/>
     
        <MDBCardBody className='mx-auto d-block' style={{textAlign: 'center'}}>
          <MDBCardTitle>Great job solving
</MDBCardTitle>
          <MDBCardText>
          "Blackcoffer’s team did a great job solving issues we were having in an iterative fashion and adapted well to changing technical approaches."
          </MDBCardText>
          <p />
          ⭐ ⭐ ⭐ ⭐ ⭐
          <hr />
        <h6 className='sm'>Nejc Znidar</h6>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard style={{ marginTop: 70,  minHeight:'400px'}}>
    <Image src='https://blackcoffer.com/wp-content/uploads/2022/01/t1.png' width={'100%'} style={{width:"50%", marginTop:-50}} className='mx-auto d-block' roundedCircle={true}/>
     
        <MDBCardBody style={{textAlign: 'center'}}>
          <MDBCardTitle>Blackcoffer Solutions</MDBCardTitle>
          <MDBCardText>
          "Blackcoffer’s team did a great job solving issues we were having in an iterative fashion and adapted well to changing technical approaches."

          </MDBCardText>
          <p/>
          ⭐ ⭐ ⭐ ⭐ ⭐
          <hr />
        <h6>Prof. Dr. Sebnem Kalemli-Ozcan</h6>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

  </MDBRow>
  </div>
  )
}
