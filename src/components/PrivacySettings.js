import React, { useState } from 'react';
import AudienceSettings from './AudienceSettings';
import Blocking from './Blocking';
import { 
  Switch, 
  FormControlLabel, 
  Typography, 
  Paper,
  Stack,
  TextField,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '15px',
  fontWeight: 600,
  color: '#1c1e21',
  marginBottom: theme.spacing(2),
}));

const SubsectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 600,
  color: '#1c1e21',
  marginBottom: theme.spacing(1),
}));

const Section = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  backgroundColor: '#f8f9fa',
}));

const Subsection = styled('div')(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const SearchTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#ffffff',
    '&.Mui-focused': {
      backgroundColor: '#ffffff',
    },
    '&:hover': {
      backgroundColor: '#ffffff',
    },
  },
});

const PrivacySettings = ({ highlightedSetting }) => {
  const [searchEngineDiscovery, setSearchEngineDiscovery] = useState(false);
  const [friendDiscoveryEmail, setFriendDiscoveryEmail] = useState(false);
  const [friendDiscoveryPhone, setFriendDiscoveryPhone] = useState(false);
  const [adPreferences, setAdPreferences] = useState({
    employer: false,
    jobTitle: false,
    education: false,
    relationshipStatus: false,
  });
  const [blockedAdTopics, setBlockedAdTopics] = useState({
    gambling: false,
    alcohol: false,
    dating: false,
    politics: false,
    parenting: false,
    weightLoss: false,
    cryptocurrency: false,
  });

  const toggleAdPreference = (key) => {
    setAdPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAdTopic = (key) => {
    setBlockedAdTopics((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Stack spacing={2}>
      <Section elevation={0}>
        <SectionTitle variant="h6">Privacy Settings</SectionTitle>

        <Subsection>
          <SubsectionTitle>Audience and Visibility</SubsectionTitle>
          <div id="profile-visibility">
            <AudienceSettings />
          </div>
        </Subsection>

        <Subsection>
          <SubsectionTitle>Profile Discovery</SubsectionTitle>
          <Stack spacing={2}>
            <div id="search-engine-discovery">
              <FormControlLabel
                control={
                  <Switch
                    checked={searchEngineDiscovery}
                    onChange={(e) => setSearchEngineDiscovery(e.target.checked)}
                  />
                }
                label="Allow profile discovery on search engines?"
                labelPlacement="start"
                sx={{ 
                  margin: 0,
                  width: '100%',
                  justifyContent: 'space-between'
                }}
              />
            </div>
            
            <div id="friend-discovery-email">
              <FormControlLabel
                control={
                  <Switch
                    checked={friendDiscoveryEmail}
                    onChange={(e) => setFriendDiscoveryEmail(e.target.checked)}
                  />
                }
                label="Allow friend discovery via email?"
                labelPlacement="start"
                sx={{ 
                  margin: 0,
                  width: '100%',
                  justifyContent: 'space-between'
                }}
              />
            </div>

            <div id="friend-discovery-phone">
              <FormControlLabel
                control={
                  <Switch
                    checked={friendDiscoveryPhone}
                    onChange={(e) => setFriendDiscoveryPhone(e.target.checked)}
                  />
                }
                label="Allow friend discovery via phone?"
                labelPlacement="start"
                sx={{ 
                  margin: 0,
                  width: '100%',
                  justifyContent: 'space-between'
                }}
              />
            </div>
          </Stack>
        </Subsection>

        <Subsection>
          <SubsectionTitle>Blocking</SubsectionTitle>
          <div id="blocking">
            <Blocking />
          </div>
        </Subsection>

        <Subsection id="ad-preferences">
          <SubsectionTitle>Ad Preferences</SubsectionTitle>
          
          <Stack spacing={3}>
            <div>
              <SubsectionTitle>What can advertisers see about you?</SubsectionTitle>
              <Stack spacing={2}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={adPreferences.employer}
                      onChange={() => toggleAdPreference('employer')}
                    />
                  }
                  label="Employer"
                  labelPlacement="start"
                  sx={{ 
                    margin: 0,
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={adPreferences.jobTitle}
                      onChange={() => toggleAdPreference('jobTitle')}
                    />
                  }
                  label="Job Title"
                  labelPlacement="start"
                  sx={{ 
                    margin: 0,
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={adPreferences.education}
                      onChange={() => toggleAdPreference('education')}
                    />
                  }
                  label="Education"
                  labelPlacement="start"
                  sx={{ 
                    margin: 0,
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={adPreferences.relationshipStatus}
                      onChange={() => toggleAdPreference('relationshipStatus')}
                    />
                  }
                  label="Relationship Status"
                  labelPlacement="start"
                  sx={{ 
                    margin: 0,
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                />
              </Stack>
            </div>

            <Divider />

            <div>
              <SubsectionTitle>Ad Topics</SubsectionTitle>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                I do not wish to see ads about...
              </Typography>

              <Stack spacing={2}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={blockedAdTopics.gambling}
                      onChange={() => toggleAdTopic('gambling')}
                    />
                  }
                  label="Gambling and Casino Games"
                  labelPlacement="start"
                  sx={{ 
                    margin: 0,
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={blockedAdTopics.alcohol}
                      onChange={() => toggleAdTopic('alcohol')}
                    />
                  }
                  label="Alcohol and Beverages"
                  labelPlacement="start"
                  sx={{ 
                    margin: 0,
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={blockedAdTopics.dating}
                      onChange={() => toggleAdTopic('dating')}
                    />
                  }
                  label="Dating and Relationships"
                  labelPlacement="start"
                  sx={{ 
                    margin: 0,
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={blockedAdTopics.politics}
                      onChange={() => toggleAdTopic('politics')}
                    />
                  }
                  label="Political Content"
                  labelPlacement="start"
                  sx={{ 
                    margin: 0,
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={blockedAdTopics.parenting}
                      onChange={() => toggleAdTopic('parenting')}
                    />
                  }
                  label="Parenting and Baby Products"
                  labelPlacement="start"
                  sx={{ 
                    margin: 0,
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={blockedAdTopics.weightLoss}
                      onChange={() => toggleAdTopic('weightLoss')}
                    />
                  }
                  label="Weight Loss and Diet Products"
                  labelPlacement="start"
                  sx={{ 
                    margin: 0,
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={blockedAdTopics.cryptocurrency}
                      onChange={() => toggleAdTopic('cryptocurrency')}
                    />
                  }
                  label="Cryptocurrency and NFTs"
                  labelPlacement="start"
                  sx={{ 
                    margin: 0,
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                />
              </Stack>

              <SearchTextField
                fullWidth
                variant="outlined"
                placeholder="Search for more topics to block..."
              />
            </div>
          </Stack>
        </Subsection>
      </Section>
    </Stack>
  );
};

export default PrivacySettings;
