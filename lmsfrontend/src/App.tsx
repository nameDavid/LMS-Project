import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from './page/Home';
import './App.css';
import Hero from './component/Hero';



function App() {

  return (
    <><Router>
<div>
        <Home />
    
    
      </div>
    </Router>
      
    </>
  )
}

export default App
