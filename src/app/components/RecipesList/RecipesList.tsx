import { List, ListItem, Typography } from '@mui/material';
import React from 'react';
import CardDefault from '../RecipeCards/CardDefault';

export default (): JSX.Element => {
  return (
    <List sx={{ display: 'flex', flexDirection: 'column', p: '7px' }}>
      <Typography
        variant="h6"
        sx={{
          alignSelf: 'start',
          pl: '16px',
          textTransform: 'uppercase',
        }}
      >
        All Recipes
      </Typography>
      <ListItem>
        <CardDefault />
      </ListItem>
      <ListItem>
        <CardDefault />
      </ListItem>
      <ListItem>
        <CardDefault />
      </ListItem>
    </List>
  );
};
