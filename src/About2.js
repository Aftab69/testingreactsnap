import React, { useState } from 'react'
import "./About2.css"
import cofounder1 from "./Images/cofounder1.jpg"
import cofounder2 from "./Images/cofounder2.jpg"
import icon1 from "./Images/facebookicon2.png"
import icon2 from "./Images/instagramicon2.png"
import achievement1 from "./Images/achievement1.jpg"
import achievement2 from "./Images/achievement2.jpg"
import achievement3 from "./Images/achievement3.jpg"
import achievement4 from "./Images/achievement4.jpg"
import achievement5 from "./Images/achievement5.jpg"
import achievement6 from "./Images/achievement6.jpg"
import article1 from "./Images/article1.png"
import article2 from "./Images/article2.png"
import article3 from "./Images/article3.png"
import article4 from "./Images/article4.png"
import Zoom from 'react-reveal/Zoom';

const About2 = () => {
  const [ image, setImage ] = useState()
  const [ popupdisplay, setPopupdisplay ] = useState({display:"none"})

  const handleAchievementpopup = (e) =>{
    e.preventDefault();
    setPopupdisplay({display:"flex"})
    setImage(e.target.name)
    disableScrolling()
  }
  const handleClosepopup = (e) =>{
    e.preventDefault();
    setPopupdisplay({display:"none"})
    enableScrolling()
  }
  const disableScrolling = () =>{
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

  const enableScrolling = () =>{
    window.onscroll=function(){};
}
  return (
    <>
    <div className='aboutpageEmptydiv'>
    </div>
    <div className='aboutpagesecondContainer'>
      <div className='cofoundersContainer'>
        <div className='cofoundersHeading'><p>CO-FOUNDERS</p></div>
        <div className='cofoundersContent'>
          <Zoom>
          <div className='cofounder1box'>
            <div className='cofounderImages'><img src={cofounder1} alt={cofounder1} /></div>
            <div className='cofoundersText'><p>Maaruf Bin Rafique</p></div>
            <div className='cofoundersText'><p>Cinematographer/Editor</p></div>
            <div className='iconImages'>
              <a href='https://www.facebook.com/maaruf21/' target="_black"><img src={icon1} alt={icon1} /></a>
              <a href='https://www.instagram.com/maaruf21/' target="_black"><img src={icon2} alt={icon2} /></a>
            </div>
          </div>
          </Zoom>
          <Zoom>
          <div className='cofounder2box'>
            <div className='cofounderImages'><img src={cofounder2} alt={cofounder2} /></div>
            <div className='cofoundersText'><p>Priyanka Sohoria</p></div>
            <div className='cofoundersText'><p>Writer/Director</p></div>
            <div className='iconImages'>
              <a href='https://www.facebook.com/priyanka.saharia.9' target="_black"><img src={icon1} alt={icon1} /></a>
              <a href='https://www.instagram.com/priyankasohoria/' target="_black"><img src={icon2} alt={icon2} /></a>
            </div>
          </div>
          </Zoom>
        </div>
      </div>
      <div className='achievementsContainer'>
        <div className='achievementsHeading'><p>ACHIEVEMENTS</p></div>
        <div className='achievementsContent'>
          <Zoom><img name={achievement1} id={achievement1} onClick={handleAchievementpopup} src={achievement1} alt={achievement1} /></Zoom>
          <Zoom><img name={achievement2} id={achievement2} onClick={handleAchievementpopup} src={achievement2} alt={achievement2} /></Zoom>
          <Zoom><img name={achievement3} id={achievement3} onClick={handleAchievementpopup} src={achievement3} alt={achievement3} /></Zoom>
          <Zoom><img name={achievement4} id={achievement4} onClick={handleAchievementpopup} src={achievement4} alt={achievement4} /></Zoom>
          <Zoom><img name={achievement5} id={achievement5} onClick={handleAchievementpopup} src={achievement5} alt={achievement5} /></Zoom>
          <Zoom><img name={achievement6} id={achievement6} onClick={handleAchievementpopup} src={achievement6} alt={achievement6} /></Zoom>
        </div>
      </div>
      <div className='articlesContainer'>
        <div className='articlesHeading'><p>ARTICLES</p></div>
        <div className='articlesContent'>
          <a href='https://www.instagram.com/p/CTwHOIBhpLs/?utm_medium=copy_link' target="_blank" rel="noreferrer" ><Zoom><img src={article1} alt={article1} /></Zoom></a>
          <a href='https://rupaliparda.com/archives/27692' target="_blank" rel="noreferrer" ><Zoom><img src={article2} alt={article2} /></Zoom></a>
          <a href='https://www.eastmojo.com/assam/2021/09/10/assamese-documentary-film-mon-pokhila-wins-global-recognition/' target="_blank" rel="noreferrer" ><Zoom><img src={article3} alt={article3} /></Zoom></a>
          <a href='https://assam.eastmojo.com/news/assam-news/assamese-documentary-film-mon-pokhila-wins-global-recognition/' target="_blank" rel="noreferrer" ><Zoom><img src={article4} alt={article4} /></Zoom></a>
        </div>
      </div>
      <div className='popupOutercontainer' style={popupdisplay}>
          <div onClick={handleClosepopup} className='popupclosingContainer'>X</div>
          <div className='popupInnercontainer'>
            <img src={image} alt={image} />
          </div>
      </div>
    </div>
    </>
  )
}

export default About2