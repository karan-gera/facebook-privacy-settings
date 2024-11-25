import React, { useState } from 'react';
import PrivacySettings from './PrivacySettings';
import AccountManagement from './AccountManagement';
import YourInformation from './YourInformation';
import '../App.css';

const PrivacyCenter = () => {
  const [activeTab, setActiveTab] = useState('PrivacySettings');

  const renderContent = () => {
    switch (activeTab) {
      case 'PrivacySettings':
        return <PrivacySettings />;
      case 'AccountManagement':
        return <AccountManagement />;
      case 'YourInformation':
        return <YourInformation />;
      default:
        return <PrivacySettings />;
    }
  };

  return (
    <div className="container">
      <h1>Privacy Center</h1>
      <div className="tabs">
        <button
          className={activeTab === 'PrivacySettings' ? 'active-tab' : ''}
          onClick={() => setActiveTab('PrivacySettings')}
        >
          Privacy Settings
        </button>
        <button
          className={activeTab === 'AccountManagement' ? 'active-tab' : ''}
          onClick={() => setActiveTab('AccountManagement')}
        >
          Account Management
        </button>
        <button
          className={activeTab === 'YourInformation' ? 'active-tab' : ''}
          onClick={() => setActiveTab('YourInformation')}
        >
          Your Information
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default PrivacyCenter;
