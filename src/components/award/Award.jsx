import React from "react";

const awardContent = [
  {
    img: "logo-4",
    delayAnimation: "200",
    awardList: [
      {
        title: "1st, Winner Review NG 2019",
        subTitle: "Modern Farming Techniques",
        date: "2019",
      },
    ],
  },
];

const Award = () => {
  return (
    <ul
      className="ptf-rewards-list ptf-rewards-list--small"
      style={{
        "--ptf-border-width": "2px",
        "--ptf-border-color": "var(--ptf-color-black)",
      }}
    >
      {awardContent.map((val, i) => (
        <li
          className="ptf-rewards-item"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >

          <div className="ptf-rewards-item__logo">
            <img
              src={`assets/img/root/rewards/${val.img}.png`}
              alt="brand"
              loading="lazy"
            />
          </div>

          {/* End .ptf-rewards-item__logo */}

          <div className="ptf-rewards-item__content">
            {val.awardList.map((list, i) => (
              <div className="ptf-rewards-project" key={i}>
                <div className="ptf-rewards-project__content">
                  <h5>
                    <a href="#">{list.title}</a>
                  </h5>
                  <span>{list.subTitle}</span>
                <div className="ptf-rewards-item__date">({list.date})</div>
                </div>
                <div className="ptf-rewards-project__link">
                  <a
                    className="ptf-link-with-arrow text-uppercase fz-14"
                    href="#"
                  >
                    See project
                  </a>
                </div>
              </div>
            ))}
            {/* End .ptf-rewards-project */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Award;
