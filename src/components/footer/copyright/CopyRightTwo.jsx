import React from "react";
import SocialTwo from "../../social/SocialTwo";

const logo = "assets/img/root/logo-dark.png";

const CopyRightTwo = () => {
  return (
    <div className="row align-items-center">
      <div data-aos="fade-up" className="col-12 col-md-3">
        <a href="index.html">
          <img src={logo} style={{height:30}} alt="" loading="lazy" />
        </a>
      </div>
      {/* End .col */}

      <div className="col-12 col-md-5">
        <p data-aos="fade-up" className="ptf-footer-copyright has-3-color">
          ©{new Date().getFullYear()}{" "}
          <span className="has-white-color">
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
           Harvilion Technologies
            </a>
          </span>
          . All Rights Reserved.
        </p>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        <div className="ptf-footer-socials has-white-color">
          <SocialTwo />
          {/* <!--Social Icon--> */}
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyRightTwo;
