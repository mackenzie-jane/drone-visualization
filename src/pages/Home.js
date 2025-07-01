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

      <div className="drone-grid-home">
        {drones.map(drone => (
          <div key={drone.id} className="drone-card-home">

            {/* When the card is clicked, it will link to the individual drone page*/}
            <Link to={`/drone/${drone.id}`}>
              <img src={`${process.env.PUBLIC_URL}${drone.image}`} alt={drone.name} className="drone-image" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <a href="/drones" className="btn btn-outline-secondary me-2">Get Started</a>
        <a href="/info" className="btn btn-outline-secondary">Learn More</a>
      </div>

    </div>
  );
}


export default Home
