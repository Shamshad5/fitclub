import React from 'react'
import "./Reason.css"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import tick from "../assets/tick.png"
import nb from "../assets/nb.png"
import adidas from "../assets/adidas.png"
import nike from "../assets/nike.png"

const Reason = () => {
  return (
    <div className='reason' id='Why us'>
      <div className='left-r'>
        <img alt='' src={image1} />
        <img alt='' src={image2} />
        <img alt='' src={image3} />
        <img alt='' src={image4} />
      </div>

      {/* the right side coding */}
      <div className='right-r'>
        <span>some reasons</span> 
                      <br></br>
                      <br></br>
        
        <div>
            <span className='stroke-text'>why</span>
            <span> choose us?</span>
        </div>
        
        <br></br><br></br>


        <div className='detail-r'>
        <div>
            <img src={tick} alt=''></img>
            <span>over 140+ Expert Couchs</span>
        </div>

        <div>
            <img src={tick} alt=''></img>
            <span>train smarter and faster than befor</span>
        </div>
        
        <div>
            <img src={tick} alt=''></img>
            <span>1 free program for new member</span>
        </div>
        
        <div>
            <img src={tick} alt=''></img>
            <span>Reliable partners</span>
        </div>
        </div>

        <span style={{color:"var(--gray)",
                      fontWeight:"normal",
                      }}>
                      <br></br>
                      OUR PARTNERS
        </span>
        <br></br>
        <br></br>
        

        <div className='partners'>
            <img src={nb} alt='' />
            <img src={adidas} alt='' />
            <img src={nike} alt='' />
        </div>

      </div>
    </div>
  )
}

export default Reason
