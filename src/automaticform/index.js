import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function AutoPopupModal() {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    place: "",
  });

  useEffect(() => {
    const startDate = localStorage.getItem("modalStartDate");
    const now = new Date().getTime();

    if (!startDate) {
      localStorage.setItem("modalStartDate", now);
    } else {
      const startTime = parseInt(startDate);
      const timeDiff = now - startTime;

      const timeRemaining = 10 * 24 * 60 * 60 * 1000 - timeDiff;
      if (timeRemaining <= 0) {
        return;
      }
      setTimeLeft(timeRemaining);
    }
    const timer = setTimeout(() => {
      setShowFirstModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (timeLeft !== null) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1000) {
            clearInterval(interval);
            setShowFirstModal(false);
            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  const handleFirstModalClose = () => setShowFirstModal(false);
  const handleSecondModalClose = () => setShowSecondModal(false);

  const handleRegisterClick = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days} days ${hours}h: ${minutes}m: ${seconds}s`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { name, phone, email, place } = formData;
    if (!name || !phone || !email || !place) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all fields!",
        timer: 1200,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Registration complete!",
        timer: 2000,
      });
      setShowSecondModal(false);
    }
  };

  return (
    <>
      <Modal show={showFirstModal} onHide={handleFirstModalClose} centered>
        <Modal.Header
          closeButton
          style={{
            background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
          }}
        >
          <Modal.Title>Only Few Seats Left</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }} className="bg-dark">
          <h2 className="headingonepopup">Free MySQL Course</h2>
          {timeLeft !== null && (
            <p className="timerpopup">{formatTime(timeLeft)}</p>
          )}
          <p style={{ color: "white" }}>
            <strong>5-Day Effective Training Program</strong>
          </p>
          <p style={{ color: "white" }}>
            <i className="bi bi-calendar-day"></i>&nbsp;&nbsp;&nbsp;
            <strong>July 08 2024 To July 12 2024</strong>
          </p>
          <p style={{ color: "white" }}>
            <i className="bi bi-stopwatch"></i>&nbsp;&nbsp;&nbsp;
            <strong>5.30 pm To 6.30 pm</strong>
          </p>
          <p style={{ color: "white" }}>
            <strong>We Provide Course Completion Certificate</strong>
          </p>
          <p style={{ color: "white" }}>
            <strong>
              Registration Fees Just @{" "}
              <span className="spanpopup">
                <del>₹99</del> <span className="pricepopup">₹49 only</span>
              </span>
            </strong>
          </p>
          <p style={{ color: "white" }}>
            <strong>[ For First 10 students only !!! ]</strong>
          </p>
          <hr className="linepopup" style={{ border: "2px solid red" }} />
          <Button variant="primary" onClick={handleRegisterClick}>
            Register Now
          </Button>
        </Modal.Body>
      </Modal>

      <Modal show={showSecondModal} onHide={handleSecondModalClose} centered>
        <Modal.Header
          closeButton
          style={{
            background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
          }}
        >
          <Modal.Title>Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Form>
            <div className="form-group row">
              <div className="col-md-6">
                <Form.Label style={{ color: "white" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="col-md-6">
                <Form.Label style={{ color: "white" }}>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Your Mobile Number"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <Form.Label style={{ color: "white" }}>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="col-md-6">
                <Form.Label style={{ color: "white" }}>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Your Location"
                />
              </div>
            </div>
            <Button
              variant="primary"
              type="button"
              onClick={handleSubmit}
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AutoPopupModal;
