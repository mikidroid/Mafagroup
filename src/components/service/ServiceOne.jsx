import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    icon: "lnil lnil-cup",
    titlePart1: "MAFA",
    titlePart2: "INTEGRATED FARMING",
    descriptions: ` MAFA Integrated Farming is an agribusiness company established with a target to use modern 
tools and technologies with traditional practices to grow Crops and Livestock, with special 
focus on precision farming for maximum output through optimal use of local resources, 
effective recycling of farm waste for productive purposes.  `,
  },
  {
    icon: "lnil lnil-3d",
    titlePart1: "AMA CONSULTING",
    titlePart2: "",
    descriptions: ` AMA Consulting is a business consulting firm that works together with micro, small and 
medium enterprises in Nigeria and Africa to develop powerful strategies, specific to their 
organization, which will increase profits and help them grow and remain relevant in the 
metaverse age.`,
  },
  {
    icon: "lnil lnil-3d",
    titlePart1: "MAFA SECURITY",
    titlePart2: "",
    descriptions: ` MAFA Security is a private guard organization established to provide advance leading 
innovative security solutions to local and international organizations at affordable cost.   
We are managed by highly skilled, experienced, and licensed security personnel experts with 
combined years within the security sector.  `,
  },
];

const ServiceOne = () => {
  return (
    <>
      {serviceContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="0"
          key={i}
        >
          {/* <!--Services Box--> */}
          <div className="ptf-service-box">
            <Link
              to="/service-details"
              className="ptf-service-box__link"
            ></Link>
            <div className="ptf-service-box__icon">
              <i className={val.icon}></i>
            </div>
            <h5 className="ptf-service-box__title">
              {val.titlePart1} <br />
              {val.titlePart2}
            </h5>
            <div className="ptf-service-box__content">
              <p>{val.descriptions}</p>
            </div>
            <div className="ptf-service-box__arrow">
              <i className="lnil lnil-chevron-right"></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceOne;
