import React from "react";

const approachContent = [
  {
    subTitle: "ONE",
    title: "Research",
    descriptions: `Approach1`,
    delayAnimation: "0",
  },

  {
    subTitle: "TWO",
    title: "Concept",
    descriptions: `Approach2`,
    delayAnimation: "100",
  },
  {
    subTitle: "THREE",
    title: "Strategy",
    descriptions: `Approach3`,
    delayAnimation: "200",
  },
  {
    subTitle: "FOUR",
    title: "Development",
    descriptions: `Approach4`,
    delayAnimation: "300",
  },
  {
    subTitle: "FIVE",
    title: "Test",
    descriptions: `Approach5`,
    delayAnimation: "400",
  },
  {
    subTitle: "SIX",
    title: "Hand Over",
    descriptions: `Approach6`,
    delayAnimation: "500",
  },
];

const Approach = () => {
  return (
    <div
      className="row"
      style={{
        "--bs-gutter-x": "3.75rem",
        "--bs-gutter-y": "7.5rem",
      }}
    >
      {approachContent.map((val, i) => (
        <div className="col-xl-4 col-lg-6" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            {/* <!--Approach Box--> */}
            <div
              className="ptf-approach-box"
              style={{
                "--ptf-title-color": "var(--ptf-color-white)",
              }}
            >
              <div className="ptf-approach-box__subtitle">{val.subTitle}</div>
              <h3 className="ptf-approach-box__title h1">{val.title}</h3>
              <div className="ptf-approach-box__content text-white">
                <p>{val.descriptions}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Approach;
