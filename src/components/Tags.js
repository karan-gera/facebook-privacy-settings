import React, { useState } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      color: '#1877f2',
      '& + .MuiSwitch-track': {
        backgroundColor: '#1877f2',
        opacity: 0.5,
      },
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
  },
}));

const Tags = () => {
  const [tagReview, setTagReview] = useState(false);

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>Tags</h2>
      <div className="toggle-section">
        <FormControlLabel
          control={
            <CustomSwitch
              checked={tagReview}
              onChange={(e) => setTagReview(e.target.checked)}
            />
          }
          label="Require approval for tags before they appear on your profile"
          labelPlacement="start"
        />
      </div>
    </div>
  );
};

export default Tags;
