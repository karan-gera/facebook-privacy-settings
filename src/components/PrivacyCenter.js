import React, { useState } from 'react';
import { IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrivacySettings from './PrivacySettings';
import AccountManagement from './AccountManagement';
import YourInformation from './YourInformation';
import GlobalSearch from './GlobalSearch';
import '../App.css';

const PrivacyCenter = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('PrivacySettings');
  const [highlightedSetting, setHighlightedSetting] = useState(null);

  const handleTabChange = (tabInfo) => {
    // If tabInfo is a string, it's a simple tab change
    if (typeof tabInfo === 'string') {
      setActiveTab(tabInfo);
      setHighlightedSetting(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If tabInfo is an object, it's from the search result
    const { tab, settingId, section } = tabInfo;
    setActiveTab(tab);
    setHighlightedSetting(settingId);

    // Wait for the tab content to render
    setTimeout(() => {
      const settingElement = document.getElementById(settingId);
      if (settingElement) {
        settingElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Add highlight animation
        settingElement.classList.add('highlight-setting');
        
        // Remove highlight after animation
        setTimeout(() => {
          settingElement.classList.remove('highlight-setting');
          setHighlightedSetting(null);
        }, 2000);
      }
    }, 100);
  };

  const renderContent = () => {
    const props = {
      highlightedSetting,
    };

    switch (activeTab) {
      case 'PrivacySettings':
        return <PrivacySettings {...props} />;
      case 'AccountManagement':
        return <AccountManagement {...props} />;
      case 'YourInformation':
        return <YourInformation {...props} />;
      default:
        return <PrivacySettings {...props} />;
    }
  };

  return (
    <div className="container">
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <IconButton 
          onClick={onBack}
          sx={{ 
            mr: 2,
            color: '#1877f2',
            '&:hover': {
              backgroundColor: '#e4e6eb',
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <h1 style={{ margin: 0 }}>Privacy Center</h1>
      </Box>
      <GlobalSearch onResultClick={handleTabChange} />
      <div className="tabs">
        <button
          className={activeTab === 'PrivacySettings' ? 'active-tab' : ''}
          onClick={() => handleTabChange('PrivacySettings')}
        >
          Privacy Settings
        </button>
        <button
          className={activeTab === 'AccountManagement' ? 'active-tab' : ''}
          onClick={() => handleTabChange('AccountManagement')}
        >
          Account Management
        </button>
        <button
          className={activeTab === 'YourInformation' ? 'active-tab' : ''}
          onClick={() => handleTabChange('YourInformation')}
        >
          Your Information
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default PrivacyCenter;
