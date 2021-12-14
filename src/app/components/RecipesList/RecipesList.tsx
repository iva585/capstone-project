import { List, ListItem } from '@mui/material';
import React from 'react';
import CardDefault from '../RecipeCards/CardDefault';

export default (): JSX.Element => {
  return (
    <List>
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
