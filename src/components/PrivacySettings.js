import React, { useState } from "react";
import AudienceSettings from "./AudienceSettings";
import Blocking from "./Blocking";
import {
  Switch,
  FormControlLabel,
  Typography,
  Paper,
  Stack,
  TextField,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 600,
  color: "#1c1e21",
  marginBottom: theme.spacing(3),
}));

const SubsectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  fontWeight: 600,
  color: "#1c1e21",
  marginBottom: theme.spacing(3),
}));

const TertiaryTitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: "#1c1e21",
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(3),
}));

const Section = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  backgroundColor: "#f8f9fa",
}));

const Subsection = styled("div")(({ theme }) => ({
  backgroundColor: "#ffffff",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const SearchTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#ffffff",
    "&.Mui-focused": {
      backgroundColor: "#ffffff",
    },
    "&:hover": {
      backgroundColor: "#ffffff",
    },
  },
});

const adTopicsList = [
  // Most Popular Topics (currently displayed)
  { id: "gambling", name: "Gambling and Casino Games", popular: true },
  { id: "alcohol", name: "Alcohol and Beverages", popular: true },
  { id: "dating", name: "Dating and Relationships", popular: true },
  { id: "politics", name: "Political Content", popular: true },
  { id: "parenting", name: "Parenting and Baby Products", popular: true },
  { id: "weightLoss", name: "Weight Loss and Diet Products", popular: true },
  { id: "cryptocurrency", name: "Cryptocurrency and NFTs", popular: true },

  // Additional Topics
  { id: "tobacco", name: "Tobacco and Smoking Products" },
  { id: "supplements", name: "Dietary Supplements and Enhancement Products" },
  { id: "loans", name: "Personal Loans and Debt Services" },
  { id: "cosmetic", name: "Cosmetic Procedures and Beauty Treatments" },
  { id: "religion", name: "Religious Content and Beliefs" },
  { id: "controversial", name: "Controversial Social Issues" },
  { id: "weapons", name: "Weapons and Military Equipment" },
  { id: "adult", name: "Adult Products and Services" },
  { id: "betting", name: "Sports Betting and Fantasy Sports" },
  { id: "insurance", name: "Insurance and Financial Services" },
  { id: "medical", name: "Medical Treatments and Procedures" },
  { id: "mental", name: "Mental Health and Therapy Services" },
  { id: "legal", name: "Legal Services and Law Firms" },
  { id: "realEstate", name: "Real Estate and Property Investment" },
  { id: "mlm", name: "Multi-Level Marketing and Business Opportunities" },
  { id: "gaming", name: "Gaming and Online Casinos" },
  { id: "subscription", name: "Subscription and Membership Services" },
  { id: "education", name: "Educational Programs and Courses" },
  { id: "employment", name: "Employment and Job Opportunities" },
  { id: "streaming", name: "Streaming and Entertainment Services" },
  { id: "travel", name: "Travel and Vacation Packages" },
  { id: "luxury", name: "Luxury Goods and Premium Products" },
  { id: "fitness", name: "Fitness and Exercise Programs" },
  { id: "nutrition", name: "Nutrition and Diet Plans" },
];

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
  const [blockedAdTopics, setBlockedAdTopics] = useState(
    adTopicsList.reduce(
      (acc, topic) => ({
        ...acc,
        [topic.id]: false,
      }),
      {}
    )
  );
  const [adTopicSearch, setAdTopicSearch] = useState("");

  const toggleAdPreference = (key) => {
    setAdPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAdTopic = (key) => {
    setBlockedAdTopics((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredAdTopics = adTopicsList.filter((topic) =>
    topic.name.toLowerCase().includes(adTopicSearch.toLowerCase())
  );

  return (
    <Stack spacing={2}>
      <Section elevation={0}>
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
                  width: "100%",
                  justifyContent: "space-between",
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
                  width: "100%",
                  justifyContent: "space-between",
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
                  width: "100%",
                  justifyContent: "space-between",
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
              <TertiaryTitle>What can advertisers see about you?</TertiaryTitle>
              <Stack spacing={2}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={adPreferences.employer}
                      onChange={() => toggleAdPreference("employer")}
                    />
                  }
                  label="Employer"
                  labelPlacement="start"
                  sx={{
                    margin: 0,
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={adPreferences.jobTitle}
                      onChange={() => toggleAdPreference("jobTitle")}
                    />
                  }
                  label="Job Title"
                  labelPlacement="start"
                  sx={{
                    margin: 0,
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={adPreferences.education}
                      onChange={() => toggleAdPreference("education")}
                    />
                  }
                  label="Education"
                  labelPlacement="start"
                  sx={{
                    margin: 0,
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={adPreferences.relationshipStatus}
                      onChange={() => toggleAdPreference("relationshipStatus")}
                    />
                  }
                  label="Relationship Status"
                  labelPlacement="start"
                  sx={{
                    margin: 0,
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                />
              </Stack>
            </div>

            <Divider />

            <div>
              <TertiaryTitle>Ad Topics</TertiaryTitle>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                I do not wish to see ads about...
              </Typography>

              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search for topics to block..."
                value={adTopicSearch}
                onChange={(e) => setAdTopicSearch(e.target.value)}
                sx={{ mb: 2 }}
              />

              <Stack spacing={2}>
                {filteredAdTopics.map((topic) => (
                  <FormControlLabel
                    key={topic.id}
                    control={
                      <Switch
                        checked={blockedAdTopics[topic.id]}
                        onChange={() => toggleAdTopic(topic.id)}
                      />
                    }
                    label={
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>{topic.name}</Typography>
                        {topic.popular && (
                          <Typography
                            variant="caption"
                            sx={{
                              backgroundColor: "#e4e6eb",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              color: "#65676b",
                            }}
                          >
                            Popular
                          </Typography>
                        )}
                      </Stack>
                    }
                    labelPlacement="start"
                    sx={{
                      margin: 0,
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  />
                ))}
              </Stack>
            </div>
          </Stack>
        </Subsection>
      </Section>
    </Stack>
  );
};

export default PrivacySettings;
