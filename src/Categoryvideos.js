import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import "./Categoryvideos.css"
import ReactPlayer from 'react-player/youtube'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import logo from "./Images/logo.png";
import useMediaQuery from "./useMediaQuery";

const Musicvideos = (props) => {
  const matches = useMediaQuery("(min-width: 768px)");
  const [ youtubeUrls, setyoutubeUrls ] = useState([])
  const [ heading, setHeading ] = useState("")
  useEffect(()=>(
    // eslint-disable-next-line
    setyoutubeUrls(props.data),
    // eslint-disable-next-line
    setHeading(props.pageheading),
    // eslint-disable-next-line
    window. scrollTo(0, 0)
  ),[props])
  return (
    <>
    <Helmet>
        <title>Ekoda Productions | {heading}</title>
        <meta name="description" content="Videos produced by Ekoda Productions." />
        <meta name="keywords" content="ekoda, ekoda productions, production house, film making, documentaries, music video shoots, ad shoots, cinematography, script writing" />
    </Helmet>
    <div className='categoryvideosBackground'>
      <div className='categoryvideosHeading'>
          <Link to="/"><img id='logoImage' className='logoImage' src={logo} alt={logo}/></Link>
        <p>{heading}</p>
      </div>
      <div className='filterContainer'>
        <Link to="/musicvideos"><button>MUSIC VIDEOS</button></Link>
        <Link to="/adfilms"><button>AD FILMS</button></Link>
        <Link to="/fashionfilms"><button>FASHION FILMS</button></Link>
        <Link to="/shortdocumentarytravelfilms"><button>SHORT / DOCUMENTARY / TRAVEL FILMS</button></Link>
        <Link to="/behindthescenes"><button>BEHIND THE SCENES</button></Link>
      </div>
      <div className='categoryvideosContent'>
        {youtubeUrls.map((each)=>(
          (matches) ?
          <><Zoom><ReactPlayer className='eachCategoryVideo' url={each} controls width="768px" height="580px" /></Zoom></>
          :
          <><Zoom><ReactPlayer className='eachCategoryVideo' url={each} controls width="320px" height="180px" /></Zoom></>
        ))}
      </div>
    </div>
    </>
  )
}

export default Musicvideos