import React, { useEffect } from 'react';
import './topic.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Topic = () => {
   
  useEffect(()=>{
    AOS.init({
      once: true,
      duration: 1200,
      });
  },[])
    return (
        <div class='section_container' id='topics'> 
            <div className='section_topic container '>
                <div className="text-lg-center container ">
                    <p className='section_topic_one'>MASTER PROGRAMS</p>
                    <div className='section_topic_two'>
                        <h2>Topic We Cover</h2>
                    </div>
                </div><br/>

                <div class="accordion container" id="accordionPanelsStayOpenExample" data-aos="zoom-in">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Front-End Development
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                        <div class="accordion-body zoom-in-right">
                        <p class="pb-3">Get a deeper understanding of Client Side Programming or in other words the front end development by developing highly responsive web pages across languages.</p>
                            
                            <ul>
                                <li>Understand how websites work and how HTML, CSS and JavaScript contribute.</li>
                                <li>Understand how the internet works.</li>
                                <li>Learn HTML tags & features of HTML5.</li>
                                <li>Learn the fundamentals of implementing responsive web design.</li>
                                <li>How to use Bootstrap to create a web page.</li>
                                <li>Adding symbols using Font Awesome.</li>
                                <li>Strengthen your basics in React JS.</li>
                            </ul>
                        </div>
                        </div>
                    </div><br/>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Back-End Development
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        <p class="pb-3">Learn the industry leading ways to design back end development with least response time, which in turn helps in the fast loading of web applications. You’ll learn to connect databases with servers.</p>
                        <ul>
                            <li>Build multi-user web applications using the Flask, Python, Java and NodeJS framework.</li>
                            <li>Take a brief look about node environment like npm and yarn.</li>
                            <li>Deploy your web applications onto web servers.</li>
                            <li>Brush up on your knowledge of fundamental developer tools such as the Unix shell, Git.</li>
                            <li>Detailed study of Inheritance, Encapsulation, Polymorphism, Abstraction and Class and their usage in Node and Python.</li>
                        </ul>
                        </div>
                        </div>
                    </div><br/>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Data Structure & scalability
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        <p class="pb-3">Learn Data Structures & Algorithms to write an efficient, robust, & optimized code. Learn how to build robust & scalable web servers with a thorough understanding of AWS.</p>
                        <ul>
                            <li>Getting better clarity about Algorithms and Data structures.</li>
                            <li>Learn to build better data types like Queue, Stack, and List.</li>
                            <li>Learn to use mathematically oriented algorithms.</li>
                            <li>Get to know about structural and non-structural databases.</li>
                            <li>Learn to use MySQL and Mongo connectors.</li>
                            <li>Get a better understanding of RDBMS concepts.</li>
                        </ul>
                        </div>
                        </div>
                    </div><br/>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        Build your Portfolio
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        <p class="pb-3">Build your Full stack developer Portfolio and demonstrate your knowledge by developing an end-to-end Full-stack Application.</p>
                        <ul>
                            <li>Porfolio of 5+ Projects</li>
                            <li>Hackathons</li>
                            <li>Get to know about structural and non-structural databases.</li>
                            <li>Learn to use MySQL and Mongo connectors.</li>
                            <li>Build Your GitHub Profile</li>
                        </ul>
                        </div>
                        </div>
                    </div><br/>
                </div>

            </div>
  
        </div>
    );
}

export default Topic;
