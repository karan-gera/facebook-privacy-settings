import React, { useState } from 'react';
import { 
  FormControl, 
  Select, 
  MenuItem, 
  InputLabel,
  Typography,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import LockIcon from '@mui/icons-material/Lock';

const SettingDescription = styled(Typography)({
  fontSize: '13px',
  color: '#65676b',
  marginBottom: '24px',
});

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

  const getIcon = (value) => {
    switch (value) {
      case 'Public':
        return <PublicIcon sx={{ color: '#1877f2' }} />;
      case 'Friends':
        return <PeopleIcon sx={{ color: '#1877f2' }} />;
      case 'Only Me':
        return <LockIcon sx={{ color: '#1877f2' }} />;
      default:
        return null;
    }
  };

  const renderMenuItem = (value) => (
    <MenuItem value={value}>
      <Stack direction="row" spacing={1} alignItems="center">
        {getIcon(value)}
        <span>{value}</span>
      </Stack>
    </MenuItem>
  );

  const settings = [
    {
      key: 'email',
      label: 'Email Visibility',
      description: 'Who can see your email address on your profile',
    },
    {
      key: 'birthdayDayMonth',
      label: 'Birthday (Day & Month)',
      description: 'Control who can see your birthday on your profile',
    },
    {
      key: 'birthdayYear',
      label: 'Birthday (Year)',
      description: 'Choose who can see your birth year',
    },
    {
      key: 'friendsList',
      label: 'Friends List',
      description: 'Control who can see your friends list on your profile',
    },
    {
      key: 'followingList',
      label: 'Following List',
      description: 'Choose who can see the people and pages you follow',
    },
    {
      key: 'postAudience',
      label: 'Default Post Audience',
      description: 'Set the default audience for your new posts',
    },
    {
      key: 'storyAudience',
      label: 'Default Story Audience',
      description: 'Choose who can see your stories by default',
    },
    {
      key: 'reelsAudience',
      label: 'Default Reels Audience',
      description: 'Set the default audience for your reels',
    },
  ];

  return (
    <Stack spacing={1}>
      {settings.map((setting) => (
        <div key={setting.key}>
          <FormControl fullWidth size="small">
            <InputLabel>{setting.label}</InputLabel>
            <Select
              value={audienceSettings[setting.key]}
              onChange={(e) => handleChange(setting.key, e.target.value)}
              label={setting.label}
              renderValue={(value) => (
                <Stack direction="row" spacing={1} alignItems="center">
                  {getIcon(value)}
                  <span>{value}</span>
                </Stack>
              )}
            >
              {renderMenuItem('Public')}
              {renderMenuItem('Friends')}
              {renderMenuItem('Only Me')}
            </Select>
          </FormControl>
          <SettingDescription variant="body2">
            {setting.description}
          </SettingDescription>
        </div>
      ))}
    </Stack>
  );
};

export default AudienceSettings;
