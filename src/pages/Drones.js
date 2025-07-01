/* Drone Info Page
This will have the specfic charts and information about each drone

****** To Do: **********
- update JSON file to include all the drones
- center the information to look professional

- make pretty

*/
import React from 'react';
import drones from '../data/drones.json';
import { Link } from 'react-router-dom';

function Drones() {
  return (
    <div className="mt-4">
      <h1 className="custom-title">All Drones</h1> 
      
      <p className="custom-subtitle">
        Click on the image of the drone to view its audio recording, spectrogram plot, amd MFCC plot.
      </p>

      {/* 
        Goes through every drone in the list and returns its picture and name.
        The "drone-grid" class will put the "drone-card" containers in a grid layout
      
      */}
      <div className="drone-grid">
        {drones.map(drone => (
          <div key={drone.id} className="drone-card">

            {/* When the card is clicked, it will link to the individual drone page*/}
            <Link to={`/drone/${drone.id}`}>
              <h3 className="custom-bodytext">{drone.name}</h3>         
              <img src={`${process.env.PUBLIC_URL}${drone.image}`} alt={drone.name} width="300" />
            </Link>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Drones;
