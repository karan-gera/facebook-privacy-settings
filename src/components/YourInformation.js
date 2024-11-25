import React from 'react';

const YourInformation = () => {
  return (
    <div>
      <h2>Your Information</h2>
      <div className="toggle-section">
        <label>Access your information</label>
        <button>Access</button>
      </div>
      <div className="toggle-section">
        <label>Download your information</label>
        <button>Download</button>
      </div>
      <div className="toggle-section">
        <label>Transfer a copy of your information</label>
        <button>Transfer</button>
      </div>
      <div className="toggle-section">
        <label>Review Search History</label>
        <button>Review</button>
      </div>
    </div>
  );
};

export default YourInformation;
