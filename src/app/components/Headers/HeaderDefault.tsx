import { AppBar, IconButton, Typography } from '@mui/material';
import React from 'react';
import './index.css';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router';

type Props = {
  children: string;
};

export default (props: Props): JSX.Element => {
  const navigate = useNavigate();
  return (
    <AppBar
      className="header"
      sx={{ display: 'flex', flexDirection: 'row', gap: '17px' }}
    >
      <IconButton onClick={() => navigate('/')}>
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
