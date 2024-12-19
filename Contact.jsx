import React from 'react';
import './Contact.css'; // Ensure you have this CSS file for the styling

const Contact = () => {
  return (
    <div className="contact-container">

      {/* Column 1 */}
      <div className="contact-column">
        <p className="column-title">Headquarters</p>
        <hr className="column-separator" />
        <p className="column-text py-4">Rome</p>
        <p className="column-text">Via dei Prati Fiscali 158</p>
        <p className="column-text">00141 Rome</p>
      </div>

      {/* Column 2 */}
      <div className="contact-column2">
        <p className="column-title">Agencies</p>
        <hr className="column-separator" />
        <div className="column-subsection">
          <div>
            <p className="column-text py-4">Bologna</p>
            <p className="column-text">Via Volta 13</p>
            <p className="column-text">40017 San Giovanni in Persiceto</p>
          </div>
          <div>
            <p className="column-text py-4">Modena</p>
            <p className="column-text">Via Corriera 16</p>
            <p className="column-text">41033 Concordia sulla secchia</p>
          </div>
        </div>
      </div>
      
      {/* Copyright Notice */}
      <div className="copyright-notice">
        ©Copyright 2024 Usta
      </div>
    </div>
  );
};

export default Contact;
