import React from 'react'
import { Image } from 'react-bootstrap';
import { MDBCard, MDBCardImage,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { ReactComponent as Svg7 } from './svgs/7.svg'
export default function Team() {
  return (
    <div>
  

  <h1>Our Team</h1>
    <MDBRow className='row-cols-1 row-cols-md-3 g-46 align-self-center' style={{maxWidth:"100vw", marginTop:90, marginLeft:0 }}>
    <MDBCol>
      <MDBCard style={{ marginTop: 70, minHeight:'400px', alignContent:'center'}}>
      <Image src='https://blackcoffer.com/wp-content/uploads/2022/01/1-6.jpg' width={'100%'} style={{width:"50%", marginTop: -50}}  className='mx-auto d-block' roundedCircle={true}/>
        <MDBCardBody style={{textAlign: 'center'}}>
            <small >Founder & CEO</small>
          <MDBCardTitle>Ajay Bidyarthy
</MDBCardTitle>
          <MDBCardText style={{textAlign:'left'}}>
          He has been key in growing analytics and technologies in Advertisement, Banking, Financials, Securities, & Insurance, Energy, Entertainment, Fast Moving Consumer Goods, Government & Think Tanks, Healthcare, IT Services, Lifestyle, eCommerce & Online Marketplace, Production & Manufacturing, Research & Academia, Retail & Supply Chain.

          </MDBCardText>
    
          <hr />    <Svg7  />
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard style={{ marginTop: 70,  minHeight:'400px'}}>
    <Image src='https://blackcoffer.com/wp-content/uploads/2022/01/8.jpg' width={'100%'} style={{width:"50%", marginTop:-50}} className='mx-auto d-block' roundedCircle={true}/>
     
        <MDBCardBody className='mx-auto d-block' style={{textAlign: 'center'}}>
            <small>Chief Operating Officer (COO)</small>
          <MDBCardTitle>Uttam Anurag
</MDBCardTitle>

          <MDBCardText style={{textAlign:'left'}}>
         Specialties: My area of specialization lies in leadership, project management, strategic planning, creative strategy, critical thinking, 3D visualization, 3D modeling, tender management, surveying, structural analysis, and construction drawings.He is instrumental in driving project management and leadership for businesses and shaping project execution planning.
                  </MDBCardText>
        
          <hr />    <Svg7  />
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard style={{ marginTop: 70,  minHeight:'400px'}}>
    <Image src='https://blackcoffer.com/wp-content/uploads/2022/04/Untitled-design-37.png' width={'100%'} style={{width:"50%", marginTop:-50}} className='mx-auto d-block' roundedCircle={true}/>
     
        <MDBCardBody style={{textAlign: 'center'}}>
            <small>Chief Technology Officer (CTO)</small>
          <MDBCardTitle>Mani Vidyarthy</MDBCardTitle>
          <MDBCardText style={{textAlign:'left'}}>
          He is instrumental in driving technology and analytics for businesses and shaping decision support frameworks. He has gained expertise over the course of few years in Application Development, Social Media, SEO/SEM, Digital Strategy, Display Marketing & Remarketing, and Big Data Analytics, Branding, E-commerce, Mobile and App, Advertising, Campaigns.

          </MDBCardText>
        
          <hr />
    <Svg7  />
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

  </MDBRow>
  </div>
  )
}
