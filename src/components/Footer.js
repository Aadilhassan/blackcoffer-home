import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin,BsTelephoneFill } from 'react-icons/bs';
import {ImLocation2,ImMail2} from 'react-icons/im'

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' style={{marginTop:50}} className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='4' md='12' className='mb-0 mb-md-0' style={{textAlign: 'left'}}>
            <h5 className='text-uppercase' style={{color:'maroon', fontWeight:5500}}>Headquarters
</h5>

            <p>
            Blackcoffer provide advanced analytic models of business processes to assist you in making optimal decisions.
            </p>
            
<p>
<BsTelephoneFill /> India, Phone: (+91) 74284 77468</p>
<p>
<ImLocation2 /> B-141/1, Street 18, Shyam Vihar Phase 1, Najafgarh, Delhi - 110043, India</p>
<p><ImMail2 /> hello@blackcoffer.com</p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'  style={{textAlign: 'left', }}>
            <h5 className='text-uppercase' style={{color:'maroon', fontWeight:5500}}>Europe</h5>

            <ul className='list-unstyled mb-0'>
              <li>
              
<ImLocation2 />38, St. James Street, Qawra, St. Paul's Bay, Malta, Europe

              </li>
            </ul>
            <h5 className='text-uppercase' style={{marginTop:20,color:'maroon', fontWeight:5500}}>USA</h5>

<ul className='list-unstyled mb-0'>
  <li>
  

  <ImLocation2 />1512 Anise Drive, Austin, TX 78741, USA


  </li>
</ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0' style={{textAlign:'left'}}>
            <h5 className='text-uppercase mb-0' style={{color:'maroon', fontWeight:5500}}>About us</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  About us
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  About Founder
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Team
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Our processes
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                Cost Calculator
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                 Testimonials
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
              Solutions
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  careers
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  FAQS
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol style={{textAlign:'left'}}><h5 style={{color:'maroon', fontWeight:5500}}>Blackcoffer Social links</h5>
          Taking seamless key performance indicators offline to maximise the long tail.
          <div style={{marginTop:50}}>        <BsFacebook  style={ {fontSize:40, padding:2}}/>
          <BsTwitter  style={ {fontSize:40, padding:2}}/><BsYoutube  style={ {fontSize:40, padding:2}}/><BsLinkedin  style={ {fontSize:40, padding:2}}/>
</div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://blackcoffer.com/'>
       Blackcoffer.com
        </a>
      </div>
    </MDBFooter>
  );
}