import React, { useState } from 'react'
import "./Navbar.css"
import logo from "./Images/logo.png"
import facebook from "./Images/facebookicon.png"
import instagram from "./Images/instagramicon.png"
import whatsapp from "./Images/whatsappicon.png"

const Navbar = (props) => {

  const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
    console.log(elementRef.current.offsetTop)
  }
  const scrollToSectionForMobile = (elementRef) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop-320,
      behavior: "smooth"
    })
    console.log(elementRef.current.offsetTop)
  }

  const [ active, setActive ] = useState(false)
  const handleHamburger = () =>{
    setActive(true)
    document.getElementById("bar2").style.opacity = 0
    // eslint-disable-next-line
    document.getElementById("bar1").style.transform = "translateY(8px)"+"rotate(45deg)"
    // eslint-disable-next-line
    document.getElementById("bar3").style.transform = "translateY(-8px)"+"rotate(-45deg)"
  }
  const revertHamburger = () =>{
    setActive(false)
    document.getElementById("bar2").style.opacity = 1
    // eslint-disable-next-line
    document.getElementById("bar1").style.transform = "translateY(0)"+"rotate(0)"
    // eslint-disable-next-line
    document.getElementById("bar3").style.transform = "translateY(0)"+"rotate(0)"
  }
  return (
    <>
        <nav id='home'>
          <div className='logoContainer'>
            <li style={{textDecoration:"none"}}><div className='logoContainer2'><img id='logoImage' src={logo} alt={logo} /></div></li>
          </div>
          <div className='linksContainer'>
            <li onClick={()=>scrollToSection(props.services)} style={{textDecoration:"none"}}><span>SERVICES</span></li>
            <li onClick={()=>scrollToSection(props.projects)} style={{textDecoration:"none"}}><span>PROJECTS</span></li>
            <li onClick={()=>scrollToSection(props.about)} style={{textDecoration:"none"}}><span>ABOUT</span></li>
            <li onClick={()=>scrollToSection(props.contact)} style={{textDecoration:"none"}}><span>CONTACT</span></li>
          </div>
          <div className='sociallinksContainer'>
            <a href="https://www.facebook.com/ekodaproductions" target="_blank" rel="noreferrer"><img src={facebook} alt={facebook} /></a>
            <a href="https://www.instagram.com/ekodaproductions?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><img src={instagram} alt={instagram} /></a>
            <a href='https://wa.me/+919577479901/' target="_blank" rel="noreferrer"><img src={whatsapp} alt={whatsapp} /></a>
          </div>
          <div className='hamburger' onClick={()=>{
            if(active===false){
              handleHamburger()
            } else if(active===true){
              revertHamburger()
            }
          }}>
            <span className='bar' id='bar1'></span>
            <span className='bar' id='bar2'></span>
            <span className='bar' id='bar3'></span>
          </div>
        </nav>
        {(active===true) ?
        <div className='hamburgermenuContainer' id='hamburger'>
          <li onClick={()=>{scrollToSectionForMobile(props.services);setActive(false);revertHamburger()}} style={{textDecoration:"none",color:"white"}}><p>SERVICES</p></li>
          <li onClick={()=>{scrollToSectionForMobile(props.projects);setActive(false);revertHamburger()}} style={{textDecoration:"none",color:"white"}}><p>PROJECTS</p></li>
          <li onClick={()=>{scrollToSectionForMobile(props.about);setActive(false);revertHamburger()}} style={{textDecoration:"none",color:"white"}}><p>ABOUT</p></li>
          <li onClick={()=>{scrollToSectionForMobile(props.contact);setActive(false);revertHamburger()}} style={{textDecoration:"none",color:"white"}}><p>CONTACT</p></li>
        </div>
        :
        <>
        </>
        }
    </>
  )
}

export default Navbar