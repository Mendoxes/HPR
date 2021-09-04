import React from "react";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";

function Home() {
  return (
    <div>
      <Particle params={particlesConfig} className="App-particles__container" />
      
      </div>
    
  );
}

export default Home;
