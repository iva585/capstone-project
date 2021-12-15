import { AppBar, IconButton, Typography } from '@mui/material';
import React from 'react';
import './index.css';
import HomeIcon from '@mui/icons-material/Home';

type Props = {
  children: string;
};

export default (props: Props): JSX.Element => {
  return (
    <AppBar
      className="header"
      sx={{ display: 'flex', flexDirection: 'row', gap: '17px' }}
    >
      <IconButton>
        <HomeIcon fontSize="large" sx={{ alignSelf: 'flex-start' }} />
      </IconButton>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mt: 1,
        }}
      >
        {props.children}
      </Typography>
    </AppBar>
  );
};
