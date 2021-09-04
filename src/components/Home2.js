import React from "react";
import Particle from "react-particles-js";
import particlesConfig2 from "../assets/particlesConfig2.json";

function Home() {
  return (
    <div>
      <Particle params={particlesConfig2} className="App-particles__container2" />
      
      </div>
    
  );
}

export default Home;
