import React from "react";
import Slider from "react-slick";

const testimonialContent = [
  {
    avatar: "twitter-avatar",
    name: "Peace Ovoke",
    email: "@thiago.lfc",
    hightlightText: "@MafaGroup",
    date: "15 Dec, 2021",
    description: `An agency with passionate, profressional &
    full creativity. Much more things that i’ld expect. Really
    awesome & satisfied, alway recommended!`,
  },
  {
    avatar: "twitter-avatar-2",
    name: "Samuel Orji",
    email: "@laura.cubichotel",
    hightlightText: "@MafaGroup",
    date: "2 Jan, 2022",
    description: ` Trust me, this is suberb this is something that you
    surely haven’t seen before.`,
  },
  {
    avatar: "twitter-avatar-3",
    name: "Abiola John",
    email: "@laura.cubichotel",
    hightlightText: "@MafaGroup",
    date: "24 Feb, 2022",
    description: ` This is something that you
    haven’t seen before. Unique strategy, impressive & outstanding
    support. I don’t know what else to say, `,
  },
    {
    avatar: "twitter-avatar-4",
    name: "Usman Ahmed",
    email: "usmanoiu@gmail.com",
    hightlightText: "@MafaGroup",
    date: "4 Feb, 2022",
    description: ` You want quality? Mafa Group got you. Impressive support. `,
  },
];

const TestimonialTwo = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="arrow-none">
        {testimonialContent.map((val, i) => (
          <div className="swiper-slide" key={i}>
            <div
              className="ptf-twitter-review ptf-twitter-review--style-1"
              key={i}
            >
              <div className="ptf-twitter-review__header">
                <div className="ptf-twitter-review__avatar">
                  <img
                    src={`assets/img/root/${val.avatar}.png`}
                    alt="avatar"
                    loading="lazy"
                  />
                </div>
                <div className="ptf-twitter-review__meta">
                  <h6 className="ptf-twitter-review__author">{val.name}</h6>
                  <div className="ptf-twitter-review__info">
                    <a href="mailto:ibthemes21@gmail.com">{val.email}</a> -{" "}
                    {val.date}
                  </div>
                </div>
                <div className="ptf-twitter-review__icon">
                  <i className="socicon-twitter"></i>
                </div>
              </div>
              <div className="ptf-twitter-review__content">
                <p>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {val.hightlightText}
                  </a>{" "}
                  - {val.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TestimonialTwo;
