import React, { useState, useEffect } from 'react';
import { TextField, List, ListItem, ListItemText, Paper, InputAdornment, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Fuse from 'fuse.js';

const searchableSettings = [
  // Privacy Settings
  {
    id: 'profile-visibility',
    name: 'Profile Visibility',
    description: 'Control who can see your profile information',
    keywords: ['profile', 'visibility', 'privacy', 'view', 'see'],
    tab: 'PrivacySettings',
    section: 'Audience and Visibility'
  },
  {
    id: 'email-visibility',
    name: 'Email Visibility',
    description: 'Control who can see your email address',
    keywords: ['email', 'visibility', 'contact', 'address'],
    tab: 'PrivacySettings',
    section: 'Audience and Visibility'
  },
  {
    id: 'birthdayDayMonth',
    name: 'Birthday Day & Month Visibility',
    description: 'Control who can see your birthday (day and month)',
    keywords: ['birthday', 'date', 'birth', 'day', 'month'],
    tab: 'PrivacySettings',
    section: 'Audience and Visibility'
  },
  {
    id: 'birthdayYear',
    name: 'Birth Year Visibility',
    description: 'Control who can see your birth year',
    keywords: ['birthday', 'year', 'birth', 'age'],
    tab: 'PrivacySettings',
    section: 'Audience and Visibility'
  },
  {
    id: 'friendsList',
    name: 'Friends List Visibility',
    description: 'Control who can see your friends list',
    keywords: ['friends', 'list', 'connections', 'visibility'],
    tab: 'PrivacySettings',
    section: 'Audience and Visibility'
  },
  {
    id: 'followingList',
    name: 'Following List Visibility',
    description: 'Control who can see accounts you follow',
    keywords: ['following', 'list', 'follows', 'visibility'],
    tab: 'PrivacySettings',
    section: 'Audience and Visibility'
  },
  {
    id: 'search-engine-discovery',
    name: 'Search Engine Discovery',
    description: 'Control if search engines can link to your profile',
    keywords: ['search', 'engine', 'google', 'discovery', 'find'],
    tab: 'PrivacySettings',
    section: 'Profile Discovery'
  },
  {
    id: 'friend-discovery-email',
    name: 'Friend Discovery via Email',
    description: 'Allow people to find you using your email address',
    keywords: ['friend', 'discovery', 'email', 'find', 'search'],
    tab: 'PrivacySettings',
    section: 'Profile Discovery'
  },
  {
    id: 'friend-discovery-phone',
    name: 'Friend Discovery via Phone',
    description: 'Allow people to find you using your phone number',
    keywords: ['friend', 'discovery', 'phone', 'find', 'search', 'mobile'],
    tab: 'PrivacySettings',
    section: 'Profile Discovery'
  },
  {
    id: 'blocking',
    name: 'Blocking Settings',
    description: 'Manage blocked users and blocking settings',
    keywords: ['block', 'blocked', 'users', 'restrict', 'access'],
    tab: 'PrivacySettings',
    section: 'Blocking'
  },
  {
    id: 'ad-preferences',
    name: 'Ad Preferences',
    description: 'Manage your advertising preferences',
    keywords: ['ads', 'advertising', 'preferences', 'targeting'],
    tab: 'PrivacySettings',
    section: 'Ad Preferences'
  },

  // Account Management
  {
    id: 'manage-profiles',
    name: 'Manage Profiles',
    description: 'Manage your profile settings and information',
    keywords: ['profile', 'manage', 'settings', 'information'],
    tab: 'AccountManagement',
    section: 'Profile Settings'
  },
  {
    id: 'change-password',
    name: 'Change Password',
    description: 'Update your account password',
    keywords: ['password', 'change', 'security', 'update', 'login'],
    tab: 'AccountManagement',
    section: 'Security'
  },
  {
    id: 'two-factor-auth',
    name: 'Two-Factor Authentication',
    description: 'Set up two-factor authentication for added security',
    keywords: ['2fa', 'two-factor', 'authentication', 'security', 'login', 'verification'],
    tab: 'AccountManagement',
    section: 'Security'
  },
  {
    id: 'active-sessions',
    name: 'Active Sessions',
    description: 'View and manage your active login sessions',
    keywords: ['sessions', 'active', 'login', 'devices', 'security'],
    tab: 'AccountManagement',
    section: 'Login Activity'
  },
  {
    id: 'login-alerts',
    name: 'Login Alerts',
    description: 'Get notified of new login attempts',
    keywords: ['login', 'alerts', 'notifications', 'security', 'warning'],
    tab: 'AccountManagement',
    section: 'Login Activity'
  },

  // Your Information
  {
    id: 'access-info',
    name: 'Access Your Information',
    description: 'View and manage your Facebook information',
    keywords: ['access', 'information', 'data', 'view', 'manage'],
    tab: 'YourInformation',
    section: 'Data Access'
  },
  {
    id: 'search-history',
    name: 'Search History',
    description: 'View and manage your search history',
    keywords: ['search', 'history', 'activity', 'clear', 'delete'],
    tab: 'YourInformation',
    section: 'Data Access'
  },
  {
    id: 'download-info',
    name: 'Download Your Information',
    description: 'Download a copy of your Facebook data',
    keywords: ['download', 'information', 'data', 'copy', 'export'],
    tab: 'YourInformation',
    section: 'Data Management'
  },
  {
    id: 'transfer-info',
    name: 'Transfer Your Information',
    description: 'Transfer your Facebook data to other services',
    keywords: ['transfer', 'information', 'data', 'export', 'move'],
    tab: 'YourInformation',
    section: 'Data Management'
  },
  // Ad Topics
  {
    id: 'ad-topics-gambling',
    name: 'Gambling Ad Settings',
    description: 'Control gambling-related ad content',
    keywords: ['ads', 'gambling', 'casino', 'betting', 'preferences'],
    tab: 'PrivacySettings',
    section: 'Ad Preferences'
  },
  {
    id: 'ad-topics-alcohol',
    name: 'Alcohol Ad Settings',
    description: 'Control alcohol-related ad content',
    keywords: ['ads', 'alcohol', 'beverages', 'drinks', 'preferences'],
    tab: 'PrivacySettings',
    section: 'Ad Preferences'
  },
  {
    id: 'ad-topics-dating',
    name: 'Dating Ad Settings',
    description: 'Control dating-related ad content',
    keywords: ['ads', 'dating', 'relationships', 'preferences'],
    tab: 'PrivacySettings',
    section: 'Ad Preferences'
  },
  {
    id: 'ad-topics-politics',
    name: 'Political Ad Settings',
    description: 'Control political ad content',
    keywords: ['ads', 'politics', 'political', 'campaigns', 'preferences'],
    tab: 'PrivacySettings',
    section: 'Ad Preferences'
  },
  {
    id: 'ad-topics-parenting',
    name: 'Parenting Ad Settings',
    description: 'Control parenting and baby-related ad content',
    keywords: ['ads', 'parenting', 'baby', 'children', 'preferences'],
    tab: 'PrivacySettings',
    section: 'Ad Preferences'
  },
  {
    id: 'ad-topics-weightloss',
    name: 'Weight Loss Ad Settings',
    description: 'Control weight loss and diet-related ad content',
    keywords: ['ads', 'weight', 'diet', 'fitness', 'preferences'],
    tab: 'PrivacySettings',
    section: 'Ad Preferences'
  },
  {
    id: 'ad-topics-crypto',
    name: 'Cryptocurrency Ad Settings',
    description: 'Control cryptocurrency and NFT-related ad content',
    keywords: ['ads', 'crypto', 'cryptocurrency', 'nft', 'blockchain', 'preferences'],
    tab: 'PrivacySettings',
    section: 'Ad Preferences'
  }
];

const fuseOptions = {
  keys: [
    { name: 'name', weight: 0.4 },
    { name: 'description', weight: 0.3 },
    { name: 'keywords', weight: 0.2 },
    { name: 'section', weight: 0.1 }
  ],
  threshold: 0.3,
  includeScore: true
};

const GlobalSearch = ({ onResultClick }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const fuse = new Fuse(searchableSettings, fuseOptions);

  useEffect(() => {
    if (search.trim()) {
      const searchResults = fuse.search(search)
        .sort((a, b) => a.score - b.score)
        .slice(0, 8); // Show top 8 results
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [search]);

  const handleResultClick = (item) => {
    onResultClick({
      tab: item.tab,
      settingId: item.id,
      section: item.section
    });
    setSearch('');
    setResults([]);
  };

  return (
    <div style={{ marginBottom: '20px', position: 'relative' }}>
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        placeholder="Search settings (e.g., 'password', 'blocking', 'privacy'...)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
      {results.length > 0 && (
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 1000,
            mt: 1,
            maxHeight: '400px',
            overflowY: 'auto'
          }}
        >
          <List>
            {results.map(({ item, score }) => (
              <ListItem
                key={item.id}
                button
                onClick={() => handleResultClick(item)}
                sx={{
                  '&:hover': {
                    backgroundColor: '#f0f2f5',
                  }
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                          sx={{ display: 'block', fontSize: '13px' }}
                        >
                          {item.description}
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: '12px' }}
                        >
                          {item.section} • {item.tab.replace(/([A-Z])/g, ' $1').trim()}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </Box>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default GlobalSearch; 