import React from "react";
import Preview from "../views/Preview";
// Homepage Demo
import HomeDefault from "../views/all-home-version/HomeDefault";
import HomeStudio from "../views/all-home-version/HomeStudio";
import HomeAgency from "../views/all-home-version/HomeAgency";
import HomeMinimal from "../views/all-home-version/HomeMinimal";
import HomeTrending from "../views/all-home-version/HomeTrending";
import HomeFreelancer from "../views/all-home-version/HomeFreelancer";
import HomeDark from "../views/all-home-version/HomeDark";
import HomeModern from "../views/all-home-version/HomeModern";
// Service
import Service from "../views/inner-pages/service/Service";
import ServiceDetails from "../views/inner-pages/service/ServiceDetails";

// About
import AboutUs from "../views/inner-pages/about/AboutUs";
import AboutMe from "../views/inner-pages/about/AboutMe";

// Blog
import BlogGrid from "../views/inner-pages/blog/BlogGrid";
import BlogMasonry from "../views/inner-pages/blog/BlogMasonry";
import BlogSidebar from "../views/inner-pages/blog/BlogSidebar";
import BlogDetails from "../views/inner-pages/blog/BlogDetails";
import BlogDetailsSidebar from "../views/inner-pages/blog/BlogDetailsSidebar";

// Portfolio
import WorksGrid from "../views/inner-pages/portfolio/WorksGrid";
import WorksMasonry from "../views/inner-pages/portfolio/WorksMasonry";
import WorksListing from "../views/inner-pages/portfolio/WorksListing";
import WorksCarousel from "../views/inner-pages/portfolio/WorksCarousel";
import WorksShowcase from "../views/inner-pages/portfolio/WorksShowcase";

// Others
import Contact from "../views/inner-pages/Contact";
import PricingInner from "../views/inner-pages/PricingInner";
import Team from "../views/inner-pages/Team";
import ComingSoon from "../views/inner-pages/ComingSoon";
import Faq from "../views/inner-pages/Faq";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={HomeAgency} />
          {/*  Homepage Demo 
          <Route path="/home-default" component={HomeDefault} />
          <Route path="/home-studio" component={HomeStudio} />
          <Route path="/home-agency" component={HomeAgency} />
          <Route path="/home-minimal" component={HomeMinimal} />
          <Route path="/home-trending" component={HomeTrending} />
          <Route path="/home-freelancer" component={HomeFreelancer} />
          <Route path="/home-dark" component={HomeDark} />
          <Route path="/home-modern" component={HomeModern} /> */}

          {/* Service */}
          <Route path="/service" component={Service} />
          <Route path="/service-details" component={ServiceDetails} />

          {/* About */}
          <Route path="/about-us" component={AboutUs} />
          <Route path="/about-me" component={AboutMe} />

          {/* Blog */}
          <Route path="/blog-grid" component={BlogGrid} />
          <Route path="/blog-masonry" component={BlogMasonry} />
          <Route path="/blog-sidebar" component={BlogSidebar} />
          <Route path="/blog-details" component={BlogDetails} />
          <Route path="/blog-details-sidebar" component={BlogDetailsSidebar} />

          {/* Portfolio */}
          <Route path="/works-grid" component={WorksGrid} />
          <Route path="/works-masonry" component={WorksMasonry} />
          <Route path="/works-listing" component={WorksListing} />
          <Route path="/works-carousel" component={WorksCarousel} />
          <Route path="/works-showcase" component={WorksShowcase} />

          {/* others */}
          <Route path="/team" component={Team} />
          <Route path="/pricing" component={PricingInner} />
          <Route path="/contact" component={Contact} />
          <Route path="/coming-soon" component={ComingSoon} />
          <Route path="/faq" component={Faq} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
