import React, { useState } from 'react';

const AudienceSettings = () => {
  const [audienceSettings, setAudienceSettings] = useState({
    email: 'Public',
    birthdayDayMonth: 'Friends',
    birthdayYear: 'Only Me',
    friendsList: 'Friends',
    followingList: 'Only Me',
    postAudience: 'Friends',
    storyAudience: 'Public',
    reelsAudience: 'Only Me',
  });

  const handleChange = (key, value) => {
    setAudienceSettings((prev) => ({ ...prev, [key]: value }));
  };

  const renderToggle = (key, label) => (
    <div className="toggle-section">
      <label>{label}</label>
      <select
        value={audienceSettings[key]}
        onChange={(e) => handleChange(key, e.target.value)}
      >
        <option value="Public">Public</option>
        <option value="Friends">Friends</option>
        <option value="Only Me">Only Me</option>
      </select>
    </div>
  );

  return (
    <div>
      <h2>Audience Settings</h2>
      {renderToggle('email', 'Email Visibility')}
      {renderToggle('birthdayDayMonth', 'Birthday (Day & Month)')}
      {renderToggle('birthdayYear', 'Birthday (Year)')}
      {renderToggle('friendsList', 'Friends List')}
      {renderToggle('followingList', 'Following List')}
      {renderToggle('postAudience', 'Default Post Audience')}
      {renderToggle('storyAudience', 'Default Story Audience')}
      {renderToggle('reelsAudience', 'Default Reels Audience')}
    </div>
  );
};

export default AudienceSettings;
