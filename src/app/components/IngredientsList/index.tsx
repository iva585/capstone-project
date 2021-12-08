import React from 'react';
import List from '@mui/material/List/List';
import IngredientListItem from '../IngredientListItem';

export default () => {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        mt: '5px',
        pr: '100px',
      }}
    >
      <IngredientListItem />
    </List>
  );
};
