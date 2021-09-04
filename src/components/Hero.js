
import Big from "./big.png"
import React, { useEffect,useState } from 'react'
import '../index.css'
import Particle from "./particle.js"
import Home from "./Home.js"
import Home2 from "./Home2.js"
import {Link} from 'react-scroll'
import Carousel from 'react-bootstrap/Carousel'
import { Wave } from 'react-animated-text';
import TrackVisibility from 'react-on-screen';


function Hero() {

    
    useEffect(() => {
        const timer = setTimeout(() => {
          console.log(Particle);
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

      let [count, setCount] = useState(false)
      const showme = false; 
      let [styleC, setStyleC] = useState("")
      let [styleCC, setStyleCC] = useState("")
      let [pictureC, setPictureC] = useState("Choose Your Group")


      const ComponentToTrack = ({ isVisible }) => {
        const style = {
            background: isVisible ? 'red' : 'blue'
        };
        return <h1 className="title1"><Wave style={{width:300+"%"}}
        text="This is about section"
        effect="verticalFadeIn"
        effectChange={2.5}
        effectDirection='down'
        
        iterations={1}
       
        /> 
        
        
        </h1>;
    }



    const ComponentToTrack2 = ({ isVisible }) => {
        const style = {
            background: isVisible ? 'red' : 'blue'
        };
        return <div className="father"><h1 className="title2"> {pictureC}
        </h1>
        <div className="firstPic">
        <img onMouseEnter={()=>setPictureC(pictureC="Kitchen Appliances")} className="firstPic" src="http://cdn.onlinewebfonts.com/svg/img_162517.png"></img>

        
        </div>
        <p className="firstPicP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem</p>
   

<div className="firstPic2">
<img  onMouseEnter={()=>setPictureC(pictureC="Electronics")} className="firstPic2 ok22" src="https://static.thenounproject.com/png/37559-200.png"></img></div>
<p className="firstPicP2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem</p>

<div className="firstPic3">
        <img onMouseEnter={()=>setPictureC(pictureC="Gadgets")} className="firstPic3" src="http://cdn.onlinewebfonts.com/svg/img_415795.png"></img></div>
        <p className="firstPicP3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem</p>
    </div>;
    }

      
    return ( 
<div>

<Home></Home> 
    
    {/* <p className="mainText"><span className="moveMe2">H</span><span className="moveMe3">P</span><span className="moveMe">R</span>
    
    </p> */}
    <p className="sacramento">Honest Product Review</p>
    <Link  offset={-100}  to="about" spy={true} smooth={true}> <Particle background="transparent"></Particle></Link>
    {/* <button onClick={() => setCount(true)}>{count}</button> */}
  
    <TrackVisibility>
            {({ isVisible }) => isVisible && <ComponentToTrack />}
        </TrackVisibility>

      


   <div id="about" style={{height: 500}}>

    
        <div style={{display:"flex" , justifyContent:"space-evenly",alignItems:"center",marginTop:6+"rem"}}>
          <p className="text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi,Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi,Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi</p>
  <span style={{width:50 +"%" ,height:30+"%"}}>
  <Carousel fade>
  <Carousel.Item interval={3500}>
    <img
      className="d-block w-100"
      src="https://wristwatchnews.com/wp-content/uploads/2021/08/GBD-200-Lifestyle-11-702x394.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3500}>
    <img
      className="d-block w-100"
      src="https://www.audiovideopro.net/wp-content/uploads/2014/09/JVC-GY-LS300.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3500}>
    <img
      className="d-block w-100"
      src="https://cdn.mos.cms.futurecdn.net/xcYvQiqWJA3Xj48CXJoSzn.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </span>
  </div>
  
<div className="multiD"> 
 <div className={"blackD " + styleC}> <Home2></Home2><p onClick={() => [setStyleC( styleC = "redS"),setStyleCC( styleCC = "op")] }
 className={"firstS " + styleCC}> Open</p></div>
  <div className={"redD "+styleC}> <Home2></Home2> <p onClick={() => [setStyleC( styleC = "redS"),setStyleCC( styleCC = "op")] }
 className={"firstSS " + styleCC}> Valut</p></div>
 


<div className="ok2">
 <TrackVisibility once>
            {({ isVisible }) => isVisible && <ComponentToTrack2 />}
        </TrackVisibility>
</div>

 </div>

 <div>

</div>
  </div>




  
  




</div>


    )
}

export default Hero; 