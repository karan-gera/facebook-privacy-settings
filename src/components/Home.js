import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Avatar, 
  Box, 
  Menu, 
  MenuItem, 
  Typography,
  Stack,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e4e6eb',
  padding: '0 16px',
});

const Home = ({ onNavigate }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePrivacyClick = () => {
    onNavigate('privacy');
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" elevation={0}>
        <StyledToolbar>
          {/* Left Section */}
          <FacebookIcon sx={{ fontSize: 40, color: '#1b74e4' }} />

          {/* Right Section */}
          <IconButton onClick={handleProfileClick}>
            <Avatar sx={{ width: 40, height: 40 }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              elevation: 1,
              sx: {
                mt: 1,
                borderRadius: '8px',
                minWidth: '360px',
                padding: '8px',
                '& .MuiMenuItem-root': {
                  borderRadius: '6px',
                  padding: '8px 12px',
                },
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ width: 60, height: 60 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>John Doe</Typography>
                  <Typography variant="body2" color="textSecondary">See your profile</Typography>
                </Box>
              </Stack>
            </MenuItem>
            <Divider sx={{ my: 1 }} />
            <MenuItem onClick={handlePrivacyClick}>
              <Typography>Settings & privacy</Typography>
            </MenuItem>
          </Menu>
        </StyledToolbar>
      </AppBar>

      {/* Main Content Area */}
      <Box sx={{ 
        pt: '64px',
        backgroundColor: '#f0f2f5',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Typography variant="h4" color="textSecondary">
          Welcome to Facebook
        </Typography>
      </Box>
    </Box>
  );
};

export default Home; 