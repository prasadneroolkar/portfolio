import React from 'react';
//import { NavLink } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Navbarhome from "../Components/Navbarhome";
import { motion } from 'framer-motion';
// import Typewriter from 'typewriter-effect';





// const constvariant = {
//     hidden: {
//         opacity: 0,
//     },
//     visible: {
//         opacity: 1,
//         // transition: { duration: 0.1 }
//     },
//     exit: {
//         x: '-100vw',
//         // transition: { ease: 'backOut' }
//     }
// }

function Home() {

    return (

        <>




            <Navbarhome />

            <motion.section className="home_main"
            // variants={constvariant}
            // initial='hidden'
            // animate='visible'
            // exit='exit'
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <motion.div className="home_content" initial={{ y: -120 }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                            >
                                <motion.h1 initial={{ scale: 0.5 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}> Prasad Neroolkar</motion.h1>
                                <h2>I,m passionate <span className='type-wrap'>front end developer
                                {/* <Typewriter
                                    options={{
                                        strings: "front end developer",
                                        // autoStart: true,
                                        // loop: true,
                                        
                                    }}
                                /> */}
                                </span> with long time experience in this field​</h2>

                                <div className="social-media">
                                    <ul className="social-media-ul">
                                        <li>
                                            <a href="https://www.facebook.com/prasad.nerulkar/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/d.e.e.p.r.a.a.j/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                                        </li>
                                        <li>
                                            <a href='https://www.linkedin.com/in/prasad-neroolkar/' target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                                        </li>
                                    </ul>

                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="banner-image">
                                <img src="/images/newblue.png" className="img-fluid" alt="profilepic"/>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Home;
