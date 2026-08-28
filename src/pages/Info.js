/* Information Page
Provides information (similar to what is in the journal) regarding information about MEL and IFCC

*/
import React from 'react';

export default function Info() {
  return (
    <div className="text-center p-5">

      <h1 className="custom-title">Publications</h1>
      <br />
      <br />
      <p className="custom-subtitle">
        Journal Publication
      </p>

      <p className="custom-subtitle">
        Volume 10, Issue 6 of Advances in Science, Technology and Engineering Systems Journal (ASTES Journal)
      </p>

      <h3 className="custom-bodytext p-1">
        <a
          href="https://astesj.com/v10/i06/p08/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007BFF', textDecoration: 'underline' }}
        >
          A Comprehensive Dataset and Visualization Tool for Drone Acoustic Signatures (2024)
        </a>
      </h3>

      <br />
      <br />
      <p className="custom-subtitle">
        Conference Publication
      </p>

      <p className="custom-subtitle">
        Conference: 2024 Artificial Intelligence x Humanities, Education, and Art (AIxHEART)
      </p>

      <h3 className="custom-bodytext p-1">
        <a
          href="https://www.researchgate.net/publication/388017272_A_Comprehensive_Dataset_and_Visualization_Tool_for_Drone_Acoustic_Signatures"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007BFF', textDecoration: 'underline' }}
        >
          A Comprehensive Dataset and Visualization Tool for Drone Acoustic Signatures (2024)
        </a>
      </h3>

      <br />
      <br />

      <p className="custom-subtitle">
        Recent Publications:
      </p>


      <h3 className="custom-bodytext p-1">
        <a
          href="https://www.researchgate.net/publication/387589122_Improving_Drone_Classification_with_Audio-Derived_Visual_Features_A_Vision_Model_Comparison"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007BFF', textDecoration: 'underline' }}
        >
          Improving Drone Classification with Audio-Derived Visual Features: A Vision Model Comparison (2024)
        </a>
        <br />
        <br />
        <a
          href="https://www.scitepress.org/Papers/2024/128274/128274.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007BFF', textDecoration: 'underline' }}
        >
          Visualization and Interpretation of Mel-Frequency Cepstral Coefficients for UAV Drone Audio Data (2024)
        </a>
      </h3>


      <br />
      <br />

      {/* <p className="custom-subtitle">
        How MFCC is derived:
      </p>
      <h3 className="custom-bodytext p-1">
        ADD INFO HERE!
      </h3>   

      <br />
      <br />
      
      <p className="custom-subtitle">
        Purpose of everything!
      </p>
      <h3 className="custom-bodytext p-1">
        ADD INFO HERE!
      </h3>    */}


    </div>

  )
}
