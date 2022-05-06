import React from "react";
import FooterList from "../list/FooterList";

const FooterTwo = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-7">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div className="ptf-widget ptf-widget-contacts has-white-color">
            <ul>
              <li data-aos="fade-up">
                <span>Address</span>
                <p>
                  km 11 Hadejia Road Gunduwawa Industrial Estate Gezawa Local Government, Kano, Nigeria. 
                </p>
              </li>
              <li data-aos="fade-up">
                <span>Phone</span>
                <a href="tel:+2348036916313">+2348036916313  </a>
              </li>
              <li data-aos="fade-up">
                <span>Email</span>
                <a href="mailto:info@mafagroup.com">
                  info@mafagroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg-5">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-white-color">
            <FooterList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;
