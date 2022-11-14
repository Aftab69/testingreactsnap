import React ,{ useState, useEffect } from 'react'
import "./Home.css"
import useMediaQuery from "./useMediaQuery";
import showreel from "./Images/Showreel.mp4"
import showreelmobile from "./Images/showreelmobile.mp4"
import loadinggif from "./Images/loading.gif"
import logo from "./Images/logo.png"
import icon1 from "./Images/scrolltopicon.png"

const Home = () => {

  const matches = useMediaQuery("(min-width: 769px)");

  const disableScrolling = () =>{
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}
  const enableScrolling = () =>{
    window.onscroll=function(){};
}
  const [ loading, setLoading ] = useState(true)
  const loadingfunc = () =>{
    setLoading(false)
    enableScrolling()
    document.body.style.overflowY = "scroll";
  }
  useEffect(()=>{
    document.body.style.overflowY = "hidden";
    disableScrolling()
    setTimeout( loadingfunc , 3000)
    // eslint-disable-next-line
  },[loadingfunc])

  const handleTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <>
    {(matches) ?
      <>
      <div id='homepage' className='homepageContainer'>
      <video src={showreel} autoPlay loop muted />
     </div>
     <div className='showreelButtonContainer'>
        <a href='https://www.youtube.com/watch?v=siXxsNosnGs' target="_blank" rel="noreferrer"><button id='showreelButton'>WATCH SHOWREEL</button></a>
     </div>
     <div className='scrolltotopContainer'>
      <img onClick={handleTop} src={icon1} alt={icon1} />
     </div>
     </>
     :
     <>
      <div id='homepage' className='homepageContainer'>
      <video src={showreelmobile} autoPlay loop muted />
      </div>
      <div className='showreelButtonContainerMobile'>
      <a href='https://www.youtube.com/watch?v=siXxsNosnGs' target="_blank" rel="noreferrer"><button id='showreelButton'>WATCH SHOWREEL</button></a>
      </div>
    </>
    }
       
    { loading === true ?
      <div className='loadingpageContainer'>
          <img id='logoImageLoading' src={logo} alt={logo} />
          <img src={loadinggif} alt={loadinggif} />
      </div> :
      <></>
    }
    </>
  )
}

export default Home