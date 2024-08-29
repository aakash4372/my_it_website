import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./footer.css";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  return (
    <div className="footer" id="contact">
      <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">General Enquires</h5>
              <form className="mt-4">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required=""
                      className="input"
                      placeholder="Name"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required=""
                      className="input"
                      placeholder="Email"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required=""
                      className="input"
                      placeholder="Phone"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required=""
                      className="input"
                      placeholder="city"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      id="State"
                      name="State"
                      required=""
                      className="input"
                      placeholder="state"
                    />
                  </div>

                  <div className="col-md-6">
                    <select name="course" id="course" className="input" required>
                      <option value="" selected disabled>
                        Select Course
                      </option>
                      <option value="Full Stack">Full Stack Development</option>
                      <option value="Back-end">Python</option>
                      <option value="Front-end">Java</option>
                      <option value="Front-end">Software Testing</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-start text-lg-start">
              <h5 className="text-uppercase ps-4">Location</h5>
              <ul className="list-unstyled  ps-4 mt-4">
                <li className="my-2">
                  <a href="https://maps.app.goo.gl/J3iWiB2Vo5Fwfb5m6" target="_blank" rel="noreferrer" className="location-section "><FontAwesomeIcon icon={faLocationDot} /> No 36, Natesan Nagar,
                  Pondicherry, 605005</a>
                </li>
                <li className="my-2">
                <a href="tel:81898 91619" target="_blank" rel="noreferrer" className="location-section"><FontAwesomeIcon icon={faPhone} /> +91 81898 91619</a>
                </li>
                <li className="my-2">
                <a href="mailto: myitcareer2024@gmail.com" rel="noreferrer" target="_blank" className="location-section"><FontAwesomeIcon icon={faEnvelope} /> myitcareer2024@gmail.com</a>
                </li>
              </ul>
              <div>
                <ul class="icon_wrapper">
                 <a href="https://www.facebook.com/myitcareerin" target="_blank"  rel="noreferrer" className="location-section">
                 <li class="icon facebook">
                    <span class="tooltip">Facebook</span>
                    <svg
                      viewBox="0 0 320 512"
                      height="1.2em"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </li>
                 </a>
                 <a href="https://x.com/myitcareer9089" target="_blank" rel="noreferrer" className="location-section">
                  <li class="icon twitter">
                    <span class="tooltip">Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                      />
                    </svg>
                  </li>
                  </a>
                  <a href="https://www.instagram.com/myitcareerin?igsh=MjgwZ2lkMmJ6Mml3" target="_blank"  rel="noreferrer" className="location-section">
                  <li class="icon instagram">
                    <span class="tooltip">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.2em"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                    </svg>
                  </li>
                  </a>
                  <a href="https://www.youtube.com/@MyitCarrer" target="_blank"  rel="noreferrer" className="location-section">
                  <li class="icon youtube">
                    <span class="tooltip">Youtube</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78 78 0 0 0 12 4.27a79 79 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48 48 0 0 0 0 6.48a9.6 9.6 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45 45 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.9 2.9 0 0 0 1.53-.78a2.5 2.5 0 0 0 .61-1a10.6 10.6 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54M9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08"
                      />
                    </svg>
                  </li></a>
                  <a href="https://www.linkedin.com/in/myit-career/" target="_blank"  rel="noreferrer"  className="location-section">
                  <li class="icon linkedin">
                    <span class="tooltip">LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                      />
                    </svg>{" "}
                  </li></a>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0 text-center">
              <h5 className="text-uppercase">Technical Partner</h5>
              <img src="images/legends.png" alt="Logo" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="text-center p-3">
          <p>MY IT Career &copy;2024, All Rights Reserved</p>
          <a href="#contact" className="text-dark" onClick={handleShow}>
            Refund and Cancellation
          </a>{" "}
          |
          <a href="#contact" className="text-dark" onClick={handleShow2}>
            {" "}
            Terms And Conditions
          </a>{" "}
          |
          <a href="#contact" className="text-dark" onClick={handleShow3}>
            Privacy Policy
          </a>
        </div>
      </footer>

      <div className="popup-footer">
        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Refund and Cancellation</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: "400px", overflowY: "auto" }}>
            <h4>Cancellation/Refund Policy</h4>

            <p>
              At myitcareer.in, we are committed to providing high-quality
              online courses and learning experiences. As part of our commitment
              to transparency and customer satisfaction, please review our
              cancellation and refund policy outlined below:
            </p>

            <h4>Cancellation Policy:</h4>

            <p>
              Once enrolled in any of our online courses, cancellations are not
              permitted. We encourage all users to carefully review course
              details, syllabus, and any available previews before enrolling to
              ensure the course meets your expectations and learning objectives.
            </p>

            <h4>Refund Policy:</h4>

            <p>
              We do not offer refunds for any online courses purchased on
              myitcareer.in. All course purchases are final and non-refundable.
              This policy applies regardless of the reason for cancellation,
              including but not limited to changes in personal circumstances,
              dissatisfaction with the course content, or technical
              difficulties.
            </p>

            <h4>Exceptions:</h4>

            <p>
              In rare circumstances where myitcareer.in is unable to deliver a
              course as advertised, we may offer a refund or credit at our
              discretion. Such circumstances may include, but are not limited
              to, course cancellation by the instructor, technical issues
              preventing access to course materials, or other unforeseen
              circumstances beyond our control.
            </p>

            <h4>Contact Us:</h4>

            <p>
              If you encounter any issues with your course enrollment or have
              questions about our cancellation and refund policy, please contact
              our support team at support@myitcareer.in. We are here to assist
              you and ensure you have a positive learning experience with us.
            </p>

            <h4>Policy Updates:</h4>

            <p>
              We reserve the right to update or modify this cancellation and
              refund policy at any time without prior notice. Any changes to the
              policy will be effective immediately upon posting on this page.
              Please check this page periodically for updates.
            </p>

            <p>
              By enrolling in a course on myitcareer.in, you acknowledge and
              agree to abide by the terms outlined in this cancellation and
              refund policy.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button className="green" variant="primary" onClick={handleClose}>
              Accept
            </Button>
            <Button className="red" variant="secondary" onClick={handleClose}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="popup-foote2">
        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show2}
          onHide={handleClose2}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Terms and Conditions</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: "400px", overflowY: "auto" }}>
            <h6>Welcome to myitcareer!</h6>

            <p>
              These terms and conditions outline the rules and regulations for
              the use of myitcareer 's Website, located at myitcareer.in.
            </p>

            <p>
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use myitcareer if you do not agree
              to take all of the terms and conditions stated on this page.
            </p>

            <p>
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and all Agreements:
              "Client", "You" and "Your" refers to you, the person log on this
              website and compliant to the Company's terms and conditions. "The
              Company", "Ourselves", "We", "Our" and "Us", refers to our
              Company. "Party", "Parties", or "Us", refers to both the Client
              and ourselves. All terms refer to the offer, acceptance and
              consideration of payment necessary to undertake the process of our
              assistance to the Client in the most appropriate manner for the
              express purpose of meeting the Client's needs in respect of
              provision of the Company's stated services, in accordance with and
              subject to, prevailing law of in. Any use of the above terminology
              or other words in the singular, plural, capitalization and/or
              he/she or they, are taken as interchangeable and therefore as
              referring to same.
            </p>

            <h4>Cookies</h4>
            <p>
              We employ the use of cookies. By accessing myitcareer, you agreed
              to use cookies in agreement with the myitcareer 's Privacy Policy.
            </p>

            <p>
              Most interactive websites use cookies to let us retrieve the
              user's details for each visit. Cookies are used by our website to
              enable the functionality of certain areas to make it easier for
              people visiting our website. Some of our affiliate/advertising
              partners may also use cookies.
            </p>

            <h4>License</h4>
            <p>
              Unless otherwise stated, myitcareer and/or its licensors own the
              intellectual property rights for all material on myitcareer. All
              intellectual property rights are reserved. You may access this
              from myitcareer for your own personal use subjected to
              restrictions set in these terms and conditions.
            </p>

            <h4>You must not:</h4>
            <p>Republish material from myitcareer</p>
            <p>Sell, rent or sub-license material from myitcareer</p>
            <p>Reproduce, duplicate or copy material from myitcareer</p>
            <p>Redistribute content from myitcareer</p>

            <p>
              This Agreement shall begin on the date hereof. Our Terms and
              Conditions were created with the help of the Free Terms and
              Conditions Generator.
            </p>

            <p>
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              myitcareer does not filter, edit, publish or review Comments prior
              to their presence on the website. Comments do not reflect the
              views and opinions of myitcareer ,its agents and/or affiliates.
              Comments reflect the views and opinions of the person who post
              their views and opinions. To the extent permitted by applicable
              laws, myitcareer shall not be liable for the Comments or for any
              liability, damages or expenses caused and/or suffered as a result
              of any use of and/or posting of and/or appearance of the Comments
              on this website.
            </p>

            <p>
              myitcareer reserves the right to monitor all Comments and to
              remove any Comments which can be considered inappropriate,
              offensive or causes breach of these Terms and Conditions.
            </p>

            <h4>You warrant and represent that:</h4>
            <p>
              You are entitled to post the Comments on our website and have all
              necessary licenses and consents to do so;
            </p>
            <p>
              The Comments do not invade any intellectual property right,
              including without limitation copyright, patent or trademark of any
              third party;
            </p>
            <p>
              The Comments do not contain any defamatory, libelous, offensive,
              indecent or otherwise unlawful material which is an invasion of
              privacy;
            </p>
            <p>
              The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </p>
            <p>
              You hereby grant myitcareer a non-exclusive license to use,
              reproduce, edit and authorize others to use, reproduce and edit
              any of your Comments in any and all forms, formats or media.
            </p>

            <h4>Hyperlinking to our Content</h4>
            <p>
              The following organizations may link to our Website without prior
              written approval:
            </p>
            <p>Government agencies;</p>
            <p>Search engines;</p>
            <p>News organizations;</p>
            <p>
              Online directory distributors may link to our Website in the same
              manner as they hyperlink to the Websites of other listed
              businesses; and
            </p>
            <p>
              System wide Accredited Businesses except soliciting non-profit
              organizations, charity shopping malls, and charity fundraising
              groups which may not hyperlink to our Web site.
            </p>

            <p>
              These organizations may link to our home page, to publications or
              to other Website information so long as the link: (a) is not in
              any way deceptive; (b) does not falsely imply sponsorship,
              endorsement or approval of the linking party and its products
              and/or services; and (c) fits within the context of the linking
              party's site.
            </p>

            <p>
              We may consider and approve other link requests from the following
              types of organizations:
            </p>
            <p>commonly-known consumer and/or business information sources;</p>
            <p>dot.com community sites;</p>
            <p>associations or other groups representing charities;</p>
            <p>online directory distributors;</p>
            <p>internet portals;</p>
            <p>accounting, law and consulting firms; and</p>
            <p>educational institutions and trade associations.</p>

            <p>
              We will approve link requests from these organizations if we
              decide that: (a) the link would not make us look unfavorably to
              ourselves or to our accredited businesses; (b) the organization
              does not have any negative records with us; (c) the benefit to us
              from the visibility of the hyperlink compensates the absence of
              myitcareer ; and (d) the link is in the context of general
              resource information.
            </p>

            <p>
              These organizations may link to our home page so long as the link:
              (a) is not in any way deceptive; (b) does not falsely imply
              sponsorship, endorsement or approval of the linking party and its
              products or services; and (c) fits within the context of the
              linking party's site.
            </p>

            <p>
              If you are one of the organizations listed in paragraph 2 above
              and are interested in linking to our website, you must inform us
              by sending an e-mail to myitcareer. Please include your name, your
              organization name, contact information as well as the URL of your
              site, a list of any URLs from which you intend to link to our
              Website, and a list of the URLs on our site to which you would
              like to link. Wait 2-3 weeks for a response.
            </p>

            <p>
              Approved organizations may hyperlink to our Website as follows:
            </p>
            <p>By use of our corporate name; or</p>
            <p>By use of the uniform resource locator being linked to; or</p>
            <p>
              By use of any other description of our Website being linked to
              that makes sense within the context and format of content on the
              linking party's site.
            </p>

            <p>
              No use of myitcareer 's logo or other artwork will be allowed for
              linking absent a trademark license agreement.
            </p>

            <h4>iFrames</h4>
            <p>
              Without prior approval and written permission, you may not create
              frames around our Webpages that alter in any way the visual
              presentation or appearance of our Website.
            </p>

            <h4>Content Liability</h4>
            <p>
              We shall not be hold responsible for any content that appears on
              your Website. You agree to protect and defend us against all
              claims that is rising on your Website. No link(s) should appear on
              any Website that may be interpreted as libelous, obscene or
              criminal, or which infringes, otherwise violates, or advocates the
              infringement or other violation of, any third party rights.
            </p>

            <h4>Reservation of Rights</h4>
            <p>
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right
              to amen these terms and conditions and it's linking policy at any
              time. By continuously linking to our Website, you agree to be
              bound to and follow these linking terms and conditions.
            </p>

            <h4>Removal of links from our website</h4>
            <p>
              If you find any link on our Website that is offensive for any
              reason, you are free to contact and inform us any moment. We will
              consider requests to remove links but we are not obligated to or
              so or to respond to you directly.
            </p>

            <p>
              We do not ensure that the information on this website is correct,
              we do not warrant its completeness or accuracy; nor do we promise
              to ensure that the website remains available or that the material
              on the website is kept up to date.
            </p>

            <h4>Disclaimer</h4>
            <p>
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties and conditions relating to our website
              and the use of this website. Nothing in this disclaimer will:
            </p>
            <p>
              limit or exclude our or your liability for death or personal
              injury;
            </p>
            <p>
              limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </p>
            <p>
              limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </p>
            <p>
              exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </p>

            <p>
              The limitations and prohibitions of liability set in this Section
              and elsewhere in this disclaimer: (a) are subject to the preceding
              paragraph; and (b) govern all liabilities arising under the
              disclaimer, including liabilities arising in contract, in tort and
              for breach of statutory duty.
            </p>

            <p>
              As long as the website and the information and services on the
              website are provided free of charge, we will not be liable for any
              loss or damage of any nature.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button className="green" variant="primary" onClick={handleClose2}>
              Accept
            </Button>
            <Button className="red" variant="secondary" onClick={handleClose2}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="popup-foote2r">
        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show3}
          onHide={handleClose3}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Privacy Policy</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: "400px", overflowY: "auto" }}>
            <p>
              These terms and conditions outline the rules and regulations for
              the use of myitcareer 's Website, located at myitcareer.in. By
              accessing this website, we assume you accept these terms and
              conditions. Do not continue to use myitcareer if you do not agree
              to take all of the terms and conditions stated on this page.
            </p>

            <p>
              The following terminology applies to these Terms and Conditions,
              Privacy Statement, and Disclaimer Notice, and all Agreements:
              "Client", "You" and "Your" refers to you, the person logging on to
              this website and compliant with the Company's terms and
              conditions. "The Company", "Ourselves", "We", "Our" and "Us",
              refers to our Company. "Party", "Parties", or "Us", refers to both
              the Client and ourselves. All terms refer to the offer,
              acceptance, and consideration of payment necessary to undertake
              the process of our assistance to the Client in the most
              appropriate manner for the express purpose of meeting the Client's
              needs in respect of the provision of the Company's stated
              services, in accordance with and subject to, prevailing law in.
              Any use of the above terminology or other words in the singular,
              plural, capitalization and/or he/she or they, are taken as
              interchangeable and therefore as referring to the same.
            </p>

            <h4>Cookies</h4>

            <p>
              We employ the use of cookies. By accessing myitcareer, you agreed
              to use cookies in agreement with myitcareer 's Privacy Policy.
              Most interactive websites use cookies to let us retrieve the
              user's details for each visit. Cookies are used by our website to
              enable the functionality of certain areas to make it easier for
              people visiting our website. Some of our affiliate/advertising
              partners may also use cookies.
            </p>

            <h4>License</h4>

            <p>
              Unless otherwise stated, myitcareer and/or its licensors own the
              intellectual property rights for all material on myitcareer. All
              intellectual property rights are reserved. You may access this
              from myitcareer for your own personal use subjected to
              restrictions set in these terms and conditions.
            </p>

            <p>You must not:</p>
            <ul>
              <li>Republish material from myitcareer</li>
              <li>Sell, rent or sub-license material from myitcareer</li>
              <li>Reproduce, duplicate or copy material from myitcareer</li>
              <li>Redistribute content from myitcareer</li>
            </ul>

            <p>
              This Agreement shall begin on the date hereof. Our Terms and
              Conditions were created with the help of the Free Terms and
              Conditions Generator.
            </p>

            <p>
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              myitcareer does not filter, edit, publish or review Comments prior
              to their presence on the website. Comments do not reflect the
              views and opinions of myitcareer, its agents, and/or affiliates.
              Comments reflect the views and opinions of the person who posts
              their views and opinions. To the extent permitted by applicable
              laws, myitcareer shall not be liable for the Comments or for any
              liability, damages, or expenses caused and/or suffered as a result
              of any use of and/or posting of and/or appearance of the Comments
              on this website.
            </p>

            <p>
              myitcareer reserves the right to monitor all Comments and to
              remove any Comments which can be considered inappropriate,
              offensive, or causes breach of these Terms and Conditions.
            </p>

            <h4>You warrant and represent that:</h4>
            <ul>
              <li>
                You are entitled to post the Comments on our website and have
                all necessary licenses and consents to do so;
              </li>
              <li>
                The Comments do not invade any intellectual property right,
                including without limitation copyright, patent, or trademark of
                any third party;
              </li>
              <li>
                The Comments do not contain any defamatory, libelous, offensive,
                indecent, or otherwise unlawful material which is an invasion of
                privacy;
              </li>
              <li>
                The Comments will not be used to solicit or promote business or
                custom or present commercial activities or unlawful activity.
              </li>
            </ul>

            <p>
              You hereby grant myitcareer a non-exclusive license to use,
              reproduce, edit and authorize others to use, reproduce and edit
              any of your Comments in any and all forms, formats, or media.
            </p>

            <h4>Hyperlinking to our Content</h4>

            <p>
              The following organizations may link to our Website without prior
              written approval:
            </p>
            <ul>
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>
                Online directory distributors may link to our Website in the
                same manner as they hyperlink to the Websites of other listed
                businesses; and
              </li>
              <li>
                System-wide Accredited Businesses except soliciting non-profit
                organizations, charity shopping malls, and charity fundraising
                groups which may not hyperlink to our Website.
              </li>
            </ul>

            <p>
              These organizations may link to our home page, to publications, or
              to other Website information so long as the link: (a) is not in
              any way deceptive; (b) does not falsely imply sponsorship,
              endorsement, or approval of the linking party and its products
              and/or services; and (c) fits within the context of the linking
              party's site.
            </p>

            <p>
              We may consider and approve other link requests from the following
              types of organizations:
            </p>
            <ul>
              <li>
                Commonly-known consumer and/or business information sources;
              </li>
              <li>Dot.com community sites;</li>
              <li>Associations or other groups representing charities;</li>
              <li>Online directory distributors;</li>
              <li>Internet portals;</li>
              <li>Accounting, law and consulting firms; and</li>
              <li>Educational institutions and trade associations.</li>
            </ul>

            <p>
              We will approve link requests from these organizations if we
              decide that: (a) the link would not make us look unfavorably to
              ourselves or to our accredited businesses; (b) the organization
              does not have any negative records with us; (c) the benefit to us
              from the visibility of the hyperlink compensates the absence of
              myitcareer; and (d) the link is in the context of general resource
              information.
            </p>

            <p>
              These organizations may link to our home page so long as the link:
              (a) is not in any way deceptive; (b) does not falsely imply
              sponsorship, endorsement, or approval of the linking party and its
              products or services; and (c) fits within the context of the
              linking party's site.
            </p>

            <p>
              If you are one of the organizations listed in paragraph 2 above
              and are interested in linking to our website, you must inform us
              by sending an e-mail to myitcareer. Please include your name, your
              organization name, contact information as well as the URL of your
              site, a list of any URLs from which you intend to link to our
              Website, and a list of the URLs on our site to which you would
              like to link. Wait 2-3 weeks for a response.
            </p>

            <p>
              Approved organizations may hyperlink to our Website as follows:
            </p>
            <ul>
              <li>By use of our corporate name; or</li>
              <li>
                By use of the uniform resource locator being linked to; or
              </li>
              <li>
                By use of any other description of our Website being linked to
                that makes sense within the context and format of content on the
                linking party's site.
              </li>
            </ul>

            <p>
              No use of myitcareer 's logo or other artwork will be allowed for
              linking absent a trademark license agreement.
            </p>

            <h4>iFrames</h4>

            <p>
              Without prior approval and written permission, you may not create
              frames around our Webpages that alter in any way the visual
              presentation or appearance of our Website.
            </p>

            <h4>Content Liability</h4>

            <p>
              We shall not be held responsible for any content that appears on
              your Website. You agree to protect and defend us against all
              claims that arise on your Website. No link(s) should appear on any
              Website that may be interpreted as libelous, obscene, or criminal,
              or which infringes, otherwise violates, or advocates the
              infringement or other violation of, any third-party rights.
            </p>

            <h4>Reservation of Rights</h4>

            <p>
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right
              to amend these terms and conditions and its linking policy at any
              time. By continuously linking to our Website, you agree to be
              bound to and follow these linking terms and conditions.
            </p>

            <h4>Removal of links from our website</h4>

            <p>
              If you find any link on our Website that is offensive for any
              reason, you are free to contact and inform us at any moment. We
              will consider requests to remove links, but we are not obligated
              to or so or to respond to you directly.
            </p>

            <p>
              We do not ensure that the information on this website is correct;
              we do not warrant its completeness or accuracy; nor do we promise
              to ensure that the website remains available or that the material
              on the website is kept up to date.
            </p>

            <h4>Disclaimer</h4>

            <p>
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties, and conditions relating to our
              website and the use of this website. Nothing in this disclaimer
              will:
            </p>
            <ul>
              <li>
                Limit or exclude our or your liability for death or personal
                injury;
              </li>
              <li>
                Limit or exclude our or your liability for fraud or fraudulent
                misrepresentation;
              </li>
              <li>
                Limit any of our or your liabilities in any way that is not
                permitted under applicable law; or
              </li>
              <li>
                Exclude any of our or your liabilities that may not be excluded
                under applicable law.
              </li>
            </ul>

            <p>
              The limitations and prohibitions of liability set in this Section
              and elsewhere in this disclaimer: (a) are subject to the preceding
              paragraph; and (b) govern all liabilities arising under the
              disclaimer, including liabilities arising in contract, in tort,
              and for breach of statutory duty.
            </p>

            <p>
              As long as the website and the information and services on the
              website are provided free of charge, we will not be liable for any
              loss or damage of any nature.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button className="green" variant="primary" onClick={handleClose3}>
              Accept
            </Button>
            <Button className="red" variant="secondary" onClick={handleClose3}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Footer;
