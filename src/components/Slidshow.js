import React from "react";
import { Card, Container } from "react-bootstrap";
import "./slidshow.css"

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {/* {colors.map((backgroundColor, index) => ( */}
          <div
            className="slide"
            // key={index}
            style={{ backgroundImage:`url("https://blackcoffer.com/wp-content/uploads/2019/04/img-slider-01.jpg")`, backgroundRepeat: 'no-repeat', width:'100vw', height:"100vh", backgroundSize: 'cover' }}
          >
          <Container style={{marginTop:50}}>
            <h1 style={{color:'maroon', fontWeight: '900', fontSize: '6vw'}}>Find That</h1><p>
          <h1 style={{color:'dark-blue', fontWeight: '900', fontSize: '6vw'}}>  Missing Piece</h1>
            </p>
        
              <Container style={{width: "20rem" , maxWidth: '80vw', background:"transparent",  margin:0, padding: 0}}>
            Let us help you grow your business. At Blackcoffer our fleet of <br></br>
                experts is available to help you with any issues, and tailor the perfect
                solution for you!
              
                </Container> 
            
          </Container>
          </div>
          <div
            className="slide"
            // key={index}
            style={{ backgroundImage:`url("https://i.imgur.com/6FcmKTt.jpg")`, backgroundRepeat: 'no-repeat', width:'100vw', height:"100vh", backgroundSize: 'cover' }}
          >
          <Container style={{marginTop:50}}>
            <h1 style={{color:'maroon', fontWeight: '900', fontSize: '6vw'}}>Your Success</h1><p>
          <h1 style={{color:'dark-blue', fontWeight: '900', fontSize: '6vw'}}>  Our business</h1>
            </p>
        
              <Container style={{width: "80vw", background:"transparent", margin:0, padding: 0}}>
              Our consulting services are tailored to address our clients' most pressing concerns and opportunities.<br></br>
               Then we use our skills to solve those problems through data mining and research.
                </Container> 
            
          </Container>
          </div>
          <div
            className="slide"
            // key={index}
            style={{ backgroundImage:`url("https://blackcoffer.com/wp-content/uploads/2019/04/img-slider-03.jpg")`, backgroundRepeat: 'no-repeat', width:'100vw', height:"100vh", backgroundSize: 'cover' }}
          >
          <Container style={{marginTop:50}}>
            <h1 style={{color:'maroon', fontWeight: '900', fontSize: '6vw'}}>Devevering</h1><p>
          <h1 style={{color:'dark-blue', fontWeight: '900', fontSize: '6vw'}}>  the promise</h1>
            </p>
        
              <Container style={{width: "80vw", background:"transparent", margin:0, padding: 0}}>
              With Blackcoffer's app development services, you can give leads<br></br>
               the appropriate impression of your business without losing performance, 
                speed, or results.
                </Container> 
            
          </Container>
          </div>





  
      </div>

      {/* <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
}