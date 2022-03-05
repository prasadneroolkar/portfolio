import React from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { motion } from 'framer-motion';

function About() {

    // var years = new Date();
    return (
        <>
            <motion.section className="about-section"
            initial={{ opacity:0, y: 500 }}
                    animate={{ opacity:1, y: 0 }}
                    transition={{ duration: 0.3,  ease:'easeInOut' }}
            >
                <motion.div className="about_me container" >
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Learn more about me</p>
                    </div>
                    <div className="row">
                        {/* <div className="col-lg-4"><img src="/images/prasad-new.png" className="img-fluid" /></div> */}
                        <div className="col-lg-12">
                            <div className="aboutme-content" >
                                {/* <h3>Front End Developer</h3> */}
                                <p>
                                    My name is Prasad Neroolkar. I,m in love with programming, 
                                    I enjoy learning about new technologies. My main focus has mostly been on
                                    front-end development. If iam not on my computer , i am at gym, riding bike or spending time 
                                    with family.
                        
                                </p>
                                <div className="row mt-5">
                                    <div className="col-lg-6 emailcls-a">
                                        <ul>

                                            <li><ChevronRightIcon /><strong>Birthday:</strong> 11 August 1991</li>
                                            <li><ChevronRightIcon /><strong>Phone:</strong> <a href='tel:+917406996770'>7406996770</a></li>
                                            <li><ChevronRightIcon /><strong>City :</strong> Panaji, Goa</li>
                                            {/* <li><ChevronRightIcon /><strong>Age:</strong> {years.getFullYear()-1992}</li> */}

                                        </ul>
                                    </div>
                                    <div className="col-lg-6 emailcls-a">
                                        <ul className='ul-aboutsecond'>
                                            <li><ChevronRightIcon /><strong>Degree:</strong> M.C.A</li>
                                            <li><ChevronRightIcon /><strong>Email:</strong> <a href="mailto:prasadneroolkar90@gmail.com">prasadneroolkar90@gmail.com</a></li>
                                            <li><ChevronRightIcon /><strong>Freelance:</strong> Available</li>

                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className="skills container">

                    <div className="section-title">
                        <h2>Skills</h2>
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-6">
                            <span class="skill">HTML <span class="val">90%</span></span>
                            <div className="progress"
                           >
                                <motion.div
                                 className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></motion.div>
                            </div>
                            <span class="skill">CSS <span class="val">80%</span></span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <span class="skill">JAVASCRIPT <span class="val">50%</span></span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span class="skill">REACT <span class="val">50%</span></span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                        </div>

                    </div>

                </div>




            </motion.section>

        </>
    )
}

export default About
