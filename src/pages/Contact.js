/* Contact Page:

****** To Do **********
Both professors, myself, (Emma and Daisy?)
- email, contact picture

- make pretty
 */
import React from 'react';

export default function Contact() {
  return (
    <div className="text-center p-5">
      <h1 className="custom-title">Contact Information</h1>

      <div className="drone-grid">
        <div className="drone-grid">
          <h3 className="custom-bodytext">
            <div className="drone-card">
              <div className="contact-photo">
                <img
                  src={`${process.env.PUBLIC_URL}/headshot/Wang.jpg`}
                  alt="Dr. Mia Wang"
                />
              </div>
              <p className="custom-subtitle">
                Dr. Mia Y. Wang
              </p>
              Department of Computer Science
              College of Charleston
              Charleston, USA
              wangy5@cofc.edu
            </div>
          </h3>
        </div>

        <div className="drone-grid">
          <h3 className="custom-bodytext">
            <div className="drone-card">
              <div className="contact-photo">
                <img
                  src={`${process.env.PUBLIC_URL}/headshot/Mackenzie.jpeg`}
                  alt="Mackenzie Linn"
                />
              </div>
              <p className="custom-subtitle">
                Mackenzie Linn
              </p>
              Department of Computer Science
              College of Charleston
              Charleston, USA
              linnmj@cofc.edu
            </div>
          </h3>
        </div>

      </div>

      <br />
      <br />

      <p className="custom-subtitle">
        For More Information:
      </p>

      <h3 className="custom-bodytext p-1">
        <a
          href="https://charleston.edu/compsci/experiential-learning/cs-research-labs.php"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007BFF', textDecoration: 'underline' }}
        >
          CofC Drone Lab
        </a>
      </h3>




    </div>

  )
}
