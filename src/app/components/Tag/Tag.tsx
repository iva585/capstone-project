import { Card, ListItem, Typography } from '@mui/material';
import React from 'react';

type TagType = {
  id: number;
  title: string;
};

type Props = { tag: TagType };

export default (props: Props): JSX.Element => (
  <Card>
    <ListItem>
      <Typography sx={{ fontWeight: 'light', fontSize: 'default' }}>
        {props.tag.title}
      </Typography>
    </ListItem>
  </Card>
);
