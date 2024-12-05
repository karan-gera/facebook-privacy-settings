import React, { useState } from 'react';
import { 
  TextField, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction,
  Button,
  Avatar,
  Typography,
  InputAdornment,
  Paper,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import BlockIcon from '@mui/icons-material/Block';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f8f9fa',
  padding: '16px',
  marginBottom: '16px',
}));

const StyledButton = styled(Button)({
  textTransform: 'none',
  fontWeight: 500,
  minWidth: '80px',
  boxShadow: 'none',
  '&.block-button': {
    backgroundColor: '#dc3545',
    padding: '6px 12px',
    fontSize: '14px',
    color: '#ffffff !important',
    '& .MuiSvgIcon-root': {
      color: '#ffffff',
    },
    '& .MuiButton-startIcon': {
      color: '#ffffff',
    },
    '&:hover': {
      backgroundColor: '#c82333',
      boxShadow: 'none',
    },
  },
  '&.unblock-button': {
    backgroundColor: '#e4e6eb',
    color: '#050505',
    padding: '6px 12px',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#dcdfe5',
      boxShadow: 'none',
    },
  },
});

const ListSection = styled('div')({
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  overflow: 'hidden',
  marginTop: '12px',
  border: '1px solid #dfe1e5',
});

const StyledListItem = styled(ListItem)({
  padding: '12px 16px',
  '&:hover': {
    backgroundColor: '#f0f2f5',
  },
  '& .MuiListItemSecondaryAction-root': {
    right: '16px',
  },
});

const SectionTitle = styled(Typography)({
  fontSize: '15px',
  fontWeight: 600,
  color: '#1c1e21',
  marginBottom: '8px',
});

const NoResultsMessage = styled(Typography)({
  color: '#65676b',
  textAlign: 'center',
  padding: '16px',
});

const UserAvatar = styled(Avatar)({
  backgroundColor: '#e4e6eb',
  color: '#1c1e21',
  width: 36,
  height: 36,
});

const ScrollableListSection = styled('div')({
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  marginTop: '12px',
  border: '1px solid #dfe1e5',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40px',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))',
    pointerEvents: 'none',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
});

const ScrollableList = styled(List)({
  maxHeight: '300px',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#c1c1c1',
    borderRadius: '4px',
    '&:hover': {
      background: '#a8a8a8',
    },
  },
});

const Blocking = () => {
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [unblockSearch, setUnblockSearch] = useState('');
  const [allUsers] = useState(
    [
      'John Doe',
      'Jane Smith',
      'Alice Brown',
      'Bob Johnson',
      'Charlie Green',
      'Emily White',
      'David Black',
      'Sophia Blue',
      'Michael Grey',
      'Linda Purple',
      'Chris Yellow',
      'Sarah Orange',
      'James Red',
      'Patricia Pink',
      'Robert Gold',
      'Jennifer Violet',
      'William Cyan',
      'Elizabeth Indigo',
      'Charles Lime',
      'Karen Magenta',
    ].sort((a, b) => a.localeCompare(b))
  );

  const handleBlock = (name) => {
    if (!blockedUsers.includes(name)) {
      setBlockedUsers([...blockedUsers, name]);
      setSearch('');
    }
  };

  const handleUnblock = (name) => {
    if (window.confirm(`Are you sure you want to unblock ${name}?`)) {
      setBlockedUsers(blockedUsers.filter((user) => user !== name));
    }
  };

  const filteredUsers = allUsers
    .filter(user => !blockedUsers.includes(user))
    .filter(user => user.toLowerCase().includes(search.toLowerCase()));

  const filteredBlockedUsers = blockedUsers
    .filter(user => user.toLowerCase().includes(unblockSearch.toLowerCase()));

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div>
      <StyledPaper elevation={0}>
        <SectionTitle>
          Block a User
        </SectionTitle>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Search for a user to block..."
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
        <ScrollableListSection>
          {filteredUsers.length > 0 ? (
            <ScrollableList disablePadding>
              {filteredUsers.map((user) => (
                <React.Fragment key={user}>
                  <StyledListItem>
                    <UserAvatar>
                      {getInitials(user)}
                    </UserAvatar>
                    <ListItemText 
                      primary={user}
                      sx={{ 
                        ml: 2,
                        '& .MuiTypography-root': {
                          fontWeight: 500,
                        }
                      }}
                    />
                    <ListItemSecondaryAction>
                      <StyledButton
                        className="block-button"
                        onClick={() => handleBlock(user)}
                        startIcon={<BlockIcon sx={{ fontSize: 20 }} />}
                        disableElevation
                      >
                        Block
                      </StyledButton>
                    </ListItemSecondaryAction>
                  </StyledListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </ScrollableList>
          ) : (
            <NoResultsMessage>
              No users found matching your search
            </NoResultsMessage>
          )}
        </ScrollableListSection>
      </StyledPaper>

      <StyledPaper elevation={0}>
        <SectionTitle>
          Blocked Users ({blockedUsers.length})
        </SectionTitle>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Search blocked users..."
          value={unblockSearch}
          onChange={(e) => setUnblockSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
        <ScrollableListSection>
          {blockedUsers.length > 0 ? (
            <ScrollableList disablePadding>
              {filteredBlockedUsers.map((user) => (
                <React.Fragment key={user}>
                  <StyledListItem>
                    <UserAvatar>
                      {getInitials(user)}
                    </UserAvatar>
                    <ListItemText 
                      primary={user}
                      secondary="Blocked"
                      sx={{ 
                        ml: 2,
                        '& .MuiTypography-root': {
                          fontWeight: 500,
                        },
                        '& .MuiTypography-secondary': {
                          color: '#65676b',
                          fontSize: '13px',
                        }
                      }}
                    />
                    <ListItemSecondaryAction>
                      <StyledButton
                        className="unblock-button"
                        onClick={() => handleUnblock(user)}
                        disableElevation
                      >
                        Unblock
                      </StyledButton>
                    </ListItemSecondaryAction>
                  </StyledListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </ScrollableList>
          ) : (
            <NoResultsMessage>
              No blocked users
            </NoResultsMessage>
          )}
        </ScrollableListSection>
      </StyledPaper>
    </div>
  );
};

export default Blocking;
