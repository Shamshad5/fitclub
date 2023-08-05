import React from 'react'
import "./Programs.css"
import {programsData} from "../data/programsData"
import RightArrow from "../assets/rightArrow.png"

const Programs = () => {
  return (
    <div className='programs' id='Programs'>
      
      {/* header */}
      <div className='programs-header'>
        <span className='stroke-text'>Explore our</span>
        <sapn>Programs</sapn>
        <sapn className="stroke-text">to shape you</sapn>
      </div>

      <div className='programs-categories'>
        {programsData.map((Programs)=>(
        <div className='category'>
            {Programs.image}
            <span>{Programs.heading}</span>
            <span>{Programs.details}</span>
            <div className='Join-now'>
                <span>Join Now</span>
                <img alt='' src={RightArrow}></img>
            </div>
        </div>
        ))}
      </div>

    </div>
  )
}

export default Programs
