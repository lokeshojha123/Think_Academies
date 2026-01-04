import React from 'react'
import "./OurWork.css"
import logo from "../../assets/main.svg"
import ourwork_data from '../../assets/our-work-data'
import { FaArrowRight } from "react-icons/fa";
const OurWork = () => {
  return (
    <div id="work"className='ourwork'>
      <div className="ourwork-title">
        <h1>Our latest work</h1>
        {/* <img src={logo} alt="" /> */}
        </div> 
        <div className="our-work-container">
           {ourwork_data.map((work,index)=>{
 return <img key={index} src={work.w_img}></img>
           })} 
            </div> 
            
               <div className="showmore">
               <p>Show more</p>
               <FaArrowRight />
               </div>
            </div>

  )
}

export default OurWork