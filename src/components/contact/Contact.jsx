import React from 'react';
import './Contact.css'
import emailPic from '../../images/email2.jpg'
import phonePic from '../../images/pho2.jpg'
import addressPic from '../../images/address.jpg'
import Footer from '../footer/Footer';
const Contact = () => {
  return (
    <section id="contact">
    <div class="contact container">
      <div>
        <h1 class="section-title">Contact <span>info</span></h1>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon"><img src={phonePic} /></div>
          <div class="contact-info">
            <h1>Phone</h1>
            <h2>+92 304 7533 611 </h2>
            <h2>+92 301 1110 793 </h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src={emailPic} /></div>
          <div class="contact-info">
            <h1>Email</h1>
            <h2>ameerhamzag75@gmail.com</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src={addressPic} /></div>
          <div class="contact-info">
            <h1>Address</h1>
            <h2>House no #21, Jinnah Town, Khanpur district RahimYar Khan, Pakistan</h2>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </section>

  );
}

export default Contact;
