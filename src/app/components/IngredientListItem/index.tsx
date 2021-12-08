import Add from '@mui/icons-material/Add';
import {
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

export default (): JSX.Element => {
  return (
    <ListItem>
      <Typography>300g</Typography>
      <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
      <ListItemText>Cheese</ListItemText>

      <IconButton edge="end" aria-label="add to shopping list">
        <Add />
      </IconButton>
    </ListItem>
  );
};
