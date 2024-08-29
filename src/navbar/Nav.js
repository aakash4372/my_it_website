import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './nav.css';
import { useState } from 'react';
import Bookpopup from '../Bookform/book';

function Nave() {

    const [popupshow, setpopupShow] = useState(false);

    const popuphandleClose = () => setpopupShow(false);
    const popuphandleShow = () => setpopupShow(true);



    const[show, setshow]=useState(false);
    const handleclose=()=>setshow(false);
    const handleshow=()=>setshow(true)
    
    return (
        <>
        {['xl'].map((expand) => (
            <Navbar key={expand} expand={expand} className="bg-body-tertiary" bg="light" data-bs-theme="light" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#">
                <img src="images/asset 0.jpeg" alt="Logo" width="150" />
                {' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleshow} />
                <Navbar.Offcanvas
                show={show}
                onHide={handleclose}
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                >
                <Offcanvas.Header closeButton className='justify-content-start'>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img src="images/asset 0.jpeg" alt="Logo" width="150" />
                    {' '}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="align-items-center flex-grow-1 px-5">
                        <Nav.Link href="#home" onClick={handleclose}>Home</Nav.Link>
                        <Nav.Link href="#about"onClick={handleclose}>About</Nav.Link>
                        <Nav.Link href="#topics"onClick={handleclose}>Topics</Nav.Link>
                        <Nav.Link href="#technologies"onClick={handleclose}>Technologies</Nav.Link>
                        <Nav.Link href="#courses"onClick={handleclose}>Courses</Nav.Link>
                        <Nav.Link href="#testimonial" onClick={handleclose}>Testimonial</Nav.Link>
                        <Nav.Link href="#contact" onClick={handleclose}>Contact</Nav.Link>
                        <div className='d-none d-lg-block ms-auto'>
                            <div className='d-flex align-items-center'>
                                <img src='images/asset 1.svg' alt='contact' className='hover-img'/>
                                <Nav.Link href="tel:81898 91619" className='px-4 phone.link'>Call Now! <br/>+91 81898 91619</Nav.Link>
                                <Button type="submit" className="btn" onClick={popuphandleShow}>Book Now</Button>

                                <Bookpopup show={popupshow} handleClose={popuphandleClose} title="Book Your Seats" />
                            </div>
                        </div>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        ))}
        </>
    );
}

export default Nave;