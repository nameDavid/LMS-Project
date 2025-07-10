import React from 'react';

import './css/Hero.css';
import heroImg from '../assets/heroImg1.png';


const Hero = () => {
  return (
    <section className="hero">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Unlock Your <span>Potential</span><br />
            with <span>Penn</span>
          </h1>
          <p>
            Discover a world of knowledge and skills. Join thousands of learners and start your journey today with our expert-led courses.
          </p>
          <a href="#" className="cta-btn">Explore Courses</a>
          <div className="stats">
            <div className="stat">
              <span role="img" aria-label="book">📖</span>
              <p>4,500+ Online Courses</p>
            </div>
            <div className="stat">
              <span role="img" aria-label="students">👥</span>
              <p>7,500+ Active Students</p>
            </div>
            <div className="stat">
              <span role="img" aria-label="certificate">🎓</span>
              <p>Certified Instructors</p>
            </div>
          </div>
        </div>
    
          <img src={heroImg} alt="Student at desk" />
    
      </div>

     
    </section>
  );
};

export default Hero;
