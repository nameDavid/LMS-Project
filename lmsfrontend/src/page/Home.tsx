import React from "react";
import './css/Home.css'; 
import Header from "../component/Header";
import Hero from "../component/Hero";
import Explore from "../component/Explore";
import student1 from '../assets/student1r.jpg';
import student2 from '../assets/student2rr.jpg';
import student3 from '../assets/student3r.png';



const Home = () => {
  return (
    <div>
      <Header />
        <Hero />
       <Explore />

         <section className="skills-section">
        <div className="container">
            <div className="image-column">
                <div className="image-stack">
                    <img src={student1} alt="Student 1" className="image-item1" />
                    <img src={student3} alt="Student 2" className="image-item" />
                    <img src={student2} alt="Student 3" className="image-item1" />
                </div>
            </div>
            <div className="content-column">
                <h1>Learn New Skills To Go Ahead <span className="highlight-green">For Your Career.</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do eiusmod tempor incididunt ut labore et simply.</p>

                <div className="card-actions">
                    <div className="icon-box">
                        <i className="fas fa-bullseye"></i>
                    </div>
                    <div className="card-content">
                        <h3>Our Mission</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                    </div>
                </div>

                <div className="card-actions">
                    <div className="icon-box">
                        <i className="fas fa-lightbulb"></i>
                    </div>
                    <div className="card-content">
                        <h3>Our Vision</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                    </div>
                </div>

                <button className="discover-button">Discover More</button>
            </div>
        </div>
    </section>

    <section className="achievement-section">
        <div className="fun-fact">SOME FUN FACT</div>
        <h2>Our Great <span>Achievement</span></h2>
        <div className="achievement-cards">
            <div className="card">
                <i className="fas fa-smile"></i>
                <div className="number">8232</div>
                <div className="label">Enrolled Students</div>
            </div>
            <div className="card2">
                <i className="fas fa-file-alt"></i>
                <div className="number">521</div>
                <div className="label">Academic Programs</div>
            </div>
            <div className="card2">
                <i className="fas fa-award"></i>
                <div className="number">163</div>
                <div className="label">Winning Award</div>
            </div>
            <div className="card2">
                <i className="fas fa-user-graduate"></i>
                <div className="number">93</div>
                <div className="label">Certified Students</div>
            </div>
        </div>
    </section>
    </div>

  );
};

export default Home;
