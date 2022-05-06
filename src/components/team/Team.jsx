import React from "react";

const teamContent = [
  {
    delayAnimation: "0",
    img: "team-1",
    title: "Eng. Anwar Salim",
    designation: "Director, Operations & Sales",
  },
  {
    delayAnimation: "100",
    img: "team-2",
    title: "Meshack Ossai",
    designation: "Director, Finance and Administration",
  },
  {
    delayAnimation: "200",
    img: "team-3",
    title: "Abdulfattah Mohammad",
    designation: "General Manager, Production",
  },
  {
    delayAnimation: "300",
    img: "team-4",
    title: "Zubairu Aliyu Yakubu",
    designation: "Manager, Finance",
  },
  {
    delayAnimation: "0",
    img: "team-5",
    title: "Adewumi Lydia",
    designation: "Head of Human Resource",
  },/*
  {
    delayAnimation: "200",
    img: "new-member",
    title: "",
    designation: "",
  },*/
];

const Team = () => {
  return (
    <>
      {teamContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          {/* <!--Team Member--> */}
          <div className="ptf-team-member ptf-team-member--has-effect">
            <div className="ptf-team-member__avatar">
              <div className="shadow-effect"></div>
              <a href="#">
                {" "}
                <img
                  src={`assets/img/root/team/${val.img}.png`}
                  alt={val.title}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="ptf-team-member__content">
              <h6 className="ptf-team-member__name">
                <a href="#">{val.title}</a>
              </h6>
              <p className="ptf-team-member__function">{val.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Team;
