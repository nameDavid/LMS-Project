import React from "react";
import './css/Home.css'; // Assuming you have a CSS file for Home component
import Header from "../component/Header";
import Hero from "../component/Hero";
import Explore from "../component/Explore";


const Home = () => {
  return (
    <div>
      <Header />
        <Hero />
       <Explore />
    </div>

  );
};

export default Home;
