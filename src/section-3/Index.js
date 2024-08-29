import React, { useState } from "react";
import "./Index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Bookpopup from '../Bookform/book';


function Section3() {

    AOS.init({
        once: true,
        duration: 1200,
        });

        const [popupshow, setpopupShow] = useState(false);

        const popuphandleClose = () => setpopupShow(false);
        const popuphandleShow = () => setpopupShow(true);

    return (
        <>
        <section className="about_us py-3">
            <div className="container">
                <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="3000">
                    <div className=" col-lg-6">
                        <div className="img position-relative">
                            <img src="images/img12.png" alt="asset 12" className="img-fluid d-lg-block d-none img12"/>
                            <img src="images/img13.png" alt="asset 13" className="img-fluid d-lg-block d-none img13" width={600}/>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-xl-0 py-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-9">
                                    <div className="ps-lg-3">
                                        <div className="title">
                                            <p className="section_topic_one">ABOUT US</p>
                                            <h2 className="sec3_heading1 col-sm-11 mb-4">WELCOME TO My IT</h2>
                                            <p className="sec3_para mb-4">Established in 2016, MY IT is the India's Leading training institute, renowned for nurturing students' skills and empowering them to successful careers, backed by an impressive track record of success. We will teach the most in-demand tech skills that will definitely help your future to do business in something you love.</p>
                                        </div>
                                        <h3 className="sec3_heading2 mb-3">Our Mission</h3>
                                        <ol className="col-11 mb-4 text-start">
                                            <li>Placement Guidance</li>
                                            <li>A Portfolio of Real-World Projects</li>
                                            <li>For Graduates & Working Professionals</li>
                                        </ol>
                                        <button type="submit" className="btn btns" onClick={popuphandleShow}>Book Now</button>
                                        <Bookpopup show={popupshow} handleClose={popuphandleClose} title="Book Your Seats" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="program_fee py-5">
            <div className="container text-white aos-init aos-animate" data-aos="zoom-in" data-aos-duration="3000">
                <div className="row">
                    <div className="col-12 program">
                        <h2 className="program_fee_heading py-3 text-center">Program Fee <s>INR 50,000</s> INR 25,OOO (incl. Taxes)</h2>
                    </div>
                    <div className="col-xxl-6 py-5">
                        <h3 className="program_fee_heading">Pre-Book Your Seat by Paying just Rs.5,000 Only</h3>
                        <p className="program_fee_para">EMI Option Available <br/>
                        Get maximum flexibility to learn at your own place.</p>
                        </div>
                    <div className="col-xxl-6 pb-5 pro_fee_btn">
                        <button type="submit" className="btn me-1" onClick={popuphandleShow}>PRE-BOOKING</button>
                        <button type="submit" className="btn">CONTACT US</button>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Section3;