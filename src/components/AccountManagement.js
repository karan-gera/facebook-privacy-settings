import React, { useState } from 'react';
import { 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  FormControl, 
  FormControlLabel, 
  Checkbox, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction, 
  IconButton,
  Typography,
  Paper,
  Stack,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import DevicesIcon from '@mui/icons-material/Devices';

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

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  color: '#1c1e21',
  marginBottom: theme.spacing(3),
}));

const SubsectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '22px',
  fontWeight: 600,
  color: '#1c1e21',
  marginBottom: theme.spacing(3),
}));

const Label = styled(Typography)({
  fontSize: '14px',
  color: '#1c1e21',
  fontWeight: 500,
});

const StyledButton = styled(Button)({
  textTransform: 'none',
  fontWeight: 500,
  minWidth: '80px',
  boxShadow: 'none',
  backgroundColor: '#e4e6eb',
  color: '#050505',
  padding: '6px 12px',
  fontSize: '14px',
  '&:hover': {
    backgroundColor: '#dcdfe5',
    boxShadow: 'none',
  },
});

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

const AccountManagement = ({ highlightedSetting }) => {
  const [openModals, setOpenModals] = useState({
    profiles: false,
    password: false,
    twoFactor: false,
    devices: false,
    loginAlerts: false,
  });

  const handleOpenModal = (modalName) => {
    setOpenModals({ ...openModals, [modalName]: true });
  };

  const handleCloseModal = (modalName) => {
    setOpenModals({ ...openModals, [modalName]: false });
  };

  // Mock data for devices
  const mockDevices = [
    { device: 'Windows PC', location: 'New York, USA', lastActive: '2 hours ago' },
    { device: 'iPhone 13', location: 'New York, USA', lastActive: 'Active now' },
    { device: 'MacBook Pro', location: 'Boston, USA', lastActive: '2 days ago' },
    { device: 'iPad', location: 'Chicago, USA', lastActive: '1 week ago' },
  ];

  return (
    <Stack spacing={2}>
      <Section elevation={0}>
        <Subsection>
          <SubsectionTitle>Profile Settings</SubsectionTitle>
          <div id="manage-profiles" className="toggle-section">
            <Label>Manage Profiles</Label>
            <StyledButton variant="contained" onClick={() => handleOpenModal('profiles')}>
              Manage
            </StyledButton>
          </div>
        </Subsection>

        <Subsection>
          <SubsectionTitle>Security</SubsectionTitle>
          <Stack spacing={2}>
            <div id="change-password" className="toggle-section">
              <Label>Change Password</Label>
              <StyledButton variant="contained" onClick={() => handleOpenModal('password')}>
                Update
              </StyledButton>
            </div>

            <div id="two-factor-auth" className="toggle-section">
              <Label>Two-Factor Authentication</Label>
              <StyledButton variant="contained" onClick={() => handleOpenModal('twoFactor')}>
                Set Up
              </StyledButton>
            </div>
          </Stack>
        </Subsection>

        <Subsection>
          <SubsectionTitle>Login Activity</SubsectionTitle>
          <Stack spacing={2}>
            <div id="active-sessions" className="toggle-section">
              <Label>Where you're logged in</Label>
              <StyledButton variant="contained" onClick={() => handleOpenModal('devices')}>
                View Devices
              </StyledButton>
            </div>

            <div id="login-alerts" className="toggle-section">
              <Label>Login alerts</Label>
              <StyledButton variant="contained" onClick={() => handleOpenModal('loginAlerts')}>
                Enable
              </StyledButton>
            </div>
          </Stack>
        </Subsection>
      </Section>

      <Dialog open={openModals.profiles} onClose={() => handleCloseModal('profiles')} maxWidth="sm" fullWidth>
        <DialogTitle>
          Manage Profiles
          <IconButton
            className="modal-close-button"
            onClick={() => handleCloseModal('profiles')}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <SearchTextField
            label="Name"
            fullWidth
            variant="outlined"
            defaultValue="John Doe"
            margin="normal"
          />
          <SearchTextField
            label="Username"
            fullWidth
            variant="outlined"
            defaultValue="johndoe123"
            margin="normal"
          />
          <SearchTextField
            label="Bio"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            defaultValue="Software developer passionate about creating great user experiences."
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseModal('profiles')}>Cancel</Button>
          <Button variant="contained" color="primary">Save Changes</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openModals.password} onClose={() => handleCloseModal('password')} maxWidth="sm" fullWidth>
        <DialogTitle>
          Change Password
          <IconButton
            className="modal-close-button"
            onClick={() => handleCloseModal('password')}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            type="password"
            label="Current Password"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            type="password"
            label="New Password"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            type="password"
            label="Confirm New Password"
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseModal('password')}>Cancel</Button>
          <Button variant="contained" color="primary">Update Password</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openModals.twoFactor} onClose={() => handleCloseModal('twoFactor')} maxWidth="sm" fullWidth>
        <DialogTitle>
          Two-Factor Authentication
          <IconButton
            className="modal-close-button"
            onClick={() => handleCloseModal('twoFactor')}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <FormControl component="fieldset" margin="normal">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Use authenticator app"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Use SMS verification"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Use backup codes"
            />
          </FormControl>
          <Divider />
          <SearchTextField
            label="Phone Number for SMS"
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseModal('twoFactor')}>Cancel</Button>
          <Button variant="contained" color="primary">Save Settings</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openModals.devices} onClose={() => handleCloseModal('devices')} maxWidth="md" fullWidth>
        <DialogTitle>
          Active Sessions
          <IconButton
            className="modal-close-button"
            onClick={() => handleCloseModal('devices')}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <List>
            {mockDevices.map((device, index) => (
              <ListItem key={index}>
                <DevicesIcon sx={{ marginRight: 2, color: '#1877f2' }} />
                <ListItemText
                  primary={device.device}
                  secondary={`${device.location} • ${device.lastActive}`}
                />
                <ListItemSecondaryAction>
                  <Button color="error">Log Out</Button>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseModal('devices')}>Close</Button>
          <Button variant="contained" color="error">Log Out All Devices</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openModals.loginAlerts} onClose={() => handleCloseModal('loginAlerts')} maxWidth="sm" fullWidth>
        <DialogTitle>
          Login Alert Settings
          <IconButton
            className="modal-close-button"
            onClick={() => handleCloseModal('loginAlerts')}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <FormControl component="fieldset" margin="normal">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Email alerts for unrecognized logins"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Push notifications for new device logins"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="SMS alerts for suspicious activity"
            />
          </FormControl>
          <Divider />
          <SearchTextField
            label="Email for alerts"
            fullWidth
            variant="outlined"
            defaultValue="john.doe@example.com"
            margin="normal"
          />
          <SearchTextField
            label="Phone number for SMS alerts"
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseModal('loginAlerts')}>Cancel</Button>
          <Button variant="contained" color="primary">Save Settings</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default AccountManagement;
