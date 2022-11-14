import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import "./Contact.css"
import { Zoom } from 'react-reveal';
import icon1 from "./Images/youtubeicon.png"
import icon2 from "./Images/whatsappicon.png"
import icon3 from "./Images/facebookicon.png"
import icon4 from "./Images/instagramicon.png"
import icon5 from "./Images/linkedinicon.png"
import icon7 from "./Images/clickhereicon.png"
import icon8 from "./Images/locationicon.png"
import icon9 from "./Images/emaillogo.png"
import icon10 from "./Images/calllogo.png"

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zin9aam', 'template_rkb55cj', form.current, '6PQkcDcKjoMRJJzUX')
      .then((result) => {
          console.log(result.text);
          window.alert("Message sent successfully");
      }, (error) => {
          console.log(error.text);
          window.alert("Error");
      });
      e.target.reset();
  };
  return (
    <>
      <div className='contactpageContainer' id='contact' ref={props.contact}>
        <div className='contactpageHeading'><p>CONTACT US</p></div>
          <Zoom>
            <div className='contactpageForm'>
              <form ref={form} onSubmit={sendEmail} className='formContainer'>
                  <input type="text" name="user_name" placeholder='Enter your name' required />
                  <input type="email" name="user_email" placeholder='Enter a valid email address' required />
                  <textarea type="text" name="message" placeholder='Enter your message' required />
                  <button type="submit" value="Send">Submit</button>
              </form>
            </div> 
          </Zoom> 
        <div className='contactpageFooter'>
          <div className='footerDiv1'>
            <div className='footerDiv1Line1'>
              <Zoom><img src={icon8} alt={icon8} /></Zoom>
              <p>Our Location &nbsp;:&nbsp;</p>
            </div>
            <div className='footerDiv1Line2'>
              <p>Google Map Link &nbsp;:&nbsp;</p>
              <a href='https://goo.gl/maps/xVy3CojHCUCg5jNW6' target="_blank" rel="noreferrer"><Zoom><img src={icon7} alt={icon7} /></Zoom></a>
            </div>
            <p>Our Address &nbsp;:&nbsp; House no. 1 (2nd floor), Asomi Path Railway colony road, Hatigarh Chariali Hatigarh, Guwahati, Assam , 781021</p>
          </div>
          <div className='footerDiv2'>
          <div className='footerDiv2Line'>
            <Zoom><img src={icon9} alt={icon9} /></Zoom>
            <p>Email us &nbsp;:&nbsp; ekodaproductions@gmail.com</p>
          </div>
          <div className='footerDiv2Line'>
            <Zoom><img src={icon10} alt={icon10} /></Zoom>
            <p>Call us &nbsp;:&nbsp; +919577479901</p>
          </div>
            <div className='footericonImages'>
              <a href='https://www.youtube.com/channel/UCnWLao6UvXoNSupz5jiDMiA' target='_blank' rel="noreferrer"><Zoom><img src={icon1} alt={icon1} /></Zoom></a>
              <a href='https://wa.me/+919577479901/' target='_blank' rel="noreferrer"><Zoom><img src={icon2} alt={icon2} /></Zoom></a>
              <a href='https://www.facebook.com/ekodaproductions' target='_blank' rel="noreferrer"><Zoom><img src={icon3} alt={icon3} /></Zoom></a>
              <a href='https://www.instagram.com/ekodaproductions?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer"><Zoom><img src={icon4} alt={icon4} /></Zoom></a>
              <a href='https://www.linkedin.com/in/ekoda-productions-249488218/' target='_blank' rel="noreferrer"><Zoom><img src={icon5} alt={icon5} /></Zoom></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact