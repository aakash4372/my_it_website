import React from 'react';
import { Modal } from 'react-bootstrap';
import './book.css'
import Swal from 'sweetalert2';

const Bookpopup = ({ show, handleClose, title }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const phone = event.target.phone.value.trim();
    const city = event.target.city.value.trim();
    const state = event.target.state.value.trim();
    const course = event.target.course.value.trim();

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
          <input type="text" id="name" name="name" className="input" placeholder='Enter Your Name' required/>

          <label htmlFor="email" className="label">Email</label>
          <input type="email" id="email" name="email" className="input" placeholder='Enter Your Email' required/>

          <label htmlFor="phone" className="label">Phone</label>
          <input type="tel" id="phone" name="phone" className="input" placeholder='Enter Your Phone' required/>

          <label htmlFor="city" className="label">City</label>
          <input type="text" id="city" name="city" className="input" placeholder='Enter Your City' required/>

          <label htmlFor="state" className="label">State</label>
          <input type="text" id="state" name="state" className="input" placeholder='Enter Your State' required/>

          <label htmlFor="course" className="label">Course</label>
          <select name="course" id="course" className="input" required>
            <option value="" disabled>Select Course</option>
            <option value="Full Stack">Full Stack Development</option>
            <option value="Back-end">Python</option>
            <option value="Front-end">Java</option>
            <option value="Software Testing">Software Testing</option>
          </select>

          <button type="submit" className="submit">Submit</button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Bookpopup;
