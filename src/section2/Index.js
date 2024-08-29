import React,{useState} from "react";
import tcs from "../img/tcs.png";
import hcl from "../img/hcl.png";
import tech from "../img/tech.png";
import meesho from "../img/meesho.png";
import byjus from "../img/byjus.png";
import amazon from "../img/amazon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bookpopup from '../Bookform/book';
import {
  faCalendar,
  faGlobe,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

export default function Section2() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
  };

  const [popupshow, setpopupShow] = useState(false);

  const popuphandleClose = () => setpopupShow(false);
  const popuphandleShow = () => setpopupShow(true);


  return (
    <section className="section-color" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 medal text-center container">
            <div className="logo">
              <img className="runner" src="images/asset 5.png" alt="batch" />
              &nbsp;&nbsp;
              <span>Live Instructor-Led Certification Program</span>
            </div>
            <h2 className="logo-heading-1 text-center">
              Development Career In Online & Offline With Internship &
              Certificate
            </h2>
            <ul className="mb-2 icons">
              <li className="p-2">
                <FontAwesomeIcon icon={faCalendar} className="me-2" />3 Months{" "}
              </li>
              <li className="p-2">
                <FontAwesomeIcon icon={faGlobe} className="me-1" /> Tamil &amp;
                English
              </li>
              <li className="p-2">
                <FontAwesomeIcon icon={faCertificate} className="me-1" />{" "}
                Certified Course
              </li>
            </ul>
            <p className="logo-para-1">
              MY-IT Web Developer Course is a 100% live classroom and online program
              developed to learn job ready programming skills from industry
              experts. This master developer course in pondy to make you
              proficient in back-end and front-end web technologies.
            </p>
            <div className="btn-type">
              <button className="btn btn-primary enquire" onClick={popuphandleShow}>Enquire Now</button>
              &nbsp;
              <button className="btn btn-primary enquire">
                Call Now:+91 94423 69773
              </button>
            </div>
            <p className="logo-para-2">Top Companies That Hire Developer</p>
            <Slider {...settings} className="container">
              <img className="slider-img" src={tcs} alt="tcs" />
              <img className="slider-img" src={hcl} alt="hcl" />
              <img className="slider-img" src={tech} alt="tech" />
              <img className="slider-img" src={meesho} alt="meesho" />
              <img className="slider-img" src={byjus} alt="byjus" />
              <img className="slider-img" src={amazon} alt="amazon" />
            </Slider>
          </div>
        </div>
      </div>
      <div className="container-3 py-lg-5 py-3">
        <div className="container ">
          <div className="row">
            <div className="col-lg-8 text-center">
              <p className="para-3">
                Apply for Web Developer Program. Learn , Practice and Boost your
                credibility and advance your Web Developer Program skills.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <button className="btn" onClick={popuphandleShow}>Join Now!</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="heading2 pb-3 text-center">
          Training Mode of Web Developer Programming Course
        </h2>
        <p className=" para-4 pb-3 text-center">
          Enroll Now & Learn Web Developer Code in Just 3 Months with
          Classroom or Online Live Training Program.
        </p>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-lg-6 mb-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Web Developer Classroom Training</h5>
                <p class="card-text">
                  Web Developer Classroom Training offers live classes with
                  in-House intructors who teach you in-demands front-end and
                  back-end development skills and pratices with real-time
                  scenarios.
                </p>
                <button class="btn btn-primary mt-2"onClick={popuphandleShow}>Enquire Now</button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Web Developer Online Live Training</h5>
                <p class="card-text">
                  Web Developer Online Training offers live instructor-led classes
                  with intructors who train you in-demands front-end and
                  back-end development skills and Practice with capstone
                  projects.
                </p>
                <button class="btn btn-primary mt-2"onClick={popuphandleShow}>Enquire Now</button>
                <Bookpopup show={popupshow} handleClose={popuphandleClose} title="Book Your Seats" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}
