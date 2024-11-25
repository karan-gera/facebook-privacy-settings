import React, { useState } from 'react';
import AudienceSettings from './AudienceSettings';
import Blocking from './Blocking';

const PrivacySettings = () => {
  const [searchEngineDiscovery, setSearchEngineDiscovery] = useState(false);
  const [friendDiscoveryEmail, setFriendDiscoveryEmail] = useState(false);
  const [friendDiscoveryPhone, setFriendDiscoveryPhone] = useState(false);
  const [adPreferences, setAdPreferences] = useState({
    employer: false,
    jobTitle: false,
    education: false,
    relationshipStatus: false,
  });

  const toggleAdPreference = (key) => {
    setAdPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <AudienceSettings />
      <Blocking />
      <div className="toggle-section">
        <h3>Search Engine Discovery</h3>
        <label htmlFor="search-engine-toggle">
          Allow profile discovery on search engines?
        </label>
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="search-engine-toggle"
            className="toggle-input"
            checked={searchEngineDiscovery}
            onChange={(e) => setSearchEngineDiscovery(e.target.checked)}
          />
          <span className="slider"></span>
        </div>
      </div>
      <div className="toggle-section">
        <h3>Friend Discovery</h3>
        <label htmlFor="friend-email-toggle">
          Allow friend discovery via email?
        </label>
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="friend-email-toggle"
            className="toggle-input"
            checked={friendDiscoveryEmail}
            onChange={(e) => setFriendDiscoveryEmail(e.target.checked)}
          />
          <span className="slider"></span>
        </div>
        <label htmlFor="friend-phone-toggle">
          Allow friend discovery via phone?
        </label>
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="friend-phone-toggle"
            className="toggle-input"
            checked={friendDiscoveryPhone}
            onChange={(e) => setFriendDiscoveryPhone(e.target.checked)}
          />
          <span className="slider"></span>
        </div>
      </div>
      <div className="ad-preferences">
        <h3>Ad Preferences</h3>
        <div className="search-section">
          <h4>Ad Topics</h4>
          <input type="text" placeholder="Search topics..." />
        </div>
        <div className="toggle-section">
          <label htmlFor="ad-employer-toggle">Employer</label>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="ad-employer-toggle"
              className="toggle-input"
              checked={adPreferences.employer}
              onChange={() => toggleAdPreference('employer')}
            />
            <span className="slider"></span>
          </div>
          <label htmlFor="ad-job-title-toggle">Job Title</label>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="ad-job-title-toggle"
              className="toggle-input"
              checked={adPreferences.jobTitle}
              onChange={() => toggleAdPreference('jobTitle')}
            />
            <span className="slider"></span>
          </div>
          <label htmlFor="ad-education-toggle">Education</label>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="ad-education-toggle"
              className="toggle-input"
              checked={adPreferences.education}
              onChange={() => toggleAdPreference('education')}
            />
            <span className="slider"></span>
          </div>
          <label htmlFor="ad-relationship-status-toggle">
            Relationship Status
          </label>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="ad-relationship-status-toggle"
              className="toggle-input"
              checked={adPreferences.relationshipStatus}
              onChange={() => toggleAdPreference('relationshipStatus')}
            />
            <span className="slider"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
