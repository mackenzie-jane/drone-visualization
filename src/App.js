import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Info from './pages/Info';
import Contact from './pages/Contact';
import Drones from './pages/Drones';
import DronePage from './pages/DronePage';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app-container">

      <Router>
        <Navbar /> {/* Shows on all pages */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/drones" element={<Drones />} />
          <Route path="/drone/:id" element={<DronePage />} />
        </Routes>
        <main className="content">
        </main>

        <Footer /> {/* 👈 Add it here so it shows on all pages */}
      </Router>

    </div>
  );
}

export default App;
