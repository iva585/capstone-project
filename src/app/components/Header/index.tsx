import { AppBar, Typography } from '@mui/material';
import React from 'react';
import './index.css';

export default (): JSX.Element => {
  return (
    <AppBar className="header">
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mt: 1,
        }}
      >
        Shopping List
      </Typography>
    </AppBar>
  );
};
