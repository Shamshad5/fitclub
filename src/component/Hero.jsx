import React from 'react';
import "./Hero.css";
import Header from './Header'
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import {motion} from "framer-motion"
import CountUp from 'react-countup'


function Hero() { 
  
  const transition = {type:"spring",duration:"3"}
  const mobile=window.innerWidth<=768 ? true:false;

  return (
    <div className='hero' id='Home'>
    <div className='blur hero-blur'></div>
      <div className='left-h'>
        <Header />

        {/* the best ad */}

        <div className='the-best-ad'>

          <motion.div
             initial={{left:mobile?"178px":"238px"}}
             whileInView={{left:"8px"}}
             transition={{...transition,type:"tween"}}>
          </motion.div>

          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading */}

        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>

          <div>
            <span>
            In here we will help you to shape and build your ideal body and live up your life to fullest
            </span>
          </div>
          </div>

          {/* figures */}
         <div className='figures'>
          <div>
               <span>
               <CountUp end={140} start={0} duration={10} prefix='+'  />
               </span>
               <span>Expert coachs</span>
            </div>
            <div>
               <span>
               <CountUp end={978} start={0} duration={10} prefix='+'  />
               </span>
               <span>Members joined</span>
            </div>
            <div>
               <span>
               <CountUp end={50} start={0} duration={10} prefix='+'  />
               </span>
               <span>Fitness Programs</span>
            </div>
          </div>
          
            {/* hero buttons */}

            <div className='hero-button'>
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
            </div>
        </div>
      
{/* the right side  */}
      
      <div className='right-h'>
        <button className='btn'>Join Now</button>

        <motion.div
            initial={{right:"-1rem"}}
             whileInView={{left:"8rem"}}
             transition={{...transition,type:'tween'}}
             className='heart-rate'>
          <img src={Heart} alt='' />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* the hero images */}

        <img src={hero_image} className="hero-img" alt='' />
        <motion.img 
                initial={{right:"11rem"}}
                whileInView={{right:"20rem"}}
                transition={{...transition,type:"tween"}}
                src={hero_image_back} 
                className="hero-img-back" 
                alt='' />

{/* calories */}

<motion.div
             initial={{right:"700px"}}
             whileInView={{left:mobile?"-300px":"-150"}}
             transition={{...transition,type:"tween"}}
 className='calories'>
  <img src={Calories} alt='' />
  <div>
  <span>Calories Burned</span>
  <span>220 kcal</span>
        </div>
      </motion.div>
   </div>
</div>
  )
}

export default Hero
