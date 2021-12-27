import { AppBar, InputBase, Paper } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  onSearchInputChanged: (searchInput: string) => void;
};

export default (props: Props) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <AppBar className="header-flex">
      <Paper
        sx={{
          display: 'flex',
          width: '230px',
          height: '2rem',
          alignSelf: 'center',
          verticalAlign: 'center',
          mt: 1.5,
          borderRadius: 5,
        }}
      >
        <InputBase
          value={searchInput}
          sx={{ p: 2 }}
          placeholder="Search for a recipe.."
          inputProps={{ 'aria-label': 'search' }}
          onChange={(event) => {
            setSearchInput(event.target.value);
            props.onSearchInputChanged(event.target.value);
          }}
        />
        <SearchIcon sx={{ mt: 0.7 }} />
      </Paper>
    </AppBar>
  );
};
