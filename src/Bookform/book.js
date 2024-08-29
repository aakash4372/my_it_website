import React from 'react';
import './book.css';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Bookpopup = ({ show, handleClose, title }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const phone = event.target.phone.value.trim();
    const city = event.target.city.value.trim();
    const state = event.target.State.value.trim();
    const course = event.target.cars.value.trim();


    if (!name || !email || !phone || !city || !state || !course) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all the fields.',
        icon: 'error',
        confirmButtonText: 'OK',
        timer: 1500
      });
    } else {
      Swal.fire({
        title: 'Success!',
        text: 'Your booking has been recorded.',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 2000
      });

      handleClose(); 
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered animation={false}>
      <Modal.Header closeButton>
        <Modal.Title className='container'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="label">Name</label>
          <input type="text" id="name" name="name" required="" className="input"/>

          <label htmlFor="email" className="label">Email</label>
          <input type="email" id="email" name="email" required="" className="input"/>

          <label htmlFor="phone" className="label">Phone</label>
          <input type="tel" id="phone" name="phone" required="" className="input"/>

          <label htmlFor="city" className="label">City</label>
          <input type="text" id="city" name="city" required="" className="input"/>

          <label htmlFor="State" className="label">State</label>
          <input type="text" id="State" name="State" required="" className="input"/>

          <label htmlFor="Course" className="label">Course</label>
          <select name="cars" id="cars" className="input" required>
            <option value="" selected disabled>Select Course</option>
            <option value="Full Stack">Full Stack Development</option>
            <option value="Back-end">Back-End Development</option>
            <option value="Front-end">Front-End Development</option>
          </select>

          <button type="submit" className="submit">Submit</button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Bookpopup;
