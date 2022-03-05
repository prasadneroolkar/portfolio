import React from 'react'
// import Card from './Components/Card';
// import Pdata from './Pdata';
import { motion } from 'framer-motion';
import treckimg from "../src/TREK.png";
import foodimg from '../src/Food.png';
import myport from '../src/myport.png';

function porfolio() {
    return (
        <>
            <motion.section className="about-section resume-section" initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                <div className="work  resume-div container">
                    <div className="section-title">
                        <h2>PORTFOLIO</h2>
                        <p>my work</p>
                        <div className="row ">
                            <div className="col-10 ">
                                <div className="row gy-4">
                                    {/* {
                                        Pdata.map((val, ind) => {
                                            return <Card key={ind}
                                                imgsrc={val.imagesrc}
                                                name={val.imagename}
                                                para={val.desp}
                                                links={val.link}
                                            />

                                        })
                                    } */}

                                    <div className="col-lg-4">
                                        <div className="card" >
                                 <a href="https://food2eat.netlify.app/" target="_blank" rel="noreferrer">
                                 <img src={foodimg} className="card-img-top img-fluid" alt="my work" /></a>
                                            <div className="card-body">
                                                <h5 className="card-title">Food 4 You</h5>
                                                <p className="card-desc">Landing page built using React Framework</p>
                                                <a href="https://food2eat.netlify.app/" target="_blank" rel="noreferrer">
                                                    <button className="btn-visit">visit</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="card" >
                                        <a href="https://trek-it.netlify.app/" target="_blank" rel="noreferrer">
                                         <img src={treckimg} className="card-img-top img-fluid" alt="my work" /></a>
                                            <div className="card-body">
                                                <h5 className="card-title">Trek</h5>
                                                <p className="card-desc">Landing page built using React Framework</p>
                                                <a href="https://trek-it.netlify.app/" target="_blank" rel="noreferrer">
                                                    <button className="btn-visit">visit</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="card" >
                                        <a href="/" target="_blank" rel="noreferrer"> 
                                         <img src={myport} className="card-img-top img-fluid" alt="my work" /></a>
                                            <div className="card-body">
                                                <h5 className="card-title">My Portfolio</h5>
                                                <p className="card-desc">Built using React Framework</p>
                                                <a href="/" target="_blank" rel="noreferrer">
                                                    <button className="btn-visit">visit</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            
        </motion.section>

        </>


    )
}

export default porfolio
