import { Typography } from '@mui/material';
import React from 'react';

export default (): JSX.Element => (
  <Typography
    variant="h6"
    sx={{
      alignSelf: 'start',
      pt: '70px',
      pl: '22px',
      textTransform: 'uppercase',
    }}
  >
    My Birthday Menu
  </Typography>
);
