import React, { useState } from 'react';
import "./Services.css";
// import theme_pattern from "../../assets/main.svg"
import Services_Data from '../../assets/Services_data';
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="services" className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        {/* <img src={theme_pattern} alt="image" /> */}
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className={`services-format ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>
              {expandedIndex === index
                ? service.s_desc
                : service.s_desc.length > 100
                  ? service.s_desc.substring(0, 100) + '...'
                  : service.s_desc}
            </p>

            <div className="services-readmore">
              <p>{expandedIndex === index ? "Show less" : "Read more"}</p>
              <FaArrowRight className={expandedIndex === index ? 'rotate' : ''} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
