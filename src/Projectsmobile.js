import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./Projectsmobile.css"
import ReactPlayer from "react-player"
// import useMediaQuery from "./useMediaQuery";
import Zoom from 'react-reveal/Zoom';

const Projectsmobile = (props) => {
  const breakpoint = 480;
  const [size, setSize] = useState({
    x: window.innerWidth
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth
    });
  useEffect(() => (window.onresize = updateSize), []);
  return (
    <div className='projectsmobilepageContainer' id='projects' ref={props.projects}>
      <div className='projectsmobilepageHeading'>
        <p>OUR PROJECTS</p>
      </div>
      <div className='projectsmobilepageContent'>
        {(size.x > breakpoint) ?
        <div>
          <Zoom><ReactPlayer className='eachVideoMobile' url='https://www.youtube.com/watch?v=-bpQpsO7mWs' controls width="480px" height="360px" /></Zoom>
          <Zoom><ReactPlayer className='eachVideoMobile' url='https://www.youtube.com/watch?v=qWxFXk5CWJQ' controls width="480px" height="360px"/></Zoom>          
          <Zoom><ReactPlayer className='eachVideoMobile' url='https://www.youtube.com/watch?v=s2xr1_Pr_6U' controls width="480px" height="360px"/></Zoom>
        </div>
          :
          <div>
          <Zoom><ReactPlayer className='eachVideoMobile' url='https://www.youtube.com/watch?v=-bpQpsO7mWs' controls width="320px" height="200px" /></Zoom>
          <Zoom><ReactPlayer className='eachVideoMobile' url='https://www.youtube.com/watch?v=qWxFXk5CWJQ' controls width="320px" height="200px"/></Zoom>          
          <Zoom><ReactPlayer className='eachVideoMobile' url='https://www.youtube.com/watch?v=s2xr1_Pr_6U' controls width="320px" height="200px"/></Zoom>
          </div>
         }
         <Link to='/musicvideos'><button>View More</button></Link>
        </div>  
      </div>
  )
}

export default Projectsmobile