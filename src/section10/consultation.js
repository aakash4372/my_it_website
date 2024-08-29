import React from "react";
import "./consultation.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  return (
    <div className="section-consulting pt-5">
      <div className="container ms-auto">
        <div className="row container mx-1 align-items-center">
          <div className="col-md-3 d-none d-lg-block text-center container ">
            <img src="photo/consulting.jpg" alt="Consultation" Q />
          </div>

          <div className="col-md-4 mb-4 text-consol">
            <h5>Need Consultation</h5>
            <br />
            <p>Open a chat or give us a call at</p>
            <p>
              <img
                src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20d%3D%22M23.45%2020.93a3%203%200%200%200-4.25%200l-1.45%201.45a26.14%2026.14%200%200%201-4.51-3.62%2026.14%2026.14%200%200%201-3.62-4.51l1.45-1.45a3%203%200%200%200%200-4.25L8.24%205.73a2.93%202.93%200%200%200-2.11-.88h0A3%203%200%200%200%204%205.73L2.64%207.08A6.37%206.37%200%200%200%201%2012.33c.32%203.75%202.78%208.26%206.57%2012.06S15.92%2030.64%2019.67%2031a7.87%207.87%200%200%200%20.84%200%206.07%206.07%200%200%200%204.41-1.64L26.27%2028a3%203%200%200%200%20.88-2.13%202.93%202.93%200%200%200-.88-2.11zM26.6%205.39A14.92%2014.92%200%200%200%2016%201a1%201%200%201%200%200%202A13%2013%200%200%201%2029%2016.11a1%201%200%200%200%201%201h0a1%201%200%200%200%201-1A14.91%2014.91%200%200%200%2026.6%205.39z%22%2F%3E%3Cpath%20d%3D%22M20.91%2C11.11a6%2C6%2C0%2C0%2C1%2C1.77%2C4.31%2C1%2C1%2C0%2C0%2C0%2C1%2C1h0a1%2C1%2C0%2C0%2C0%2C1-1%2C8%2C8%2C0%2C0%2C0-8-8.1%2C1%2C1%2C0%2C1%2C0%2C0%2C2A6%2C6%2C0%2C0%2C1%2C20.91%2C11.11Z%22%2F%3E%3C%2Fsvg%3E"
                alt="logo"
                width={35}
              />{" "}
              +91 81898 91619
            </p>
            <div className="mt-3"></div>
          </div>

          <div className="col-md-4 text-consol-one">
            <form>
              <h4>Subscribe Us Today</h4>

              <div className="mb-3 input-wrapper">
                <input
                  className="input-box"
                  placeholder="Name"
                  required=""
                  type="text"
                />
                <span class="input-border"></span>
              </div>

              <div className="mb-3 input-wrapper">
                <input
                  type="email"
                  className="input-box"
                  id="email"
                  placeholder="Email"
                />
                <span class="input-border"></span>
              </div>
              <div className="button-btn">
                <button class="cta" type="submit">
                  <span>Subscribe</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
