import React from "react";
import Particles from 'react-particles-js';

const particlesOptions= {
    particles: {    
        number:{
          value:150,
          density:{
            enable:true,
            value_area: 800,
          }
        }
      },
    interactivity:{
      events:{
        onhover:{
          enable:true,
          mode:'grab',      
      }
    },
    modes:{
      grab:{
        line_linked:{opacity:1}
      },
      distance:400
    },
      detect_on: 'window', 
      resize: "true",
    },
    retina_detect: true,
    }
    const ParticleCanvas =()=>{
        return(
            <Particles className="particles"
            params={particlesOptions}
      />
    
        )
            
    }



    export default ParticleCanvas;