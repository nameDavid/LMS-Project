import React from 'react';
import './css/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
       <div className="circle circle1"></div>
       <div className="circle circle2"></div>
       <div className="hero-text">
         <h1>Better <span>Learning</span>Future StartsWith Penn</h1>
         <p>It is a long established fact that reader will be distracted readable content of a page when.</p>
         <a href="#">Explore Courses</a>
         <div className="stats">
           <div className="stat"><span>📖</span><p>4500+ Online Course</p></div>
           <div className="stat"><span>👥</span><p>7500+ Active Student</p></div>
         </div>
       </div>
       <div className="image-container">
         <img src="../assets/heroImg.png" alt="Student Image"/>
       </div>
     </div>
   
   
  );
};

export default Hero;
