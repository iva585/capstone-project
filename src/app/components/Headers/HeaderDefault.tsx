import { AppBar, Typography } from '@mui/material';
import React from 'react';
import './index.css';

type Props = {
  children: string;
};

export default (props: Props): JSX.Element => {
  return (
    <AppBar className="header">
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
