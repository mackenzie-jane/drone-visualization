import React from 'react'
import { Link } from 'react-router-dom'
import drones from '../data/drones.json';

function Home() {
  const drone1 = drones[0]; // get the first drone (to use its picture later)

  return (
    <div className="text-center p-5">
      <h1 className="custom-title">Drone Audio-Visualization Tool</h1>
      
      <p className="custom-subtitle">
        Explore this dataset of drone audio recordings, spectrogram plots, amd MFCC plots.
      </p>
      
      <div className="mt-5">
        <img src={drone1.image} alt={drone1.name} width="300" />
      </div>

      <div className="mt-4">
        <a href="/drones" className="btn btn-outline-secondary me-2">Get Started</a>
        <a href="/info" className="btn btn-outline-secondary">Learn More</a>
      </div>
    </div>
  );
}


export default Home
