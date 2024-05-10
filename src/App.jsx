import React from 'react';
import About from './components/About';
import Timer from './components/Timer';
import NavBar from './components/Navbar';
import BackgroundImg from './img/medsunset.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Timer />} exact />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
