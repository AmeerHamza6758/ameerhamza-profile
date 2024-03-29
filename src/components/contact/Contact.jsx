import React from 'react';
import './Contact.css'
import emailPic from '../../images/email2.jpg'
import phonePic from '../../images/pho2.jpg'
import addressPic from '../../images/address.jpg'
import Footer from '../footer/Footer';
const Contact = () => {
  return (
    <section id="contact">
    <div className="contact container">
      <div>
        <h1 className="section-title">Contact <span>info</span></h1>
      </div>
      <div className="contact-items">
        <div className="contact-item">
          <div className="icon"><img src={phonePic} alt='Phone'/></div>
          <div className="contact-info">
            <h1>Phone</h1>
            <h2><a href='tel'>+92 304 7533 611</a></h2>
            <a href='tel'><h2>+92 301 1110 793</h2></a>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src={emailPic} alt='Email'/></div>
          <div className="contact-info">
            <h1>Email</h1>
            <h2><a href="mailto:webmaster@example.com">ameerhamzag75@gmail.com</a></h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src={addressPic} alt='Address'/></div>
          <div className="contact-info">
            <h1>Address</h1>
            <address>Khanpur District RahimYar Khan, Pakistan</address>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </section>

  );
}

export default Contact;
