import React, { useState, useEffect } from "react";
import Footer from "./footer/footer";
import Nave from "./navbar/Nav";
import ScrollBtn from "./scrool/scroll-btn";
import Section1 from "./section-1/Index";
import Section3 from "./section-3/Index";
import Section5 from "./section-5/Index";
import ContactForm from "./section10/consultation";
import Section2 from "./section2/Index";
import Topic from "./section4/topic";
import Courses from "./section6/courses";
import Testimonial from "./section8/testimonial";
import Technologies from "./technologieSection/technologies";
import Preloader from "./components/preloader";
import AutoPopupModal from "./automaticform";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <AutoPopupModal/>
          <Nave />
          <Section1 />
          <Section2 />
          <Section3 />
          <Topic />
          <Technologies />
          <Section5 />
          <Courses />
          <Testimonial />
          <ContactForm />
          <Footer />
          <ScrollBtn />
        </div>
      )}
    </div>
  );
}

export default App;
