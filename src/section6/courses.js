    import React, { useState } from 'react';
    import Slider from "react-slick";
    import './courses.css';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faHandPointRight, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
    import { Modal, Button } from 'react-bootstrap';


    function Courses() {
        const [show, setShow] = useState(false);
        const [modalContent, setModalContent] = useState({});

        const handleClose = () => setShow(false);
        const handleShow = (course) => {
            setModalContent(course);
            setShow(true);
        };

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        };

        const CourseDetails = [
            {
                id: 1,
                imageurl: 'images/java.png',
                title: "JAVA",
                description: "Master Java from basic syntax to OOP and multithreading, using tools to build scalable applications.",
                rating: "4.90/5.0",
                review: "(1024)",
                introduction: [
                    "Comprehensive coverage of Core Java concepts.",
                    "Hands-on projects with real-time scenarios.",
                    "Focus on OOP principles and design patterns.",
                    "Learn about Java Frameworks like Spring and Hibernate.",
                    "Get ready for Java certifications."
                ]
            },
            {
                id: 2,
                imageurl: 'images/software.png',
                title: "SOFTWARE TESTING",
                description: "Become proficient in manual and automated testing, designing effective test cases and using industry tools.",
                rating: "4.90/5.0",
                review: "(1024)",
                introduction: [
                    "In-depth understanding of manual and automation testing.",
                    "Hands-on experience with tools like Selenium and QTP.",
                    "Learn about Agile and DevOps practices.",
                    "Understand different types of testing methodologies.",
                    "Preparation for ISTQB certifications."
                ]
            },
            {
                id: 3,
                imageurl: 'images/python1.png',
                title: "PYTHON",
                description: "Unlock Python's potential for web development, data analysis, and automation with efficient coding and libraries.",
                rating: "4.90/5.0",
                review: "(1024)",
                introduction: [
                    "Learn Python from basics to advanced levels.",
                    "Focus on web development using Django and Flask.",
                    "Understand data manipulation and analysis with Pandas.",
                    "Introduction to machine learning concepts.",
                    "Build real-world applications and scripts."
                ]
            },
            {
                id: 4,
                imageurl: 'images/full.png', 
                title: "FULL STACK DEVELOPMENT",
                description: "Learn to build dynamic, responsive web applications from scratch...",
                rating: "4.95/5.0",
                review: "(1567)",
                introduction: [
                    "Introduction to Web Development",
                    "Front-End Development with HTML, CSS, JavaScript",
                    "Back-End Development with Node.js and Express",
                    "Database Management with MongoDB",
                    "Building Full-Stack Applications"
                ]
            },
        ];

        return (
            <div className="section_courses" id='courses'>
                <div className='section_courses_text container'>
                    <div className="text-lg-center container">
                        <p className='section_topic_one'>Popular Courses</p>
                    </div>

                    <Slider {...settings}>
                        {CourseDetails.map((course) => (
                            <div key={course.id} className="card-courses px-2">
                                <div className="card">
                                    <img src={course.imageurl} alt="image-for-courses" className="card-img-top img-fluid" />

                                    <div className="card-body">
                                        <div className='card-list-one'>
                                            <p className='card-list'>
                                                <FontAwesomeIcon icon={faStar} className='star' />
                                                <FontAwesomeIcon icon={faStar} className='star' />
                                                <FontAwesomeIcon icon={faStar} className='star' />
                                                <FontAwesomeIcon icon={faStar} className='star' />
                                                <FontAwesomeIcon icon={faStarHalfStroke} className='star' />
                                                <span className='ps-2'>{course.rating}</span>
                                            </p>
                                            <p className='review'>{course.review}</p>
                                        </div>

                                        <h5 className="card-title text-start title">{course.title}</h5>
                                        <p className="card-text text-start description">{course.description}</p>
                                    </div>

                                    <div className='text-center py-5'>
                                        <button className=" ms-auto my-button" onClick={() => handleShow(course)}>
                                            <FontAwesomeIcon icon={faHandPointRight} className="me-2" />
                                            View More Info..
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <Modal aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose} animation={false} >
                        <Modal.Header closeButton>
                            <Modal.Title>{modalContent.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <ul>
                            {modalContent.introduction && modalContent.introduction.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                        
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }

    export default Courses;
