import React from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

const portfolioContent = [
  {
    cat: "Supply",
    title: "Kwesi Stores",
    date: "2021",
    routerLink: "/portfolio-details",
    imgPopup: "work-1",
    description: "Delivery of food supplies to Ghana.",
    dataId: "work-1",
  },
  {
    cat: "Local",
    title: "Food Item Supply",
    date: "2020",
    routerLink: "/portfolio-details",
    description: "Delivery of food supplies to Niger.",
    imgPopup: "work-2",
    dataId: "work-2",
  },
  {
    cat: "Branding",
    title: "Agribusiness",
    date: "2020",
    description: "Example Description three.",
    routerLink: "/portfolio-details",
    imgPopup: "work-3",
    dataId: "work-3",
  },

];

const PortfolioTwo = () => {
  return (
    <>
      <div className=" grid-item ">
        {/* <!--Portfolio Item--> */}
        {portfolioContent.map((val, i) => (
          <article
            className="ptf-work ptf-work--style-4"
            data-tip
            data-aos="fade-up"
            data-for={val.dataId}
            key={i}
          >
            <Link className="ptf-work__link" to="/works-showcase"></Link>
            <ReactTooltip
              id={val.dataId}
              place="right"
              type="dark"
              effect="float"
            >
              <div className="poup-link">
                <img
                  src={`assets/img/portfolio/grid/${val.imgPopup}.png`}
                  alt="popup"
                />
              </div>
            </ReactTooltip>
            <div className="ptf-work__category">{val.cat}</div>
            <h4 className="ptf-work__title">{val.title}</h4>
            <div className="ptf-work__category">{val.description}</div>
            <div className="ptf-work__date">{val.date}</div>
          </article>
        ))}
      </div>
      {/* End .grid-item */}
      <div></div>
      {/* End .grid-item */}
    </>
  );
};

export default PortfolioTwo;
