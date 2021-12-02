import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

export default (): JSX.Element => {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox edge="start" />
      </ListItemIcon>
      <ListItemText sx={{ wordWrap: 'break-word' }}>Some item</ListItemText>
    </ListItem>
  );
};
