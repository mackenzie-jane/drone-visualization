/* Drone Home Page
This will have a list of all the drones added

****** To Do: **********
- update JSON file to include all the drones
- center the drones and put themm in boxes (specific component?)

- make pretty

*/

import React from 'react';
import { useParams } from 'react-router-dom';
import drones from '../data/drones.json';

function DronePage() {
  const { id } = useParams();
  const drone = drones.find(d => d.id === id);

  if (!drone) return <h2>Drone not found</h2>;

  return (
    <div className="text-center p-5">
      <h1 className="custom-title">{drone.name}</h1>

      <img src={drone.image} alt={drone.name} width="300" />

      <p className="custom-subtitle">
        Audio Recording
      </p>

      <audio controls>
        <source src={drone.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/*
        <p>{drone.info}</p> 
      */}

      <div className="image-row">
        <div className="image-box">
          <p className="custom-subtitle">
            Mel-frequency Cepstral Coefficient (MFCC) Plot
          </p>      
          <img src={drone.mel} alt="Chart 1" className="responsive-image" />
        </div>


        <div className="image-box">
          <p className="custom-subtitle">
            Spectrogram Plot
          </p>      
          <img src={drone.ifcc} alt="Chart 2" className="responsive-image" />
        </div>
      </div>
    </div>
  );
}

export default DronePage;

