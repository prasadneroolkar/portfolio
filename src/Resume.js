import React from "react";
import { motion } from "framer-motion";

function Resume() {
  return (
    <>
      <motion.section
        className="about-section resume-section"
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="about_me  resume-div container">
          <div className="section-title">
            <h2>RESUME</h2>
            <p>Check my resume</p>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">Summary</h3>
              <div class="resume-item pb-0">
                <h4>Prasad Neroolkar</h4>
                <p>
                  Experienced front end developer who is comfortable working
                  with HTML/CSS, JavaScript to deliver exceptional customer
                  experiences.
                </p>
                <p></p>
                <ul className="emailcls-a">
                  <li>
                    Near Krishna Mantap, Chinchawada Chimbel, Panaji, Goa{" "}
                  </li>
                  <li>
                    <a href="tel:+917406996770">7406996770</a>
                  </li>
                  <li>
                    <a href="mailto:prasadneroolkar90@gmail.com">
                      prasadneroolkar90@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Master of computer application</h4>
                <h5>2011 - 2014</h5>
                <p>
                  Dr.Sheshgiri College of Engineering & Technology, Belgaum{" "}
                </p>
              </div>
              <div class="resume-item">
                <h4>Bachelor of computer application</h4>
                <h5>2009 - 2011</h5>
                <p>Karnatak University, Dharward </p>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Front End Developer </h4>
                <h5>2022 - Present</h5>
                <p>
                  <em>ScreenRoot Technologies Limited – Goa </em>
                </p>

                <p></p>
                <ul>
                  <li>Build websites using WordPress</li>
                  <li>
                    Bringing mock-ups to life using HTML, CSS, JavaScript.
                  </li>

                  <li>
                    Knowledge of the Three.js and animation library such as
                    GSAP.
                  </li>
                  <li>
                    Maintaining an organized workflow using a project management
                    tool (like Bitbucket).
                  </li>
                  <li>
                    Testing to identify bugs and technical issues before and
                    after deploying.{" "}
                  </li>
                </ul>
              </div>
              <div class="resume-item ">
                <h4>Front End Developer </h4>
                <h5>2019 - 2022</h5>
                <p>
                  <em> Webware.io – Goa </em>
                </p>

                <p></p>
                <ul>
                  <li>
                    {" "}
                    Developing websites with HTML, CSS, and JavaScript using
                    foundation framework
                  </li>
                  <li>
                    {" "}
                    Implement websites and landing pages with a responsive,
                    mobile-first approach{" "}
                  </li>
                  <li>Assessed UX and UI designs for technical feasibility </li>
                  <li> Mentor junior developers </li>
                </ul>
                <p></p>
              </div>
              <div class="resume-item">
                <h4>SAP B1 Functional Consultant </h4>
                <h5>2017 - 2019</h5>
                <p>
                  <em>Electronic Automation Pvt Ltd – Bangalore </em>
                </p>

                <p></p>
                <ul>
                  <li>Developing PLDs, Query Print Layouts</li>
                  <li>Writing SQL Queries, Views, Store Procedures</li>
                  <li>Maintaining SQL Backups, Restore Backups </li>
                  <li>
                    SAP installation, creating UDF, UDT based on the user
                    Requirements{" "}
                  </li>
                  <li>
                    Sound Knowledge in Administration, Master data, Human
                    Resource Modules{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Resume;
