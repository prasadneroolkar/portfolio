import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faShareAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
//import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Result = () => {
  return (<div className="sent-message">Your message has been sent. Thank you!</div>)
}

function Contact() {
  const [result, showresult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_60gbgim', 'template_jeupt7a', e.target, 'user_j1bkpNalp2j5qXYblCH2H')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
    showresult(true);
  };

  setTimeout(function () {
    showresult(false);

  }, 5000)
  return (
    <>
      <motion.section className="about-section contact-section" initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}>
        <div className=" container">
          <div className="section-title">
            <h2>CONTACT</h2>
            <p>CONTACT ME</p>
            <div className="row ">
              <div className="col-12 ">
                <div className="row mt-2">

                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="info-box">
                      <FontAwesomeIcon icon={faLocationArrow} />
                      {/* <FontAwesomeIcon icon="fa-thin fa-location-dot" /> */}
                      <h3>My Address</h3>
                      <p>Near Krishna Mantap, Chinchawada Chimbel, Panaji, Goa</p>
                    </div>
                  </div>

                  <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                    <div className="info-box">
                      <FontAwesomeIcon icon={faShareAlt} />
                      <h3>Social Profiles</h3>
                      <div className="social-links">
                        <a href="https://www.facebook.com/prasad.nerulkar/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                        <a href="https://www.instagram.com/d.e.e.p.r.a.a.j/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                        <a href='https://www.linkedin.com/in/prasad-neroolkar/' target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mt-4 d-flex align-items-stretch emailcls">
                    <div className="info-box">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <h3>Email Me</h3>
                      <p><a href="mailto:prasadneroolkar90@gmail.com">prasadneroolkar90@gmail.com</a></p>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4 d-flex align-items-stretch emailcls">
                    <div className="info-box">
                      <FontAwesomeIcon icon={faPhoneAlt} />
                      <h3>Call Me</h3>
                      <p><a href='tel:+917406996770'>7406996770</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="php-email-form mt-4" onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="fullname" className="form-control" id="fullname" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email_user" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
              {
                result ? <Result /> : null
              }
              {/* <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">Your message has been sent. Thank you!</div> */}
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>

        </div>

      </motion.section>


    </>
  )
}

export default Contact
