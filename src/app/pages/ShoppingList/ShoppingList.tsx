import { Checkbox, List, ListItem, Typography } from '@mui/material';
import React from 'react';

type Props = {
  items: { title: string }[];
};

export default (props: Props): JSX.Element => (
  <>
    <Typography>Shopping List</Typography>
    <List>
      {props.items.map((item) => (
        <ListItem>
          {' '}
          <Checkbox edge="start" />
          {item.title}
        </ListItem>
      ))}
    </List>
  </>
);
