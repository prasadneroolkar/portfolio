import React from 'react';
import treckimg from "../src/TREK.png";
import foodimg from '../src/Food.png';
import myport from '../src/myport.png';
import Navisit from '../src/Components/Navisit';

const Pdata =[
    {
        imagesrc: foodimg,
        imagename: 'Food 4 You',
        desp: "Landing page built using React Framework ",
        link:"https://infallible-clarke-7a0e88.netlify.app/"
    },

    {
        imagesrc: treckimg,
        imagename: 'Trek',
        desp: "Landing page built using React Framework ",
        link:"https://affectionate-euclid-2d30cc.netlify.app/"
    },

    {
        imagesrc: myport,
        imagename: 'My Portfolio',
        desp: "Built using React Framework",
        link: <Navisit/>
    }

];

export default Pdata