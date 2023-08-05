import React from 'react'
import "./Plans.css"
import {plansData} from "../data/plansData"
import whiteTick from "../assets/whiteTick.png"

const Plans = () => {
  return (
    <div className='plans-container' id='Plans'>
    <div className='blur plans-blur-1'></div>
    <div className='blur plans-blur-2'></div>
      <div className='programs-header' style={{gap:"2rem"}}>
        <span>READY TO START</span>
        <span className='stroke-text'>YOUR JOURNEY</span>
        <span>NOW WITH US</span>
      </div> 
      {/* plans card */}
      <div className='plans'>
        {plansData.map((plan,i) => (
          <div className='plan' key={1}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>

            <div className='features'>
              {plan.features.map((feature, i) => (
                <div className='feature'>
                  <img alt='' src={whiteTick} />
                  <span key={1}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>
                See more benefits -
              </span>
            </div>
            <button className='btn'>join now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
