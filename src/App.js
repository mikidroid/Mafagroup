import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { motion ,AnimatePresence} from "framer-motion";
// import { jarallax } from "jarallax";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <AnimatePresence
       exitBeforeEnter
       initial={false}
       onExitComplete={() => window.scrollTo(0, 0)}
       >
      <Helmet>
        <title>MAFA GROUP</title>
        <meta name="description" content="Portfolio & Agency React Template" />
        <meta
          name="keywords"
          content="agency, business, corporate, creative, showcase"
        />
      </Helmet>
      {/* End React Helmet for SEO */}

      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="220, 53, 69"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      {/* End Animated Cursor */}

      <ScrollToTop />
      {/* End Scroll To Top */}

      <Routes />
      {/* End All Routes */}
      </AnimatePresence>
    </>
  );
};

export default App;
