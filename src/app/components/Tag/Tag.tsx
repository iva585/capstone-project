import { Card, ListItem, Typography } from '@mui/material';
import React from 'react';

type Props = { name: string };

export default (props: Props): JSX.Element => (
  <Card>
    <ListItem>
      <Typography sx={{ fontWeight: 'light', fontSize: 'default' }}>
        {props.name}
      </Typography>
    </ListItem>
  </Card>
);
