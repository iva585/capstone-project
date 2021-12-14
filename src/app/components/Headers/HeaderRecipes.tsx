import { AppBar, InputBase } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default () => {
  return (
    <AppBar className="header">
      <InputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <SearchIcon />
    </AppBar>
  );
};
