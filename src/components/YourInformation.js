import React, { useState } from 'react';
import { 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction, 
  IconButton, 
  Typography,
  Paper,
  Stack,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

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

const YourInformation = ({ highlightedSetting }) => {
  const [openModals, setOpenModals] = useState({
    access: false,
    download: false,
    transfer: false,
    search: false,
  });

  const handleOpenModal = (modalName) => {
    setOpenModals({ ...openModals, [modalName]: true });
  };

  const handleCloseModal = (modalName) => {
    setOpenModals({ ...openModals, [modalName]: false });
  };

  // Mock data for search history
  const mockSearchHistory = [
    { term: 'React development', date: '2 hours ago' },
    { term: 'JavaScript tutorials', date: 'Yesterday' },
    { term: 'Web design inspiration', date: '3 days ago' },
    { term: 'UI/UX best practices', date: '1 week ago' },
  ];

  return (
    <Stack spacing={2}>
      <Section elevation={0}>
        <SectionTitle variant="h6">Your Information</SectionTitle>

        <Subsection>
          <SubsectionTitle>Data Access</SubsectionTitle>
          <Stack spacing={2}>
            <div id="access-info" className="toggle-section">
              <label>Access your information</label>
              <StyledButton variant="contained" onClick={() => handleOpenModal('access')}>
                Access
              </StyledButton>
            </div>

            <div id="search-history" className="toggle-section">
              <label>Review Search History</label>
              <StyledButton variant="contained" onClick={() => handleOpenModal('search')}>
                Review
              </StyledButton>
            </div>
          </Stack>
        </Subsection>

        <Subsection>
          <SubsectionTitle>Data Management</SubsectionTitle>
          <Stack spacing={2}>
            <div id="download-info" className="toggle-section">
              <label>Download your information</label>
              <StyledButton variant="contained" onClick={() => handleOpenModal('download')}>
                Download
              </StyledButton>
            </div>

            <div id="transfer-info" className="toggle-section">
              <label>Transfer a copy of your information</label>
              <StyledButton variant="contained" onClick={() => handleOpenModal('transfer')}>
                Transfer
              </StyledButton>
            </div>
          </Stack>
        </Subsection>
      </Section>

      <Dialog open={openModals.access} onClose={() => handleCloseModal('access')} maxWidth="md" fullWidth>
        <DialogTitle>
          Access Your Information
          <IconButton
            className="modal-close-button"
            onClick={() => handleCloseModal('access')}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1">
            Select the type of information you want to access:
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Profile Information" 
                secondary="Name, email, phone number, and other profile details" 
              />
              <ListItemSecondaryAction>
                <Button color="primary">View</Button>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText 
                primary="Posts and Comments" 
                secondary="Your posts, comments, and reactions" 
              />
              <ListItemSecondaryAction>
                <Button color="primary">View</Button>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText 
                primary="Photos and Videos" 
                secondary="Media you've uploaded or been tagged in" 
              />
              <ListItemSecondaryAction>
                <Button color="primary">View</Button>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText 
                primary="Connected Apps" 
                secondary="Apps and websites you've connected with" 
              />
              <ListItemSecondaryAction>
                <Button color="primary">View</Button>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseModal('access')}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openModals.search} onClose={() => handleCloseModal('search')} maxWidth="sm" fullWidth>
        <DialogTitle>
          Search History
          <IconButton
            className="modal-close-button"
            onClick={() => handleCloseModal('search')}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            placeholder="Search your history..."
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
            }}
          />
          <List>
            {mockSearchHistory.map((item, index) => (
              <>
                <ListItem key={index}>
                  <ListItemText primary={item.term} secondary={item.date} />
                  <ListItemSecondaryAction>
                    <IconButton size="small" color="error">
                      <CloseIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseModal('search')}>Close</Button>
          <Button variant="contained" color="error">Clear History</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openModals.download} onClose={() => handleCloseModal('download')} maxWidth="sm" fullWidth>
        <DialogTitle>
          Download Your Information
          <IconButton
            className="modal-close-button"
            onClick={() => handleCloseModal('download')}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1">
            Select the data you want to download:
          </Typography>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Date Range</InputLabel>
            <Select defaultValue="all" label="Date Range">
              <MenuItem value="all">All Time</MenuItem>
              <MenuItem value="year">Last Year</MenuItem>
              <MenuItem value="6months">Last 6 Months</MenuItem>
              <MenuItem value="3months">Last 3 Months</MenuItem>
              <MenuItem value="month">Last Month</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Format</InputLabel>
            <Select defaultValue="html" label="Format">
              <MenuItem value="html">HTML</MenuItem>
              <MenuItem value="json">JSON</MenuItem>
            </Select>
          </FormControl>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="textSecondary">
            Your download will include your profile information, posts, photos, and more.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseModal('download')}>Cancel</Button>
          <Button variant="contained" color="primary" startIcon={<DownloadIcon />}>
            Start Download
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openModals.transfer} onClose={() => handleCloseModal('transfer')} maxWidth="sm" fullWidth>
        <DialogTitle>
          Transfer Your Information
          <IconButton
            className="modal-close-button"
            onClick={() => handleCloseModal('transfer')}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1">
            Choose where to transfer your data:
          </Typography>
          <List>
            <ListItem button>
              <ListItemText 
                primary="Google" 
                secondary="Transfer to Google services" 
              />
              <SwapHorizIcon color="primary" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText 
                primary="Microsoft" 
                secondary="Transfer to Microsoft services" 
              />
              <SwapHorizIcon color="primary" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText 
                primary="Apple" 
                secondary="Transfer to Apple services" 
              />
              <SwapHorizIcon color="primary" />
            </ListItem>
          </List>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="textSecondary">
            Your data will be securely transferred to the selected service.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseModal('transfer')}>Cancel</Button>
          <Button variant="contained" color="primary">
            Continue Transfer
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default YourInformation;
