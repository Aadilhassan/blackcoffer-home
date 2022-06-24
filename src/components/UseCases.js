import React from 'react'
import { Image, Button } from 'react-bootstrap';
import { MDBCard, MDBCardImage,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';


export default function UseCases() {
  return (
    <div>
        <h1>Use <span style={{color:'maroon'}}>cases</span></h1>
        <MDBRow className='row-cols-1 row-cols-md-3 g-46 align-self-center' style={{maxWidth:"100vw", marginTop:0, marginLeft:0 }}>
    <MDBCol>
      <MDBCard style={{backgroundImage: `url("https://blackcoffer.com/wp-content/uploads/2022/01/update-blog3-640x640.jpg")`, backgroundPosition: 'center top', backgroundSize: 'cover', marginTop: 10, minHeight:'300px', maxHeight:'300px'}}>

        <MDBCardBody>
          <MDBCardTitle style={{marginTop:'40%'}}><h3>Recommendation System Architecture</h3></MDBCardTitle>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard style={{backgroundImage: `url("https://blackcoffer.com/wp-content/uploads/2022/01/health_hero_primary-640x640.jpg")`, backgroundPosition: 'center top', backgroundSize: 'cover', marginTop: 10, minHeight:'300px', maxHeight:'300px'}}>

<MDBCardBody>
  <MDBCardTitle style={{marginTop:'40%' }}><h3>How do deep learning models predict old and new drugs that</h3></MDBCardTitle>

</MDBCardBody>
</MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard style={{backgroundImage: `url("https://blackcoffer.com/wp-content/uploads/2022/01/1-640x640.png")`, backgroundPosition: 'center top', backgroundSize: 'cover', marginTop: 10, minHeight:'300px', maxHeight:'300px'}}>

<MDBCardBody>
  <MDBCardTitle style={{marginTop:'40%'}}><h3>Centrality Measures & Their Meaning from the Network</h3></MDBCardTitle>

</MDBCardBody>
</MDBCard>
    </MDBCol>

  </MDBRow>
<center> <Button variant="outline-success" style={{marginTop:30}}><span style={{fontWeight:1500, fontSize:'30'}}>+</span> See More</Button>
</center>
 
    </div>
  )
}
