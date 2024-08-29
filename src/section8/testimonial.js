import React from 'react';
import './testimonial.css'
import Slider from "react-slick";


const Photo=[
  {
    id: 1,
    image: 'photo/hadrian.jpeg',
    name: 'Hadrian Fernandez',
    role: 'Full Stack Developer',
    detail: "I recently completed a Full Stack Development course at MY IT Career. The trainers were friendly and engaging, ensuring all questions were answered. I'm now proficient in both front-end and back-end technologies."
  },
  {
    id: 2,
    image: 'photo/sree.jpeg',
    name: 'Sree Hari Prasath',
    role: 'React Js Developer',
    detail: "Attending the React JS course at MY IT Career was transformative. The top-notch instructors made complex concepts accessible with clear explanations and practical examples. The course’s design effectively covered both basic and advanced React topics."
  },
  {
    id: 3,
    image: 'photo/sathya.jpeg',
    name: 'Sathya',
    role: 'Full Stack Developer',
    detail: "I'm Bcom graduate, I was afraid about the coding before joining MY IT Career, But now I can handle Fullstack projects, They trained me from the basics, Also they allow me to practice for the whole day which I didn't see this from anyother institutes"
  },
  {
    id: 4,
    image: 'photo/ranjith.jpeg',
    name: 'Ranjith',
    role: 'React Native Developer',
    detail: 'The institute offers comprehensive courses in React Native development, covering essential topics through practical, hands-on exercises. The instructors are highly skilled and provide excellent support, ensuring students effectively grasp complex concepts.'
  },
  {
    id: 5,
    image: 'photo/siva.jpeg',
    name: 'Siva Balaji',
    role: 'React Native Developer',
    detail: 'I recently completed the React Native developer course at MY IT Career, and I must say it was an exceptional experience. The course curriculum was well-structured and covered all the essential topics needed to excel in React Native development.'
  },
]
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: true,
  rtl: true,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
          }
      }
  ]
};

const Testimonial = () => {
  return (
    <div className='section_testimonial' id='testimonial'>
        <div className='section_testimonial_text container'>
        <div className="container text-lg-center">
          <p className='section_topic_one '>Our Technologies</p>
          <div className='section_topic_two '>
            <h2>To Learn More Our Success Stories</h2>
          </div>
        </div>

        <Slider {...settings}>
        {Photo.map((event)=>(
          <div key={event.id} className='card-testimonial px-3'>

            <div class="card test-card" >
            <div className='mx-auto d-block'>
            <img class="card-img-top  test-photo" src={event.image} alt="testimonial-pic"/>
            </div>
            <span className='span-1 text-center'>{event.name}</span>
            <span className='span-2 text-center'>{event.role}</span>
            <div class="card-body test-card-body">
              <p class="card-text test-card-text">{event.detail}</p>
            </div>

              

          </div>
          </div>
        ))}
        </Slider>

        
        
     </div>
    </div>

  );
}

export default Testimonial;
