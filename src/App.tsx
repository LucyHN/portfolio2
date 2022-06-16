import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Routes/Home';
import About from './Routes/About';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
