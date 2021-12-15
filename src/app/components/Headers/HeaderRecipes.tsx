import { AppBar, InputBase, Paper } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default () => {
  return (
    <AppBar className="header-flex">
      <Paper
        sx={{
          display: 'flex',
          width: '250px',
          height: '2.2rem',
          alignSelf: 'center',
          verticalAlign: 'center',
          mt: 1.5,
          borderRadius: 5,
        }}
      >
        <InputBase
          sx={{ p: 2 }}
          placeholder="Search for a recipe.."
          inputProps={{ 'aria-label': 'search' }}
        />
        <SearchIcon sx={{ m: 1 }} />
      </Paper>
    </AppBar>
  );
};
