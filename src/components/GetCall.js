import React from 'react'
import './Experience.css'
import { Image } from 'react-bootstrap';
import { MDBCard, MDBCardImage,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { ReactComponent as Svg4 } from './svgs/4.svg' 
import { ReactComponent as Svg5 } from './svgs/5.svg' 
import { ReactComponent as Svg6 } from './svgs/6.svg' 

import { Button } from 'react-bootstrap'
export default function GetCall() {
  return (
    <div id='wrapper'>
        
     <div id='con'>
          
          
          <h1>Get your Business<br></br>
          Right up There
</h1>
<div id='wr'>
<div style={{marginLeft:10}}>When you need intelligent answers to your toughest questions, we’re here to help. We’re just a call or email away! Don’t hang back from getting in touch with us. We’ll be glad to assist you.
<br />
<Button variant="outline-success" style={{marginTop:30}}>Request a Call Back</Button>


<MDBRow className='row-cols-1 row-cols-md-3 g-46 align-self-center' style={{maxWidth:"100vw", marginTop:90, marginLeft:0 }}>
    <MDBCol>
      <MDBCard style={{ marginTop: 70, minHeight:'340px', alignContent:'center'}}>
       <MDBCardBody style={{textAlign: 'center'}}>
          <MDBCardTitle>
            <Svg4 />
           
            <h1>300+</h1></MDBCardTitle>
          <MDBCardText>
          Business advices given over 10 years
          </MDBCardText>
         
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard style={{ marginTop: 70,  minHeight:'340px'}}>
    
        <MDBCardBody className='mx-auto d-block' style={{textAlign: 'center'}}>
         
        <Svg5 /> <MDBCardTitle>
        
          <h1>230+</h1>
</MDBCardTitle>
          <MDBCardText>
          Businesses guided and solution delivered over 10 years

</MDBCardText>
       
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard style={{ marginTop: 70,  minHeight:'340px'}}>
    
        <MDBCardBody style={{textAlign: 'center'}}>
          <Svg6 />
          <MDBCardTitle><h1>60+</h1></MDBCardTitle>
          <MDBCardText>
         Products delivered over 10 years


          </MDBCardText>

        </MDBCardBody>
      </MDBCard>
    </MDBCol>

  </MDBRow>
</div>

</div>
</div>
<div id='con'><img src='https://blackcoffer.com/wp-content/uploads/2019/04/img-callback.png' id='col'></img></div>
     
     </div>
  )
}
