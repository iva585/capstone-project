import { List, ListItem } from '@mui/material';
import React from 'react';
import CardDefault from '../RecipeCards/CardDefault';

export default (): JSX.Element => {
  return (
    <List sx={{ display: 'flex', flexDirection: 'column', p: '7px' }}>
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
