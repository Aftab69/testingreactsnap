import React from 'react'
import "./Projects.css"
import ReactPlayer from "react-player"
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';

const Projects = (props) => {
  
  return (
    <>
    <div className='emptydivprojectspage'>
    </div>
      <div id='projects' className='projectspageContainer' ref={props.projects}>
        <div className='projectspageHeading'><span>OUR PROJECTS</span></div>
        <div className='videosContainer'>
            <div className='videoCategoryHeading'><p>Music Videos :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton1'>
                  <Zoom><ReactPlayer className='eachVideo' url='https://www.youtube.com/watch?v=-bpQpsO7mWs' controls width="720px" height="480px" /></Zoom>
                  <Zoom><ReactPlayer className='eachVideo' url='https://www.youtube.com/watch?v=POuwAy2JTLk' controls width="720px" height="480px" /></Zoom>
                </div>
                <Link style={{textDecoration:"none"}} to="/musicvideos"><button name="button1" id="button1" style={{display:"block"}}>View more</button></Link>
            </div>
            <div className='videoCategoryHeading'><p>Ad Films :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton2'>
                <Zoom><ReactPlayer className='eachVideo' url='https://www.youtube.com/watch?v=qWxFXk5CWJQ' controls width="720px" height="480px" /></Zoom>
                <Zoom><ReactPlayer className='eachVideo' url='https://www.youtube.com/watch?v=BBItkycabOM' controls width="720px" height="480px" /></Zoom>
              </div>
              <Link style={{textDecoration:"none"}} to="/adfilms"><button name="button2" id="button2">View more</button></Link>
            </div>
            <div className='videoCategoryHeading'><p>Fashion Films :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton3'>
                <Zoom><ReactPlayer className='eachVideo' url='https://www.youtube.com/watch?v=s2xr1_Pr_6U' controls width="720px" height="480px" /></Zoom>
              </div>
              <Link style={{textDecoration:"none"}} to="/fashionfilms"><button name="button3" id="button3">View more</button></Link>
            </div>
            <div className='videoCategoryHeading'><p>Short/Documentary/Travel Films :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton4'>
                <Zoom><ReactPlayer className='eachVideo' url='https://www.youtube.com/watch?v=IASy9tKBzlw' controls width="720px" height="480px" /></Zoom>
                <Zoom><ReactPlayer className='eachVideo' url='https://www.youtube.com/watch?v=_yQ1rMLRpGk' controls width="720px" height="480px" /></Zoom>
              </div>
              <Link style={{textDecoration:"none"}} to="/shortdocumentarytravelfilms"><button name="button4" id="button4">View more</button></Link>
            </div>
            <div className='videoCategoryHeading'><p>Behind the Scenes :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton5'>
                <Zoom><ReactPlayer className='eachVideo' url='https://www.youtube.com/watch?v=0bqRgquI-0g' controls width="720px" height="480px" /></Zoom>
                <Zoom><ReactPlayer className='eachVideo' url='https://www.youtube.com/watch?v=H2UnUAGWGak' controls width="720px" height="480px" /></Zoom>
              </div>   
              <Link style={{textDecoration:"none"}} to="/behindthescenes"><button name="button5" id="button5">View more</button></Link>
            </div>      
        </div>
      </div>
    </>
  )
}

export default Projects