import React from 'react';

const AccountManagement = () => {
  return (
    <div>
      <h2>Account Management</h2>
      <div className="toggle-section">
        <label>Manage Profiles</label>
        <button>Go</button>
      </div>
      <div className="toggle-section">
        <label>Change Password</label>
        <button>Update</button>
      </div>
      <div className="toggle-section">
        <label>Two-Factor Authentication</label>
        <button>Set Up</button>
      </div>
      <div className="toggle-section">
        <label>Where you’re logged in</label>
        <button>View Devices</button>
      </div>
      <div className="toggle-section">
        <label>Login alerts</label>
        <button>Enable</button>
      </div>
    </div>
  );
};

export default AccountManagement;
