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
            <p className="custom-subtitle">
              Mia Y. Wang
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
    


  
  </div>

  )
}
